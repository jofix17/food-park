import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

interface PasswordTextFieldProps {
  canToggle?: boolean;
  label?: string;
  [key: string]: any;
}

const PasswordTextField = ({
  canToggle,
  label,
  ...others
}: PasswordTextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      InputProps={{
        autoComplete: "current-password",
        endAdornment: canToggle && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle-password-visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(event) => event.preventDefault()}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      label={label}
      type={showPassword ? "text" : "password"}
      {...others}
    />
  );
};

export default PasswordTextField;
