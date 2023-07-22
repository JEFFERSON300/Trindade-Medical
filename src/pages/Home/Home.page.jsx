import SideBarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";

export const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBarComponent style={{}} />
      <main style={{ flex: "1" }}>
        <NavbarComponent style={{}} name="Home" />
      </main>
    </div>
  );
};
