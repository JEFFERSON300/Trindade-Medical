import { AuthContext } from "../../contexts/auth/auth.context";
import { useContext } from "react";
import { Navigate } from "react-router";
import SidebarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";

export const RegisterPatientPage = () => {
  const { auth } = useContext(AuthContext);

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SidebarComponent style={{}} />
        <div style={{ flex: "1" }}>
          <header>
            <NavbarComponent style={{}} name="Home" />
          </header>
        </div>
      </div>
    );
  };

  return auth.isLogged ? render() : <Navigate to="/login" />;
};
