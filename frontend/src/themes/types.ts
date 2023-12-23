import { Direction, PaletteMode } from "@mui/material";

export type Contrast = "high" | "normal" | "low";
export type ColorPreset = "blue" | "green" | "indigo" | "purple";
export type Layout = "horizontal" | "vertical";
export type ColorSaturation = "blend-in" | "discreet" | "evident";

export interface PaletteColor {
  lightest: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrastText: string;
}

export interface WithAlphaColor extends PaletteColor {
  alpha4: string;
  alpha8: string;
  alpha12: string;
  alpha30: string;
  alpha50: string;
}

export interface Neutral {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface CustomPalette {
  action: {
    active: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hover: string;
    selected: string;
  };
  background: {
    default: string;
    paper: string;
  };
  common: {
    black: string;
    white: string;
  };
  divider: string;
  error: WithAlphaColor;
  info: WithAlphaColor;
  mode: PaletteMode;
  neutral: Neutral;
  primary: WithAlphaColor;
  secondary: WithAlphaColor;
  success: WithAlphaColor;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  warning: WithAlphaColor;
}

export interface Settings {
  colorPreset: ColorPreset;
  contrast: Contrast;
  direction: Direction;
  layout?: Layout;
  navColor: ColorSaturation;
  paletteMode: PaletteMode;
  responsiveFontSize?: boolean;
  stretch?: boolean;
}

export interface ColorPresetContrast {
  colorPreset: ColorPreset;
  contrast: Contrast;
  isDarkMode?: boolean;
}
