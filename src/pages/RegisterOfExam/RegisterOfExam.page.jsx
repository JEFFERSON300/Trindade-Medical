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
import { ExamService } from "../../services/User/Exam.service";

export const RegisterOfExamPage = () => {
  const { auth } = useContext(AuthContext);

  const submitForm = (data) => {
    ExamService.Create(data);
    alert("Exame cadastrado com sucesso!");
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
    setValue("dateOfExam", maskDate(watch("dateOfExam")));
  }, [watch("dateOfExam")]);

  useEffect(() => {
    setValue("timeOfExam", maskTime(watch("timeOfExam")));
  }, [watch("timeOfExam")]);

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SideBarComponent style={{}} />

        <div style={{ flex: "1" }}>
          <header>
            <NavbarComponent name="CADASTRO DE EXAME" />
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
                  Exame de [Nome Paciente]
                </legend>

                <SwitchButtonComponent />
                <Button variant="outline-primary">Deletar</Button>
                <Button
                  disabled={
                    errors.nameOfExam ||
                    errors.dateOfExam ||
                    errors.timeOfExam ||
                    errors.typeOfExam ||
                    errors.laboratory ||
                    errors.resultOfExam
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
                  id="nameOfExam"
                  type="text"
                  label="Nome do Exame"
                  register={{
                    ...register("nameOfExam", {
                      required: true,
                      minLength: 5,
                      maxLength: 50,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="150px"
                  id="dateOfExam"
                  type="text"
                  label="Data do Exame"
                  register={{
                    ...register("dateOfExam", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="150px"
                  id="timeOfExam"
                  type="text"
                  label="Horário do Exame"
                  register={{
                    ...register("timeOfExam", {
                      required: true,
                    }),
                  }}
                />
                <InputComponent
                  sizeInput="660px"
                  id="typeOfExam"
                  type="text"
                  label="Tipo do Exame"
                  register={{
                    ...register("typeOfExam", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="660px"
                  id="laboratory"
                  type="text"
                  label="Laboratório"
                  register={{
                    ...register("laboratory", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="1340px"
                  id="urlExam"
                  type="text"
                  label="URL do Documento do Exame"
                  register={{
                    ...register("urlExam"),
                  }}
                />

                <InputComponent
                  widthT="1340px"
                  heightT="200px"
                  id="resultOfExam"
                  type="textarea"
                  label="Resultado do Exame"
                  register={{
                    ...register("resultOfExam", {
                      required: true,
                      minLength: 15,
                      maxLength: 1000,
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
