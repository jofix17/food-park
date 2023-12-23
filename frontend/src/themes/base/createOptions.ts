import { Direction } from "@mui/material";
import createTypography from "./createTypography";
import createComponents from "./createComponents";

const createOptions = (direction?: Direction) => {
  return {
    typography: createTypography(),
    components: createComponents(),
    shape: { borderRadius: 8 },
    breakpoints: {
      values: {
        xl: 1440,
        lg: 1200,
        md: 900,
        sm: 600,
        xs: 0,
      },
    },
    direction: direction || "ltr",
  };
};

export default createOptions;
