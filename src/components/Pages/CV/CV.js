import DescriptionMyself from "../CV/ComponentesCV/Columna_Izquierda/DescriptionMyself/DescriptionMyself";
import Info from "../CV/ComponentesCV/Columna_Izquierda/Info/Info";
import { Row, Col, Container } from "react-bootstrap";
import Certifications from "../CV/ComponentesCV/Columna_Derecha/Certifications/Certifications";
import Education from "../CV/ComponentesCV/Columna_Derecha/Education/Education";
import WorkingHistory from "../CV/ComponentesCV/Columna_Derecha/WorkingHistory/WorkingHistory";
import ExpertiseAndSkills from "../CV/ComponentesCV/Columna_Derecha/ExpertiseAndSkills/ExpertiseAndSkills";
import "./CV.css";

export default function CV() {
  return (
    <Container fluid>
      <Row style={{ margin: "10px auto auto auto" }} className="cvContainer">
        <Col md={6} s={5} lg={5} className="colPerfilInfo">
          <Col md={3}>
            <img className="foto" src={"FotoRedonda.png"} />
          </Col>

          <Col md={3}>
            <h1 className="miNombre">Lorenzo García-Arévalo Acosta</h1>
          </Col>

          <Col md={11}>
            <DescriptionMyself></DescriptionMyself>
          </Col>
          <Col md={12}>
            <Info></Info>
          </Col>
        </Col>
        <Col
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Education></Education>
          <Certifications></Certifications>
          <WorkingHistory></WorkingHistory>
          <ExpertiseAndSkills></ExpertiseAndSkills>
        </Col>
      </Row>
    </Container>
  );
}
