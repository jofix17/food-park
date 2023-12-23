import { Box, FormHelperText } from "@mui/material";
import { FormikErrors, useFormikContext } from "formik";

interface MyFormValues {
  submit: string;
}

const ErrorMessageBox = () => {
  const { errors, isValid } = useFormikContext<MyFormValues>();

  return isValid ? (
    <></>
  ) : (
    <Box>
      {!!errors ? (
        <FormHelperText error sx={{ mt: 3 }}>
          {errors.submit}
        </FormHelperText>
      ) : (
        <FormHelperText>*Please fill-up required fields</FormHelperText>
      )}
    </Box>
  );
};

export default ErrorMessageBox;
