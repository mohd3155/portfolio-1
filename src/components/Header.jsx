import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const pages = ["Home", "Projects", "Resume", "Contact"];

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        minHeight: "10%",
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 1,
        boxShadow: 2,
      }}
    >
      <Box
        component="nav"
        sx={{
          width: { xs: "90%", sm: "80%" },
          height: { xs: "100%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isXs ? (
          <Box component="div" sx={{ height: { xs: "50px" } }}>
            {" "}
            hellllo
          </Box>
        ) : (
          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "90%", lg: "50%" },
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0,
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Home
            </Box>
            <Box
              component={Link}
              to="/projects"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Projects
            </Box>
            <Box
              component={Link}
              to="/resume"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Resume
            </Box>
            <Box
              component={Link}
              to="/contact"
              sx={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
