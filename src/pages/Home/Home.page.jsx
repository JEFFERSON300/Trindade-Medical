import SideBarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";
import { Navigate } from "react-router";
import { AuthContext } from "../../contexts/auth/auth.context";
import CardComponent from "../../components/Card/Card.component";
import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { PatientService } from "../../services/User/Patient.service";

export const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    (async () => {
      const users = await PatientService.Get();
      setUsers(users);
    })();
  }, []);

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SideBarComponent style={{}} />

        <div style={{ flex: "1" }}>
          <header>
            <NavbarComponent name="ESTATÍSTICAS E INFORMAÇÕES" />
          </header>

          <main style={{ padding: "2rem" }}>
            <h2>Estatisticas do Sistema</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                padding: "2rem",
              }}
            >
              <CardComponent numero={users.length} opcao={1} />
              <CardComponent numero={users.length} opcao={2} />
              <CardComponent numero={users.length} opcao={3} />
            </div>

            <h2>Informações Rápidas de Pacientes</h2>
            <InputGroup
              style={{
                maxWidth: "90vw",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <Form.Control
                style={{ borderRadius: "5px" }}
                placeholder="Digite o nome do paciente"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                style={{ marginLeft: "1rem", borderRadius: "5px" }}
                variant="outline-secondary"
                id="button-addon2"
              >
                Buscar
              </Button>
            </InputGroup>
          </main>
        </div>
      </div>
    );
  };

  return auth.isLogged ? render() : <Navigate to="/login" />;
};
