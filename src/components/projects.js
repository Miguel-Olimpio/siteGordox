import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCard";
import projImg1 from "../assets/img/fotovoltaicos.jpg";
import projImg2 from "../assets/img/projetosEletricos.jpg";
import projImg3 from "../assets/img/raio.png";
import projImg4 from "../assets/img/telecomunicações.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fotovoltaicos",
      description: "Projetos Fotovoltaicos",
      imgUrl: projImg1,
    },
    {
      title: "Eletricos",
      description: "Projetos Eletricos",
      imgUrl: projImg2,
    },
    {
      title: "Descarga Atmosferica",
      description: "segurança Descarga Atmosferica",
      imgUrl: projImg3,
    },
    {
      title: "Telecomunicações",
      description: "Projetos Telecomunicações",
      imgUrl: projImg4,
    },
  ];

  return (
    <div className="teste">
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Aba 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Aba 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Aba 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Cada Aba é possivel inserir determinados projetos, por exemplo, pode ser feito uma aba para cada estilo de projeto, por exemplo este poderia ser os projetos eletricos a aba 2 projetos fotoVoltaicos entre outros... </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}