import { Stack, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import useFormikHelper from "../../hooks/useFormikHelper";
import PasswordTextField from "../TextFields/PasswordTextField";

const LoginField = () => {
  const { getFieldProps } = useFormikContext();
  const { hasError, errorText } = useFormikHelper();

  return (
    <Stack spacing={3}>
      <TextField
        autoFocus
        error={hasError("email")}
        fullWidth
        helperText={errorText("email")}
        label="Email address"
        type="email"
        variant="filled"
        {...getFieldProps("email")}
      />
      <PasswordTextField
        error={hasError("password")}
        helperText={errorText("password")}
        label="Password"
        variant="filled"
        {...getFieldProps("password")}
        canToggle
      />
    </Stack>
  );
};

export default LoginField;
