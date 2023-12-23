import {
  alpha,
  backdropClasses,
  filledInputClasses,
  outlinedInputClasses,
  paperClasses,
  tableCellClasses,
} from "@mui/material";
import { common } from "./colors";
import { CustomPalette } from "./types";

const createComponents = ({
  isDarkMode,
  palette,
}: {
  isDarkMode?: boolean;
  palette: CustomPalette;
}) => {
  const getBoxShadow = (depth: number) =>
    isDarkMode
      ? `0px 5px 22px rgba(0, 0, 0, 0.0${depth}), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.0${
          depth - 2
        })`
      : `0px 5px 22px rgba(0, 0, 0, 0.0${
          depth - 4
        }), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.0${depth - 5})`;

  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: isDarkMode
            ? palette.neutral[300]
            : palette.neutral[200],
          color: common.black,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          [`&:not(.${backdropClasses.invisible})`]: {
            backgroundColor: isDarkMode
              ? alpha(common.black, 0.5)
              : alpha(palette.neutral[900], 0.75),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          [`&.${paperClasses.elevation1}`]: {
            boxShadow: getBoxShadow(8),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        icon: {
          color: palette.action.active,
        },
        root: {
          borderColor: isDarkMode ? palette.neutral[700] : palette.neutral[200],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "#nprogress .bar": {
          backgroundColor: palette.primary.main,
        },
        ".slick-dots li button": {
          "&:before": {
            fontSize: 10,
            color: palette.primary.main,
          },
        },
        ".slick-dots li.slick-active button": {
          "&:before": {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: palette.text.secondary,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: isDarkMode ? palette.divider : palette.neutral[200],
          "&:hover": {
            backgroundColor: palette.action.hover,
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: "transparent",
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: "transparent",
            borderColor: palette.primary.main,
            boxShadow: `${palette.primary.main} 0 0 0 2px`,
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: palette.error.main,
            boxShadow: `${palette.error.main} 0 0 0 2px`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: palette.action.hover,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: isDarkMode ? palette.divider : palette.neutral[200],
            },
          },
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: "transparent",
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.primary.main,
              boxShadow: `${palette.primary.main} 0 0 0 2px`,
            },
          },
          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.error.main,
              boxShadow: `${palette.error.main} 0 0 0 2px`,
            },
          },
        },
        notchedOutline: {
          borderColor: isDarkMode ? palette.divider : palette.neutral[200],
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: palette.neutral[500],
        },
        track: {
          backgroundColor: palette.neutral[400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          [`& .${tableCellClasses.root}`]: {
            backgroundColor: isDarkMode
              ? palette.neutral[800]
              : palette.neutral[50],
            color: isDarkMode ? palette.neutral[400] : palette.neutral[700],
          },
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: palette.divider,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backdropFilter: "blur(6px)",
          background: alpha(palette.neutral[900], 0.8),
        },
      },
    },
  };
};

export default createComponents;
