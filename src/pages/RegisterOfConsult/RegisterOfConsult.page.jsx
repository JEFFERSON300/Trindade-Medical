import SideBarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";
import { Navigate } from "react-router";
import { AuthContext } from "../../contexts/auth/auth.context";
import { useEffect, useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { SwitchButtonComponent } from "../../components/SwitchButton/SwitchButton.component";
import { InputComponent } from "../../components/Form/Input/Input.component";
import { ConsultService } from "../../services/User/Consult.service";

export const RegisterOfConsultPage = () => {
  const { auth } = useContext(AuthContext);

  const submitForm = (data) => {
    ConsultService.Create(data);
    console.log("Consulta criada!!");
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  const maskTime = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1:$2")
      .replace(/:\d{4}$/, ":00");
  };

  useEffect(() => {
    setValue("dateOfConsult", maskDate(watch("dateOfConsult")));
  }, [watch("dateOfConsult")]);

  useEffect(() => {
    setValue("timeOfConsult", maskTime(watch("timeOfConsult")));
  }, [watch("timeOfConsult")]);

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SideBarComponent style={{}} />

        <div style={{ flex: "1" }}>
          <header>
            <NavbarComponent name="CADASTRO DE CONSULTA" />
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

            <form
              style={{
                width: "90%",
                padding: "0px 20px 20px 20px",
                margin: "30px 0px",
                display: "inline-block",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                boxShadow: "2px 2px 4px #000000",
                borderRadius: "10px",
              }}
              onSubmit={handleSubmit(submitForm)}
            >
              <label htmlFor="Identificação"></label>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <legend style={{ padding: "0px 25px" }}>
                  Consulta de [Nome Paciente]
                </legend>

                <SwitchButtonComponent />
                <Button variant="outline-primary">Deletar</Button>

                <Button
                  disabled={
                    errors.reasonOfConsult ||
                    errors.dateOfConsult ||
                    errors.timeOfConsult ||
                    errors.description ||
                    errors.dosage
                  }
                  type="submit"
                >
                  Salvar
                </Button>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputComponent
                  sizeInput="1002px"
                  id="reasonOfConsult"
                  type="text"
                  label="Motivo da consulta"
                  register={{
                    ...register("reasonOfConsult", {
                      required: true,
                      minLength: 6,
                      maxLength: 60,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="150px"
                  id="dateOfConsult"
                  type="text"
                  label="Data da consulta"
                  register={{
                    ...register("dateOfConsult", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="150px"
                  id="timeOfConsult"
                  type="text"
                  label="Horário da consulta"
                  register={{
                    ...register("timeOfConsult", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  widthT="1340px"
                  heightT="200px"
                  id="description"
                  type="textarea"
                  label="Descrição do Problema"
                  register={{
                    ...register("description", {
                      required: true,
                      minLength: 15,
                      maxLength: 1000,
                    }),
                  }}
                />

                <InputComponent
                  widthT="1340px"
                  heightT="100px"
                  id="medication"
                  type="textarea"
                  label="Medicação Receitada"
                  register={{
                    ...register("medication"),
                  }}
                />

                <InputComponent
                  widthT="1340px"
                  heightT="100px"
                  id="dosage"
                  type="textarea"
                  label="Dosagem e Precausões"
                  register={{
                    ...register("dosage", {
                      required: true,
                      minLength: 15,
                      maxLength: 250,
                    }),
                  }}
                />
              </div>
            </form>
          </main>
        </div>
      </div>
    );
  };

  return auth.isLogged ? render() : <Navigate to="/login" />;
};
