import { Typography } from "@mui/material";
import LoginButton from "../components/Buttons/LoginButton";
import LogoutButton from "../components/Buttons/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <Typography>Welcome to Index</Typography>
      {!isAuthenticated && !isLoading && <LoginButton />}
      {isAuthenticated && !isLoading && <LogoutButton />}
    </>
  );
};

export default LandingPage;
