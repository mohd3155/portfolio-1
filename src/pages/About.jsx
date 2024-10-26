import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import image from "../assets/image.jpg";

const About = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: "100vh",
        paddingY: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ............................... */}
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "30%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: 150,
            WebkitTextStroke: "1px #dee2e6",
            color: "transparent",
            fontFamily: "Roboto",
            fontWeight: "900",
          }}
        >
          ABOUT
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{
            textAlign: "center",
            position: "absolute",
            color: "#0BCEAF",
            fontWeight: "900",
          }}
        >
          ABOUT ME
        </Typography>
      </Box>
      {/* ........................... */}

      <Box
        component="div"
        sx={{ width: "80%", minHeight: "70%", display: "flex" }}
      >
        {/* ....................... */}
        <Box component="div" sx={{ width: "40%", height: "100%" }}>
          <Box
            component="img"
            src={image}
            sx={{
              width: "95%",
              minHeight: "100%",
              paddingX: "15px",
              objectFit: "cover",
              borderRadius: 5,
            }}
          />
        </Box>
        {/* ............................. */}
        <Box
          component="div"
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{ width: "100%", height: "85%", paddingX: "15px" }}
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: "24px", color: "#343a40", fontWeight: 700 }}
            >
              Frontend Web Developer
            </Typography>
            <Typography
              variant="p"
              sx={{ marginBottom: "16px", color: "#6c757d" }}
            >
              Currently transitioning to the tech industry, I bring my expertise
              as a project coordinator and civil engineer to projects in
              software development. I have experience in multiple programming
              languages and libraries including : JavaScript, HTML, CSS,
              React.js, Tailwind, and in cloud systems infrastructure (AWS).
              During my time as a civil engineer I gained an extensive
              experience in project management and coordination, transforming
              on-paper projects into tangible structures, ensuring deadlines,
              budgets and all technical requirements set by clients were met my
              strong communication and negotiation skills, coupled with a
              problem-solving and results-driven mindset have been key to my
              success.
            </Typography>
            <Box component="div" sx={{ marginTop: "16px" }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ width: "50%", marginBottom: "24px" }}
                >
                  Name:{" "}
                  <Box component="span" sx={{ color: "#6c757d" }}>
                    Mohammed Hussein
                  </Box>
                </Typography>
                <Typography variant="p" sx={{ width: "50%" }}>
                  Birthday:{" "}
                  <Box component="span" sx={{ color: "#6c757d" }}>
                    30 December 1995
                  </Box>
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="p" sx={{ width: "50%" }}>
                  Phone:{" "}
                  <Box component="span" sx={{ color: "#6c757d" }}>
                    +20 101 527 9596
                  </Box>
                </Typography>
                <Typography variant="p" sx={{ width: "50%" }}>
                  Email:{" "}
                  <Box component="span" sx={{ color: "#6c757d" }}>
                    mohmd.itti@gmail.com
                  </Box>
                </Typography>
              </Box>
              {/* ............................................................ */}
            </Box>

            {/* ................................................................ */}
            <Box
              component="div"
              sx={{
                marginTop: "24px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="div"
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Link href="https://github.com/mohd3155">
                  <GitHubIcon sx={{ fontSize: 32, color: "black" }} />
                </Link>

                <Link href="https://www.linkedin.com/in/mohussein95/">
                  <LinkedInIcon sx={{ fontSize: 32 }} />
                </Link>
                <Link href="mailto:mohmd.itti@gmail.com">
                  <MailIcon sx={{ fontSize: 32 }} />
                </Link>
              </Box>
            </Box>
            {/* .......................................................................... */}
          </Box>
        </Box>
        {/* .................................. */}
      </Box>
    </Box>
  );
};

export default About;
