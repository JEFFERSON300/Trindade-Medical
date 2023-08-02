import SideBarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";
import { Navigate } from "react-router";
import { AuthContext } from "../../contexts/auth/auth.context";
import { useEffect, useContext, useRef, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardMedicalRecordComponent from "../../components/CardMedicalRecord/CardMedicalRecord.component";
import { PatientService } from "../../services/User/Patient.service";

export const ListMedicalRecordPage = () => {
  const { auth } = useContext(AuthContext);
  const inputSearch = useRef();
  const [patients, setPatients] = useState(0);
  const [isInput, setIsInput] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    (async () => {
      const res = await PatientService.Get();
      setPatients(res);
    })();
  }, []);

  const handleSearch = () => {
    const input = inputSearch.current?.value;

    if (!isNaN(input) && input !== "") {
      let filterId = patients.filter((patient) => {
        return patient.id === Number(input);
      });

      if (filterId.length > 0) {
        setIsInput(true);
        setUser(filterId);
      }
    }
    if (typeof input === "string" && input !== "") {
      let filterName = patients.filter((patient) => {
        return patient.name === input;
      });

      if (filterName.length > 0) {
        setIsInput(true);
        setUser(filterName);
      }

      let filterConvention = patients.filter((convention) => {
        return convention.convention === input;
      });

      if (filterConvention.length > 0) {
        setIsInput(true);
        setUser(filterConvention);
      }
    }
    if (input === "") {
      setIsInput(false);
      //   alert(`Usuário não existe`);
    }
  };

  const menuItem = (item) => {
    return (
      <CardMedicalRecordComponent
        id={item.id}
        name={item.name}
        convention={item.convention}
      />
    );
  };

  const menuEmpty = () => {
    return <p>Não há exames cadastrados no sistema</p>;
  };

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SideBarComponent style={{}} />

        <div style={{ flex: "1" }}>
          <header>
            <NavbarComponent name="LISTAGEM DE PRONTUÁRIOS" />
          </header>

          <main style={{ padding: "2rem" }}>
            <h1>Encontre o paciente</h1>
            <InputGroup
              style={{
                maxWidth: "90%",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Form.Control
                ref={inputSearch}
                style={{ borderRadius: "5px" }}
                placeholder="Digite o nome do paciente"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                onClick={handleSearch}
                style={{ marginLeft: "1rem", borderRadius: "5px" }}
                variant="outline-primary"
                id="button-addon2"
              >
                Buscar
              </Button>
            </InputGroup>
          </main>
          <body style={{ padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "400px",
                maxWidth: "90%",
                marginBottom: "2rem",
              }}
            >
              <h2>Registro</h2>
              <h2>Nome do Paciente</h2>
              <h2>Convênio</h2>
            </div>
            {!isInput
              ? patients.length > 0
                ? patients.map(menuItem)
                : menuEmpty()
              : menuItem(user[0])}
          </body>
        </div>
      </div>
    );
  };
  return auth.isLogged ? render() : <Navigate to="/login" />;
};
