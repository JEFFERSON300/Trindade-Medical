import Card from "react-bootstrap/Card";
import {
  AiOutlineTeam,
  AiOutlineMedicineBox,
  AiOutlineFileSearch,
} from "react-icons/ai";
import PropTypes from "prop-types";

function CardComponent(props) {
  if (props.opcao === 1) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div style={{ display: "flex", gap: "1rem" }}>
            <AiOutlineTeam size={"4rem"} />
            <Card.Title>
              <h2>{props.numero}</h2>
            </Card.Title>
          </div>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>Pacientes</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  if (props.opcao === 2) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div style={{ display: "flex", gap: "1rem" }}>
            <AiOutlineMedicineBox size={"4rem"} />
            <Card.Title>
              <h2>{}</h2>
            </Card.Title>
          </div>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>Consultas</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  if (props.opcao === 3) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <div style={{ display: "flex", gap: "1rem" }}>
            <AiOutlineFileSearch size={"4rem"} />
            <Card.Title>
              <h2>{}</h2>
            </Card.Title>
          </div>
          <Card.Text>Exames</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  numero: PropTypes.number,
  opcao: PropTypes.number,
};
export default CardComponent;
