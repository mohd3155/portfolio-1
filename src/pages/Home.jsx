import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import image from "../assets/image.jpg";
import About from "./About";

const typing = keyframes`
  from { width: 0; }
  
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

const Home = () => {
  const theme = useTheme();

  // Define breakpoints for each screen size
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  // Set width based on the active breakpoint
  let responsiveWidth;
  if (isXs) responsiveWidth = "100%";
  else if (isSm) responsiveWidth = "55%";
  else if (isMd) responsiveWidth = "51%";
  else if (isLg) responsiveWidth = "100%";
  else if (isXl) responsiveWidth = "87%";
  return (
    <>
      <Box
        component="div"
        sx={{
          width: 1,
          height: "100vh",
          backgroundColor: "#0BCEAF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <Box
          component="section"
          sx={{
            width: "95%",
            height: { xs: "100%", lg: "90%" },
            display: "flex",
            justifyContent: { xs: "center", lg: "center" },
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: { xs: "100%", lg: "80%" },
              height: { xs: "90%", lg: "100%" },
              display: "flex",
              flexDirection: { xs: "column", xl: "row" },
              justifyContent: { xs: "center", lg: "space-between" },
              alignItems: "center",
            }}
          >
            <Box
              component="div"
              sx={{
                height: { xs: "70%", lg: "100%" },
                width: { xs: "100%", md: "70%", lg: "50%", xl: "50%" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={image}
                sx={{
                  width: { xs: "90%", md: "90%", lg: "90%", xl: "100%" },
                  height: { xs: "90%", md: "90%", lg: "90%", xl: "90%" },
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box
              component="section"
              sx={{
                width: { xs: "100%", lg: "60%" },
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="section"
                sx={{
                  width: "100%",
                  height: { xs: "70%", md: "90%", lg: "70%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ color: "white", fontSize: "2rem" }}
                >
                  I'm
                </Typography>
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{
                    color: "transparent",
                    fontSize: { xs: "3rem", md: "4rem", lg: "4rem" },
                    fontWeight: "bold",
                    WebkitTextStroke: "2px white",
                  }}
                >
                  MOHAMMED
                </Typography>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    color: "white",
                    overflow: "hidden",
                    borderRight: "2px solid",
                    whiteSpace: "nowrap",
                    letterSpacing: ".10em",
                    animation: `${typing} 3.5s steps(30, end) infinite, ${blinkCaret} 0.75s step-end infinite`,
                    width: responsiveWidth,
                    fontSize: {
                      xs: "1.4rem",
                      md: "2rem",
                      lg: "3rem",
                      xl: "2.5rem",
                    },
                  }}
                >
                  FrontEnd Web Developer
                </Typography>
                <Button
                  sx={{
                    width: { xs: "50%", md: "25%", lg: "25%" },
                    height: "50px",
                    color: "white",
                    border: 1,
                    borderRadius: "30px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      borderColor: "white",
                    },
                  }}
                  href="https://drive.google.com/file/d/1xPIHVwJGBC1nxrg_tSRpGrMERG8s1O61/view?usp=sharing"
                >
                  Download CV
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <About />
    </>
  );
};

export default Home;
