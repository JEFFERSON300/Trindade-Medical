import SideBarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";
import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/auth.context";

export const HomePage = () => {
  const { auth } = useContext(AuthContext);

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SideBarComponent style={{}} />
        <main style={{ flex: "1" }}>
          <NavbarComponent style={{}} name="Home" />
        </main>
      </div>
    );
  };

  return auth.isLogged ? render() : <Navigate to="/login" />;
};
