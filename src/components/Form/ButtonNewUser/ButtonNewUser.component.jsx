import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ButtonNewUserComponent() {
  const [show, setShow] = useState(false);
  const [id, setID] = useState(1);

  const emailInputElement = useRef();
  const password1InputElement = useRef();
  const password2InputElement = useRef();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    
    
    const email = emailInputElement.current?.value || "";
    const password = password1InputElement.current?.value || "";
    const password2 = password2InputElement.current?.value || "";
    
    
    const testEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    if (password === password2 && password.length >= 8 && testEmail) {
      
      fetch("http://localhost:8000", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({id, email, password})
        }).then(() => {
          console.log('Post submitted successfully');
        
      })
        setID(id+1);
        handleClose();
    }
    else {
      setShow(true)
    }

  };
  


  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Criar conta
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Novo usuário</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          
          <Form>
            
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Digite seu e-mail</Form.Label>
              <Form.Control
                ref={emailInputElement}
                
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="senha1">
              <Form.Label>Digite sua senha</Form.Label>
              <Form.Control
                ref={password1InputElement}
                
                type="password"
                placeholder="8 caracteres"
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="senha2">
              <Form.Label>Digite novamente sua senha</Form.Label>
              <Form.Control
                ref={password2InputElement}
                type="password"
                placeholder="8 caracteres"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>

          <Button variant="primary" onClick={handleShow}>
            Salvar
          </Button>

        </Modal.Footer>

      </Modal>
    </div>
  );

}

export default ButtonNewUserComponent;
