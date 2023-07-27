import { AuthContext } from "../../contexts/auth/auth.context";
import { useContext } from "react";
import { Navigate } from "react-router";
import SidebarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";
import { useForm } from "react-hook-form";
import { InputComponent } from "../../components/Form/Input/Input.component";
import { SwitchButtonComponent } from "../../components/SwitchButton/SwitchButton.component";
import Button from "react-bootstrap/Button";

export const RegisterPatientPage = () => {
  const { auth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SidebarComponent style={{}} />
        <div>
          <header>
            <NavbarComponent name="CADASTRO DE PACIENTE" />
          </header>
          <h1 style={{ padding: "2rem" }}>Preencha os campos para cadastrar</h1>
          <main>
            <form
              style={{
                width: "90%",
                padding: "12px 20px",
                margin: "8px 50px",
                display: "inline-block",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                boxShadow: "2px 2px 4px #000000",
                borderRadius: "10px",
              }}
              onSubmit={handleSubmit()}
            >
              <label htmlFor="Identificação"></label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                <legend>Identificação</legend>

                <SwitchButtonComponent />
                <Button variant="outline-primary">Deletar</Button>
                <Button>Salvar</Button>
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
                  sizeInput="650px"
                  id="name"
                  type="text"
                  label="Nome Completo"
                  register={{
                    ...register("name", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="350px"
                  id="gender"
                  type="label"
                  label="Gênero"
                  options={[
                    "",
                    "masculino",
                    "feminino",
                    "gênero neutro",
                    "não-binário",
                    "agênero",
                    "pangênero",
                    "genderqueer",
                    "two-spirit",
                    "terceiro gênero",
                  ]}
                  register={{
                    ...register("gender", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="350px"
                  id="data"
                  type="date"
                  label="Data Nascimento"
                  register={{
                    ...register("data", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="cpf"
                  type="number"
                  label="CPF"
                  register={{
                    ...register("cpf", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="rg"
                  type="number"
                  label="RG"
                  register={{
                    ...register("rg", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="civilStatus"
                  type="label"
                  label="Estado Civil"
                  options={[
                    "",
                    "solteiro",
                    "casado",
                    "divorciado",
                    "separado",
                    "viúvo",
                  ]}
                  register={{
                    ...register("civilStatus", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="telephone"
                  type="tel"
                  label="Telefone"
                  register={{
                    ...register("telephone", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="email"
                  type="email"
                  label="E-mail"
                  register={{
                    ...register("email", {
                      required: true,
                      validate: {
                        matchPath: (v) =>
                          /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v),
                      },
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="nationality"
                  type="text"
                  label="Naturalidade"
                  register={{
                    ...register("nationality", {
                      required: true,
                    }),
                  }}
                />
              </div>

              <label htmlFor="Convênio"></label>
              <legend>Convênio</legend>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputComponent
                  sizeInput="450px"
                  id="convention"
                  type="text"
                  label="Convênio"
                  register={{
                    ...register("convention", {
                      required: true,
                    }),
                  }}
                />
                <InputComponent
                  sizeInput="450px"
                  id="numberOfCard"
                  type="number"
                  label="Número da carteira"
                  register={{
                    ...register("numberOfCard", {
                      required: true,
                    }),
                  }}
                />
                <InputComponent
                  sizeInput="450px"
                  id="validity"
                  type="date"
                  label="Validade"
                  register={{
                    ...register("validity", {
                      required: true,
                    }),
                  }}
                />
              </div>

              <label htmlFor="Dados de Endereço"></label>
              <legend>Dados de Endereço</legend>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputComponent
                  sizeInput="450px"
                  id="CEP"
                  type="number"
                  label="CEP"
                  register={{
                    ...register("CEP", {
                      required: true,
                    }),
                  }}
                />
                <InputComponent
                  sizeInput="450px"
                  id="city"
                  type="text"
                  label="Cidade"
                  register={{
                    ...register("city", {
                      required: true,
                    }),
                  }}
                />
                <InputComponent
                  sizeInput="450px"
                  id="state"
                  type="text"
                  label="Estado"
                  register={{
                    ...register("state", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="1120px"
                  id="publicPlace"
                  type="text"
                  label="Logradouro"
                  register={{
                    ...register("publicPlace", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="250px"
                  id="number"
                  type="number"
                  label="Número"
                  register={{
                    ...register("number", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="complement"
                  type="text"
                  label="Complemento"
                  register={{
                    ...register("complement", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="450px"
                  id="neighborhood"
                  type="text"
                  label="Bairro"
                  register={{
                    ...register("neighborhood", {
                      required: true,
                    }),
                  }}
                />
                <InputComponent
                  sizeInput="450px"
                  id="referencePoint"
                  type="text"
                  label="Ponto de Referência"
                  register={{
                    ...register("referencePoint", {
                      required: true,
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
