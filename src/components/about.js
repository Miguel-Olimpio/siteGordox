import articles from "../assets/img/articles.png";
import academicCurriculum from "../assets/img/curriculoAcademico1.png";
import professionalCurriculum from "../assets/img/curriculoProfissional.png";
import partnerCompanies from "../assets/img/empresasParceiras.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Sobre</h2>
                        <p> Aqui você irá descrever de forma simplificada e básica algumas coisas sobre você, por exemplo, su bruno Juliano formado em engenharia elétrica na universidade federal de juuiz de fora ja confeccionei inúmeros projetos em árceria com diversas empresas de engenharia, para mais informações sobre mim basta acessar os links abaixo </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={articles} alt="Image" />
                                <h5>Artigos Publicados</h5>
                            </div>
                            <div className="item">
                                <img src={academicCurriculum} alt="Image" />
                                <h5>Curriculo Acadêmico</h5>
                            </div>
                            <div className="item">
                                <img src={professionalCurriculum} alt="Image" />
                                <h5>Curriculo profissional</h5>
                            </div>
                            <div className="item">
                                <img className="pc" src={partnerCompanies} alt="Image" />
                                <h5>Empresas parceiras</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}