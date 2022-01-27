import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import discord from "../../../img/discord.png";
import Github from "../../../img/github.png";
import linkedin from "../../../img/linkedin.png";
import gmail from "../../../img/gmail.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container className="containerHome">
      <Row className="pepe">
        <Col className=" columnName " md={{ offset: 3, span: 6 }}>
          <h1 className="myName">I'm Lorenzo García-Arévalo.</h1>
        </Col>

        <Col md={{ offset: 3, span: 6 }} className="columnDescription">
          <p className="presentation">
            I'm a from Gran Canaria, fullStack MERN developer. I'am passionate
            about technology and internet. I want to be the best developer I
            can. I have the ability to learn and work in a team. I characterize
            myself for being creative and strict with myself.
          </p>
        </Col>

        <Col md={{ offset: 3, span: 6 }} className="columnIcons ">
          <a
            target="_blank"
            href="https://github.com/Winki-hub?tab=repositories"
          >
            <img className="ponerseEnContactoIcono " src={Github} />
          </a>
          <a
            target="_blank"
            href="https://discord.com/users/924403277234339860"
          >
            <img className="ponerseEnContactoIcono " src={discord} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lorenzo-garc%C3%ADa-ar%C3%A9valo-acosta-81703a207/"
          >
            <img className="ponerseEnContactoIcono " src={linkedin} />
          </a>
          <Link className="" to="/Contact">
            <img className="ponerseEnContactoIcono " src={gmail} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
