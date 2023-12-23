import { createShadows } from "./createShadow";
import { ColorPresetContrast } from "./types";
import createComponents from "./createComponents";
import createPalette from "./createPalette";

const createOptions = ({
  colorPreset,
  contrast,
  isDarkMode,
}: ColorPresetContrast) => {
  const palette = createPalette({ colorPreset, contrast, isDarkMode });
  const components = createComponents({ palette, isDarkMode });
  const shadows = createShadows();

  return {
    palette,
    components,
    shadows,
  };
};

export default createOptions;
