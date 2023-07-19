import ButtonNewUserComponent from "../ButtonNewUser/ButtonNewUser.component";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormLoginComponent = () => {
  const navigate = useNavigate()
  
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  
  const handleClick = (e) => {
    e.preventDefault();
    window.alert("Funcionalidade em construção...");
  }

  const [users, setUsers] = useState([]);

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

    const isValid = users.filter(user => {return user.email === dataInput.email && user.password === dataInput.password});

    if (Object.values(isValid).length === 0) {
      navigate("/");
    }
    else {
      navigate("/home");
    }
    

  };

  return (
    <div>
    
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input ref={emailInputElement} type="email" id="email" placeholder="Digite seu email" />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input ref={passwordInputElement} type="password" id="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit">Logar</button>
      </form>

      <ButtonNewUserComponent />
      
      <a href="#" onClick={handleClick}>Esqueceu a senha</a>

    </div>
  );
};
