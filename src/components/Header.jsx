import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        maxHeight: "10%",
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
        sx={{ width: "80%", display: "flex", justifyContent: "center" }}
      >
        <Box
          component="ul"
          sx={{
            display: "flex",
            width: "50%",
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
    </Box>
  );
};

export default Header;
