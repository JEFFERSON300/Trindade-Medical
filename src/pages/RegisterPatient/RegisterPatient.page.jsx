import { AuthContext } from "../../contexts/auth/auth.context";
import { useContext } from "react";
import { Navigate } from "react-router";
import SidebarComponent from "../../components/SideBar/SideBar";
import NavbarComponent from "../../components/Toolbar/Navbar/Navbar.component";
import { useForm } from "react-hook-form";
import { InputComponent } from "../../components/Form/Input/Input.component";
import { SwitchButtonComponent } from "../../components/SwitchButton/SwitchButton.component";
import Button from "react-bootstrap/Button";
import { ServiceAPI } from "../../services/User/API.service";
import { useEffect } from "react";
import { PatientService } from "../../services/User/Patient.service";

export const RegisterPatientPage = () => {
  const { auth } = useContext(AuthContext);

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  const maskCPF = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  const handleInputChange = async () => {
    const cep = getValues("CEP");
    const API = await ServiceAPI.GetCEP(cep);

    if (Object.keys(API).includes("cep")) {
      setValue("city", API.localidade);
      setValue("state", API.uf);
      setValue("publicPlace", API.logradouro);
      setValue("neighborhood", API.bairro);
    } else {
      alert("CEP não existe, digite novamente");
    }
  };

  const submitForm = (data) => {
    const res = PatientService.Create(data);
    res && reset();
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const cep = watch("CEP");
    if (cep.length > 7) {
      handleInputChange();
    }
  }, [watch("CEP")]);

  useEffect(() => {
    setValue("date", maskDate(watch("date")));
  }, [watch("date")]);

  useEffect(() => {
    setValue("cpf", maskCPF(watch("cpf")));
  }, [watch("cpf")]);

  useEffect(() => {
    setValue("telephone", maskPhone(watch("telephone")));
  }, [watch("telephone")]);

  useEffect(() => {
    setValue("emergencyContaty", maskPhone(watch("emergencyContaty")));
  }, [watch("emergencyContaty")]);

  const render = () => {
    return (
      <div style={{ display: "flex" }}>
        <SidebarComponent style={{}} />
        <div>
          <header>
            <NavbarComponent name="CADASTRO DE PACIENTE" />
          </header>

          <main style={{ padding: "2rem" }}>
            <h1 style={{ paddingBottom: "2rem" }}>
              Preencha os campos para cadastrar
            </h1>
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
                <legend style={{ padding: "0px 25px" }}>Identificação</legend>

                <SwitchButtonComponent />
                <Button
                  disabled={
                    errors.name ||
                    errors.gender ||
                    errors.date ||
                    errors.cpf ||
                    errors.rg ||
                    errors.civilStatus ||
                    errors.telephone
                  }
                  variant="outline-primary"
                >
                  Deletar
                </Button>

                <Button
                  type="submit"
                  disabled={
                    errors.name ||
                    errors.gender ||
                    errors.date ||
                    errors.cpf ||
                    errors.rg ||
                    errors.civilStatus ||
                    errors.telephone
                  }
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
                  sizeInput="602px"
                  id="name"
                  type="text"
                  label="Nome Completo"
                  register={{
                    ...register("name", {
                      required: true,
                      minLength: 5,
                      maxLength: 50,
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
                  id="date"
                  type="text"
                  label="Data Nascimento"
                  register={{
                    ...register("date", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="cpf"
                  type="text"
                  label="CPF"
                  register={{
                    ...register("cpf", {
                      required: true,
                      validate: {
                        matchPath: (v) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v),
                      },
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="rg"
                  type="text"
                  label="RG"
                  register={{
                    ...register("rg", {
                      required: true,
                      maxLength: 20,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
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
                  sizeInput="434px"
                  id="telephone"
                  type="text"
                  label="Telefone"
                  register={{
                    ...register("telephone", {
                      required: true,
                      validate: {
                        matchPath: (v) => /^\(\d{2}\) \d{5}-\d{4}$/.test(v),
                      },
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="email"
                  type="email"
                  label="E-mail"
                  register={{
                    ...register("email", {
                      validate: {
                        matchPath: (v) =>
                          /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(v),
                      },
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="nationality"
                  type="text"
                  label="Naturalidade"
                  register={{
                    ...register("nationality", {
                      required: true,
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="emergencyContaty"
                  type="text"
                  label="Contato de Emergência"
                  register={{
                    ...register("emergencyContaty", {
                      required: true,
                      validate: {
                        matchPath: (v) => /^\(\d{2}\) \d{5}-\d{4}$/.test(v),
                      },
                    }),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="allergies"
                  type="text"
                  label="Lista de Alergias"
                  register={{
                    ...register("allergies"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="care"
                  type="text"
                  label="Lista de Cuidados"
                  register={{
                    ...register("care"),
                  }}
                />
              </div>

              <label htmlFor="Convênio"></label>
              <legend style={{ padding: "0px 25px" }}>Convênio</legend>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputComponent
                  sizeInput="434px"
                  id="convention"
                  type="text"
                  label="Convênio"
                  register={{
                    ...register("convention"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="numberOfCard"
                  type="number"
                  label="Número da carteira"
                  register={{
                    ...register("numberOfCard"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="validity"
                  type="text"
                  label="Validade"
                  register={{
                    ...register("validity"),
                  }}
                />
              </div>

              <label htmlFor="Dados de Endereço"></label>
              <legend style={{ padding: "0px 25px" }}>Dados de Endereço</legend>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputComponent
                  sizeInput="434px"
                  id="CEP"
                  type="text"
                  label="CEP"
                  register={{
                    ...register("CEP"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="city"
                  type="text"
                  label="Cidade"
                  register={{
                    ...register("city"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="state"
                  type="text"
                  label="Estado"
                  register={{
                    ...register("state"),
                  }}
                />

                <InputComponent
                  sizeInput="1102px"
                  id="publicPlace"
                  type="text"
                  label="Logradouro"
                  register={{
                    ...register("publicPlace"),
                  }}
                />

                <InputComponent
                  sizeInput="220px"
                  id="number"
                  type="number"
                  label="Número"
                  register={{
                    ...register("number"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="complement"
                  type="text"
                  label="Complemento"
                  register={{
                    ...register("complement"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="neighborhood"
                  type="text"
                  label="Bairro"
                  register={{
                    ...register("neighborhood"),
                  }}
                />

                <InputComponent
                  sizeInput="434px"
                  id="referencePoint"
                  type="text"
                  label="Ponto de Referência"
                  register={{
                    ...register("referencePoint"),
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
