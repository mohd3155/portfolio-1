import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
