import { useSearchParams as useRouterDomSearchParams } from "react-router-dom";

const useSearchParams = () => {
  const [searchParams] = useRouterDomSearchParams();

  return searchParams;
};

export default useSearchParams;
