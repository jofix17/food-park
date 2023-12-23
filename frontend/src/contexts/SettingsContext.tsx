import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Settings } from "../themes/types";
import { isEqual } from "lodash";

interface SettingsContextProps extends Settings {
  isInitialized: boolean;
  openDrawer: boolean;
}

interface SettingsContextData extends SettingsContextProps {
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  handleReset: () => void;
  handleUpdate: (settings: Partial<Settings>) => void;
  isCustom: boolean;
}

const restoreSettings = (): SettingsContextProps | null => {
  let value: SettingsContextProps | null = null;

  try {
    const restored = window.localStorage.getItem(STORAGE_KEY);

    if (restored) {
      value = JSON.parse(restored);
    }
  } catch (err) {
    console.error(err);
  }

  return value;
};

const deleteSettings = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error(err);
  }
};

const storeSettings = (value: SettingsContextProps) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

const STORAGE_KEY = "app.settings";

const initialSettings: Settings = {
  colorPreset: "green",
  contrast: "normal",
  direction: "ltr",
  layout: "vertical",
  navColor: "discreet",
  paletteMode: "light",
  responsiveFontSize: true,
  stretch: false,
};

const initialState: SettingsContextProps = {
  ...initialSettings,
  isInitialized: false,
  openDrawer: false,
};

const SettingsContext = createContext<SettingsContextData>({
  ...initialState,
  handleDrawerClose: () => {},
  handleDrawerOpen: () => {},
  handleReset: () => {},
  handleUpdate: () => {},
  isCustom: false,
});

const SettingsContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<SettingsContextProps>(initialState);

  useEffect(() => {
    const restored = restoreSettings();

    if (restored) {
      setState((prevState) => ({
        ...prevState,
        ...restored,
        isInitialized: true,
      }));
    }
  }, []);

  const handleReset = useCallback(() => {
    deleteSettings();
    setState((prevState) => ({ ...prevState, ...initialSettings }));
  }, []);

  const handleUpdate = useCallback(
    (settings: Partial<SettingsContextProps>) => {
      setState((prevState) => {
        storeSettings({
          colorPreset: prevState.colorPreset,
          contrast: prevState.contrast,
          direction: prevState.direction,
          layout: prevState.layout,
          navColor: prevState.navColor,
          paletteMode: prevState.paletteMode,
          responsiveFontSize: prevState.responsiveFontSize,
          stretch: prevState.stretch,
          isInitialized: prevState.isInitialized,
          openDrawer: prevState.openDrawer,
          ...settings,
        });

        return {
          ...prevState,
          ...settings,
        };
      });
    },
    []
  );

  const handleDrawerOpen = useCallback(() => {
    setState((prevState) => ({ ...prevState, openDrawer: true }));
  }, []);

  const handleDrawerClose = useCallback(() => {
    setState((prevState) => ({ ...prevState, openDrawer: false }));
  }, []);

  const isCustom = useMemo(() => {
    return !isEqual(initialSettings, {
      colorPreset: state.colorPreset,
      contrast: state.contrast,
      direction: state.direction,
      layout: state.layout,
      navColor: state.navColor,
      paletteMode: state.paletteMode,
      responsiveFontSize: state.responsiveFontSize,
      stretch: state.stretch,
    });
  }, [state]);

  return (
    <SettingsContext.Provider
      value={{
        ...state,
        handleReset,
        handleUpdate,
        handleDrawerOpen,
        handleDrawerClose,
        isCustom,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error("useSettingsContext must be used under SettingsContext");
  }

  return context;
};

const SettingsContextConsumer = SettingsContext.Consumer;

export { SettingsContextProvider, SettingsContextConsumer, useSettingsContext };
