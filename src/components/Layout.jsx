import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Box component="div" id="main" sx={{ minWidth: "100%" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
