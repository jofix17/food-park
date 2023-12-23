import { Direction } from "@mui/material";
import { ReactNode, useEffect } from "react";
import createCache from "@emotion/cache";
import rtlPlugin from "@mwvalen/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

const styleCache = () =>
  createCache({
    key: "rtl",
    prepend: true,
    stylisPlugins: [rtlPlugin],
  });

const Rtl = ({
  children,
  direction,
}: {
  children: ReactNode;
  direction: Direction;
}) => {
  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  if (direction === "rtl") {
    return <CacheProvider value={styleCache()}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

export default Rtl;
