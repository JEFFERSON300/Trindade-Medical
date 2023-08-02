import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

function CardMedicalRecordComponent({ id, name, convention }) {
  return (
    <div
      style={{
        maxWidth: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "2rem",
        border: "1px solid #ccc",
        boxSizing: "border-box",
        boxShadow: "2px 2px 4px #000000",
        borderRadius: "10px",
      }}
    >
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>{id}</Navbar.Brand>
          <Navbar.Brand>{name}</Navbar.Brand>
          <Navbar.Brand>{convention}</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

CardMedicalRecordComponent.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  convention: PropTypes.string,
};

export default CardMedicalRecordComponent;
