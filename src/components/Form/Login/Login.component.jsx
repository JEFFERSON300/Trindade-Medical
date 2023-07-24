import ButtonNewUserComponent from "../ButtonNewUser/ButtonNewUser.component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as Styled from "./Login.style";
import { InputComponent } from "../Input/Input.component";

export const FormLoginComponent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState({});

  const isDisable = () => {
    return (
      !data.email ||
      !data.password ||
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email) ||
      data.password < 8
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    window.alert("Funcionalidade em construção...");
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

  const handleInput = (e) => {
    e.preventDefault();
    const { value, id } = e.target;
    setData({ ...data, [id]: value });

    {
      /*
    const isValid = users.filter((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (Object.values(isValid).length === 0) {
      navigate("/");
    } else {
      navigate("/home");
    }
  */
    }
  };

  const redirectToHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <Styled.Action>
        <Styled.ActionTitle>Não possui uma conta?</Styled.ActionTitle>
        <ButtonNewUserComponent />
      </Styled.Action>

      <Styled.Form onSubmit={redirectToHome}>
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
            />
            
            <InputComponent
              id="password"
              type="password"
              placeholder="Digite sua senha"
              label="Senha"
            />
          </Styled.InputElement>
        </Styled.InputGroup>

        <Button
          style={{ width: "500px" }}
          variant="primary"
          type="submit"
          disabled={isDisable()}
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
