import { useState } from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  console.log(params);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
      {isXs ? (
        <Box
          component="div"
          sx={{
            minHeight: "10%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            onClick={handleToggle}
            variant="text"
            sx={{
              height: isOpen ? "20%" : "100%",
              width: "100%",
              color: "#0BCEAF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isOpen ? "X" : "Open"}
          </Button>
          {isOpen && (
            <Box
              component="div"
              sx={{
                width: "100%",
                height: isOpen ? "80px" : "0px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Box
                  component={Link}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {page}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ) : (
        <Box
          component="nav"
          sx={{
            width: { xs: "90%", sm: "80%" },
            height: { xs: "100%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
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
        </Box>
      )}
    </Box>
  );
};

export default Header;
