import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material";
import { CustomPalette, Settings } from "./types";
import createBaseOptions from "./base/createOptions";
import createThemeOptions from "./createOptions";

declare module "@mui/material/styles" {
  interface Theme {
    palette: CustomPalette;
  }
}

const createTheme = (config: Settings) => {
  const { colorPreset, contrast, direction, paletteMode, responsiveFontSize } =
    config;
  let theme = createMuiTheme(
    createBaseOptions(direction),
    createThemeOptions({
      colorPreset,
      contrast,
      isDarkMode: paletteMode === "dark",
    })
  );

  if (responsiveFontSize) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

export default createTheme;
