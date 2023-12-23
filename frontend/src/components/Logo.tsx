import { useTheme } from "@mui/material";

const Logo = () => {
  const theme = useTheme();
  const getLogoPath = () => {
    return theme.palette.mode === "dark"
      ? "/assets/logo-white.svg"
      : "/assets/logo-color.svg";
  };

  return (
    <img
      src={getLogoPath()}
      alt={`${theme.palette.mode} logo`}
      style={{ width: "70px", height: "70px" }}
    />
  );
};

export default Logo;
