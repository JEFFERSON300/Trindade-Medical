import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

function CardUserComponent({ name, telephone, convention }) {
  return (
    <Card style={{ width: "16.1rem" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AiOutlineUser size={"4rem"} />
        <Card.Title>{name}</Card.Title>
        <Card.Title>{telephone}</Card.Title>
        <Card.Title>{convention}</Card.Title>
        <Link to={"/patients"}>Ver mais</Link>
      </Card.Body>
    </Card>
  );
}

CardUserComponent.propTypes = {
  name: PropTypes.string,
  telephone: PropTypes.string,
  convention: PropTypes.string,
};

export default CardUserComponent;
