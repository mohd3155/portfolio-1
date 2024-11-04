import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import ecom from "../assets/ecom.png";
import topics from "../assets/topics.png";
const Projects = () => {
  const data = [
    {
      id: 1,
      name: "Cora'l E-commerce Website",
      description:
        "a PWA e-commerce web application for a general store that sells a multitude of things, like women’s wear, men’s wear, accessories, makeup, bags, etc.",
      technologies:
        "React.js, React-Router, React-Query, MUI, Backend Integration",
      image: ecom,
      link: "https://github.com/TAP-SD-0624/frontend-final-1",
    },
    {
      id: 2,
      name: "Progamming Languages Topics",
      description:
        "A website that shows most programming languages and technologies that used to build digital applications.",
      technologies: "React.js, React-Router, tailwind",
      image: topics,
      link: "https://github.com/TAP-SD-0624/mohammed-hussein-project1",
    },
  ];

  return (
    <Box component="div" sx={{ minHeight: "100vh" }}>
      {/* ...................................................................... */}
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "30%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: { xs: 50, md: 120, lg: 150, xl: 150 },
            WebkitTextStroke: "1px #dee2e6",
            color: "transparent",
            fontFamily: "Roboto",
            fontWeight: "900",
          }}
        >
          GALLERY
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{
            textAlign: "center",
            position: "absolute",
            color: "#0BCEAF",
            fontWeight: "900",
            fontSize: {
              xs: "16px",
              sm: "20px",
              md: "30px",
              lg: "40px",
              xl: "40px",
            },
          }}
        >
          MY PORTFOLIO
        </Typography>
      </Box>
      {/* .............................................................................. */}
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        {data.map((project) => {
          return (
            <Box
              component="div"
              className="card"
              sx={{
                width: "80%",
                minHeight: "300px",
                display: "flex",
                flexDirection: { xs: "column", xl: "row" },
                alignItems: "center",
                marginBottom: "32px",
              }}
              key={project.id}
            >
              <Box
                component="div"
                className="cardImg"
                sx={{ width: { xs: "100%", xl: "40%" }, height: "100%" }}
              >
                <Box
                  component="img"
                  src={project.image}
                  sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </Box>
              <Box
                component="div"
                className="cardInfo"
                sx={{
                  width: { xs: "100%", xl: "60%" },
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  paddingLeft: "24px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", xl: "30px" },
                    marginY: { xs: "16px" },
                    fontWeight: 900,
                    color: "#0BCEAF",
                  }}
                >
                  {project.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    marginY: { xs: "16px" },
                    fontWeight: 900,
                    color: "#6c757d",
                  }}
                >
                  {project.description}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    marginY: { xs: "16px" },
                    fontWeight: 500,
                    color: "#6c757d",
                  }}
                >
                  {project.technologies}
                </Typography>
                <Typography
                  component={Link}
                  to={project.link}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <GitHubIcon sx={{ fontSize: "50px" }} />
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
