import React, { useMemo } from "react";
import { NavigateOptions, useNavigate } from "react-router-dom";

interface RouterFunctions {
  back: () => void;
  forward: () => void;
  refresh: () => void;
  push: (href: string, options?: NavigateOptions) => void;
  replace: (href: string, options?: NavigateOptions) => void;
  prefetch: (href: string) => void;
}

const useRouter = (): RouterFunctions => {
  const navigate = useNavigate();

  return useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      refresh: () => navigate(0),
      push: (href, options) => navigate(href, options),
      replace: (href, options) => navigate(href, { ...options, replace: true }),
      prefetch: (href) => {},
    }),
    [navigate]
  );
};

export default useRouter;
