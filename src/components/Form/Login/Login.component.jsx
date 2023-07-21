import ButtonNewUserComponent from "../ButtonNewUser/ButtonNewUser.component";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as Styled from "./Login.style";

export const FormLoginComponent = () => {
  const navigate = useNavigate();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const [users, setUsers] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    window.alert("Funcionalidade em construção...");
  };

  const fetchUserData = () => {
    fetch("http://localhost:8000/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataInput = {
      email: emailInputElement.current?.value,
      password: passwordInputElement.current?.value,
    };

    const isValid = users.filter((user) => {
      return (
        user.email === dataInput.email && user.password === dataInput.password
      );
    });

    if (Object.values(isValid).length === 0) {
      navigate("/");
    } else {
      navigate("/home");
    }
  };

  return (
    <div>
      <Styled.Action>
        <Styled.ActionTitle>Não possui uma conta?</Styled.ActionTitle>
        <ButtonNewUserComponent />
      </Styled.Action>

      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Header>
          <Styled.Title>Login</Styled.Title>
          <Styled.Subtitle>
            Para acessar o sistema digite seu email e sua senha
          </Styled.Subtitle>
        </Styled.Header>

        <Styled.InputGroup>
          <Styled.InputElement>
            <label htmlFor="email">E-mail</label>
            <Styled.Control
              ref={emailInputElement}
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </Styled.InputElement>

          <Styled.InputElement>
            <label htmlFor="senha">Senha</label>
            <Styled.Control
              ref={passwordInputElement}
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </Styled.InputElement>
        </Styled.InputGroup>

        <Button variant="primary" type="submit">
          Entrar
        </Button>

        <Styled.EsqueciSenha href="#" onClick={handleClick}>
          Esqueceu sua senha?
        </Styled.EsqueciSenha>
      </Styled.Form>
    </div>
  );
};
