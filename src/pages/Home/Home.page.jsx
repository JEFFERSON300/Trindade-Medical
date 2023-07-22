import SideBarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";

export const HomePage = () => {
  return (
    <>
      <NavbarComponent name="Home" />
      <SideBarComponent />
    </>
  );
};
