import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineUser } from "react-icons/ai";
import PropTypes from "prop-types";

function NavbarComponent(props) {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <h2 style={{ color: "gray" }}>{props.name}</h2>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed : {}</Navbar.Text>
            <AiOutlineUser size={"1.8em"}></AiOutlineUser>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
NavbarComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
export default NavbarComponent;
