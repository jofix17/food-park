import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode, memo, useCallback, useEffect, useState } from "react";
import useRouter from "../hooks/useRouter";
import { paths } from "../routes/paths";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.href,
      }).toString();

      const href = paths.index + `?${searchParams}`;

      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isLoading) {
      check();
    }
  }, [isLoading]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

export default memo(AuthGuard);
