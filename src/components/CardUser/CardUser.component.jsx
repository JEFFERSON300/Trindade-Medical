import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CardUserComponent({ name, telephone, convention, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/patients/${id}`);
  };

  return (
    <Card onClick={handleClick} style={{ width: "16.1rem" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ccc",
          boxSizing: "border-box",
          boxShadow: "2px 2px 4px #000000",
          borderRadius: "10px",
        }}
      >
        <AiOutlineUser size={"4rem"} />
        <Card.Title>{name}</Card.Title>
        <Card.Title>{telephone}</Card.Title>
        <Card.Title>{convention}</Card.Title>
        <Link to={`/patients/${id}`}>Ver mais</Link>
      </Card.Body>
    </Card>
  );
}

CardUserComponent.propTypes = {
  name: PropTypes.string,
  telephone: PropTypes.string,
  convention: PropTypes.string,
  id: PropTypes.number,
};

export default CardUserComponent;
