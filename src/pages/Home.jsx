import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@emotion/react";
import image from "../assets/image.jpg";
import About from "./About";

const typing = keyframes`
  from { width: 0; }
  to { width: 75%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

const Home = () => {
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
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "80%",
              height: "70%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box component="div" sx={{ height: "100%", width: "50%" }}>
              <Box
                component="img"
                src={image}
                sx={{ width: "90%", height: "100%", borderRadius: "50%" }}
              />
            </Box>
            <Box
              component="section"
              sx={{
                width: "60%",
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
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                  I'm
                </Typography>
                <Typography
                  component="h1"
                  variant="h3"
                  sx={{
                    color: "transparent",
                    fontSize: "6rem",
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
                    width: "75%",
                  }}
                >
                  FrontEnd Web Developer
                </Typography>
                <Button
                  sx={{
                    width: "25%",
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
