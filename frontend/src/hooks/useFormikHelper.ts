import { getIn, useFormikContext } from "formik";
import React, { useMemo } from "react";

const useFormikHelper = () => {
  const { touched, errors } = useFormikContext();

  const errorText = useMemo(
    () =>
      (field: string): string =>
        getIn(touched, field) && getIn(errors, field),
    [touched, errors]
  );

  const hasError = useMemo(
    () => (field: string) => !!errorText(field),
    [errorText]
  );

  return {
    errorText,
    hasError,
  };
};

export default useFormikHelper;
