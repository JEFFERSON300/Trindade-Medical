import SideBarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";
import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/auth.context";
import CardComponent from "../../components/Card/Card.component";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { PatientService } from "../../services/User/Patient.service";
import { ConsultService } from "../../services/User/Consult.service";
import { ExamService } from "../../services/User/Exam.service";
import CardUserComponent from "../../components/CardUser/CardUser.component";

export const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const [patients, setPatients] = useState(0);
  const [consults, setConsults] = useState(0);
  const [exams, setExams] = useState(0);
  const [isInput, setIsInput] = useState(false);
  const [user, setUser] = useState("");
  const inputSearch = useRef();

  useEffect(() => {
    (async () => {
      const patients = await PatientService.Get();
      setPatients(patients);
    })();

    (async () => {
      const consults = await ConsultService.Get();
      setConsults(consults);
    })();

    (async () => {
      const exams = await ExamService.Get();
      setExams(exams);
    })();
  }, []);

  const handleSearch = async () => {
    const input = inputSearch.current?.value;
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const regexTelephone = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (regexEmail.test(input)) {
      const res = await PatientService.ShowByEmail(input);
      if (res === undefined) {
        setIsInput(false);
        alert(`Usuário não existe`);
      } else {
        setIsInput(true);
        setUser(res);
      }
    }
    if (regexTelephone.test(input)) {
      const res = await PatientService.ShowByTelephone(input);
      if (res === undefined) {
        setIsInput(false);
        alert(`Usuário não existe`);
      } else {
        setIsInput(true);
        setUser(res);
      }
    }
    if (typeof input === "string" && input !== "") {
      const res = await PatientService.ShowByName(input);
      if (res === undefined) {
        setIsInput(false);
        alert(`Usuário não existe`);
      } else {
        setIsInput(true);
        setUser(res);
      }
    } else {
      setIsInput(false);
    }
  };

  const menuItem = (item) => {
    return (
      <CardUserComponent
        name={item.name}
        telephone={item.telephone}
        convention={item.convention}
        id={item.id}
      />
    );
  };

  const menuEmpty = () => {
    return <p>Não há usuários cadastrados no sistema</p>;
  };

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SideBarComponent style={{}} />

        <div style={{ flex: "1" }}>
          <header>
            <NavbarComponent style={{}} name="ESTATÍSTICAS E INFORMAÇÕES" />
          </header>

          <main style={{ padding: "2rem" }}>
            <h2>Estatisticas do Sistema</h2>
            <div
              style={{
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                padding: "2rem",
              }}
            >
              <CardComponent numero={patients.length} opcao={1} />
              <CardComponent numero={consults.length} opcao={2} />
              <CardComponent numero={exams.length} opcao={3} />
            </div>
            <h2>Informações Rápidas de Pacientes</h2>

            <InputGroup
              style={{
                maxWidth: "90%",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <Form.Control
                ref={inputSearch}
                style={{ borderRadius: "5px" }}
                placeholder="Digite o nome, telefone ou e-mail do paciente"
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

          <body
            style={{
              padding: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              maxWidth: "90%",
            }}
          >
            {!isInput
              ? patients.length > 0
                ? patients.map(menuItem)
                : menuEmpty()
              : menuItem(user)}
          </body>
        </div>
      </div>
    );
  };

  return auth.isLogged ? render() : <Navigate to="/login" />;
};
