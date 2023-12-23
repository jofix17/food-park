import {
  Box,
  Button,
  Container,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Seo from "../components/Seo";
import RouterLink from "../components/RouterLink";
import { paths } from "../routes/paths";

const Error404Page = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Seo title="Error: Not found" />
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          py: "80px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Box
              alt="Not found"
              component="img"
              src="/assets/errors/error-404.png"
              sx={{
                height: "auto",
                maxWidth: "100%",
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" variant={mdUp ? "h1" : "h4"}>
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mt: 0.5 }}>
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 6,
            }}
          >
            <Button component={RouterLink} to={paths.auth.login}>
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Error404Page;
