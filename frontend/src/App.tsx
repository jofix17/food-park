import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SettingsContextConsumer,
  SettingsContextProvider,
} from "./contexts/SettingsContext";

import createTheme from "./themes/createTheme";
import Rtl from "./components/Rtl";
import SplashScreen from "./components/SplashScreen";
import useNProgress from "./hooks/useNProgress";
import { useRoutes } from "react-router-dom";
import routes from "./routes/root";
import { Helmet } from "react-helmet-async";
import { useMemo } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  useNProgress();

  const memoizedRoutes = useMemo(() => routes, []);
  const element = useRoutes(memoizedRoutes);

  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <SettingsContextConsumer>
          {(settings) => {
            const theme = createTheme({
              colorPreset: settings.colorPreset,
              contrast: settings.contrast,
              direction: settings.direction,
              navColor: settings.navColor,
              paletteMode: settings.paletteMode,
            });

            const showSplashScreen = false;

            return (
              <ThemeProvider theme={theme}>
                <Helmet>
                  <meta name="color-scheme" content={settings.paletteMode} />
                  <meta
                    name="theme-color"
                    content={theme.palette.neutral[900]}
                  />
                </Helmet>
                <Rtl direction={settings.direction}>
                  <CssBaseline />
                  {showSplashScreen ? <SplashScreen /> : <>{element}</>}
                </Rtl>
              </ThemeProvider>
            );
          }}
        </SettingsContextConsumer>
      </SettingsContextProvider>
    </QueryClientProvider>
  );
};

export default App;
