import Seo from "../../components/Seo";
import { Button, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ErrorMessageBox from "../../components/Formik/ErrorMessageBox";
import LoginField from "../../components/Formik/LoginField";
import useMounted from "../../hooks/useMounted";
import useSearchParams from "../../hooks/useSearchParams";
import { paths } from "../../routes/paths";

const LoginPage = () => {
  const isMounted = useMounted();
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo");

  return (
    <>
      <Seo title="Login" />
      <div>
        <Stack sx={{ mb: 4 }} spacing={1}>
          <Typography variant="h5">Log in</Typography>
        </Stack>
        <Formik
          initialValues={{
            email: "",
            password: "",
            submit: null,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
          })}
          onSubmit={(values, helpers) => {
            helpers.setSubmitting(true);
            const { email, password } = values;
            // signIn({
            //   email,
            //   password,
            // })
            //   .then((resp) => {
            //     if (isMounted()) {
            //       window.location.href = returnTo || paths.auth.login;
            //     }
            //   })
            //   .catch((err) => {
            //     if (isMounted()) {
            //       helpers.setStatus({ success: false });
            //       helpers.setErrors({ submit: err.message });
            //       helpers.setSubmitting(false);
            //     }
            //   });
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete="off" noValidate>
              <LoginField />
              <ErrorMessageBox />
              <Button
                disabled={isSubmitting}
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginPage;
