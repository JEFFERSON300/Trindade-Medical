import ButtonNewUserComponent from "../ButtonNewUser/ButtonNewUser.component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import * as Styled from "./Login.style";
import { InputComponent } from "../Input/Input.component";
import { useForm } from "react-hook-form";

export const FormLoginComponent = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home");
  };

  const [users, setUsers] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
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
