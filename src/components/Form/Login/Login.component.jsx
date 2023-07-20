import ButtonNewUserComponent from "../ButtonNewUser/ButtonNewUser.component";
import Button from "react-bootstrap/Button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="section">
        <p>Não possui uma conta?</p>
        <ButtonNewUserComponent />
      </div>

      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-Mail</label>
          <input
            ref={emailInputElement}
            type="email"
            id="email"
            placeholder="Digite seu email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            ref={passwordInputElement}
            type="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </div>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </form>

      <a href="#" onClick={handleClick}>
        Esqueceu sua senha?
      </a>
    </div>
  );
};
