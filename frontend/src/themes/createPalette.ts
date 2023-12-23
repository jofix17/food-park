import { alpha } from "@mui/material";
import {
  black,
  common,
  error,
  info,
  neutral,
  success,
  warning,
  white,
} from "./colors";
import { ColorPresetContrast, CustomPalette } from "./types";
import { getPrimary } from "./helpers";

const createPalette = ({
  colorPreset,
  contrast,
  isDarkMode,
}: ColorPresetContrast): CustomPalette => {
  const neutralFade = isDarkMode ? neutral[100] : neutral[900];
  const isHighContrast = contrast === "high";
  const backgroundColor =
    isHighContrast && isDarkMode
      ? black[800]
      : isHighContrast
      ? neutral[50]
      : isDarkMode
      ? black[500]
      : common.white;

  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutralFade, 0.38),
      disabledBackground: alpha(neutralFade, 0.12),
      focus: alpha(neutralFade, 0.16),
      hover: alpha(neutralFade, 0.04),
      selected: alpha(neutralFade, 0.12),
    },
    background: {
      default: backgroundColor,
      paper: isDarkMode ? neutral[900] : common.white,
    },
    common: { white: common.white, black: common.black },
    divider: isDarkMode ? neutral[700] : white[400],
    error,
    info,
    success,
    warning,
    mode: isDarkMode ? "dark" : "light",
    neutral,
    primary: getPrimary(colorPreset),
    secondary: getPrimary(colorPreset),
    text: {
      primary: isDarkMode ? white[500] : neutral[900],
      secondary: isDarkMode ? neutral[400] : neutral[500],
      disabled: isDarkMode ? neutral[300] : alpha(neutral[900], 0.38),
    },
  };
};

export default createPalette;
