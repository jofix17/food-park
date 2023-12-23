import { useEffect, useState } from "react";
import useMounted from "./useMounted";
import usePathName from "./usePathName";
import nProgress from "nprogress";

const useNProgress = () => {
  const isMounted = useMounted();
  const pathName = usePathName();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) {
      nProgress.start();
      setVisible(true);
    }
    if (visible) {
      nProgress.done();
      setVisible(false);
    }

    if (!visible && isMounted()) {
      setVisible(false);
      nProgress.done();
    }

    return () => {
      nProgress.done();
    };
  }, [pathName, isMounted]);
};

export default useNProgress;
