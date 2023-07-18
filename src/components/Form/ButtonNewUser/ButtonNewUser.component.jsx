import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ButtonNewUserComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digite seu e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digite sua senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="8 caracteres"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digite novamente sua senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="8 caracteres"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>

          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
          
        </Modal.Footer>

      </Modal>
    </div>
  );



}

export default ButtonNewUserComponent;
