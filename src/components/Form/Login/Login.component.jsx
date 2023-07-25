import ButtonNewUserComponent from "../ButtonNewUser/ButtonNewUser.component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as Styled from "./Login.style";
import { InputComponent } from "../Input/Input.component";
import { useForm } from "react-hook-form";

export const FormLoginComponent = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    const { email, password } = data;

    const user = users.find((u) => u.email === email);

    if (!user) {
      alert("Usuário não cadastrado");
      reset();
      return;
    }

    password === user.password
      ? navigate("/home")
      : alert("Usuário ou senha inválidos");
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("Funcionalidade em construção...");
  };

  const fetchUserData = () => {
    fetch("http://localhost:8000/")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setUsers(users);
      });
    console.log(users);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <Styled.Action>
        <Styled.ActionTitle>Não possui uma conta?</Styled.ActionTitle>
        <ButtonNewUserComponent />
      </Styled.Action>

      <Styled.Form onSubmit={handleSubmit(submitForm)}>
        <Styled.Header>
          <Styled.Title>Login</Styled.Title>
        </Styled.Header>

        <Styled.InputGroup>
          <Styled.InputElement>
            <InputComponent
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
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
              id="password"
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
              register={{
                ...register("password", { required: true, minLength: 8 }),
              }}
            />
          </Styled.InputElement>
        </Styled.InputGroup>

        <Button
          disabled={errors.email || errors.password}
          style={{ width: "500px" }}
          variant="primary"
          type="submit"
        >
          Entrar
        </Button>

        <Styled.EsqueciSenha href="#" onClick={handleClick}>
          Esqueceu sua senha?
        </Styled.EsqueciSenha>
      </Styled.Form>
    </div>
  );
};
