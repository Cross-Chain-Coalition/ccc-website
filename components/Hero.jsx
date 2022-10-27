import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { TELEGRAM_LINK } from '../utils/constants'

const partnersLogo = [
  {
    link: "https://cosmos.network/",
    logo: "/icon_cosmos.svg",
    alt: "Cosmos logo"
  },
  {
    link: "https://polygon.technology/",
    logo: "/icon_polygon.svg",
    alt: "Polygon logo"
  },
  {
    link: "https://solana.com",
    logo: "/icon_solana.svg",
    alt: "Solana logo"
  },
  {
    link: "https://ethereum.org/en/",
    logo: "/icon_eth.svg",
    alt: "Ethereum logo"
  },
  {
    link: "https://www.palomachain.com/",
    logo: "/icon_paloma.svg",
    alt: "Paloma logo"
  },
  {
    link: "https://curve.fi/",
    logo: "/icon_curve.svg",
    alt: "Curve finance logo"
  },
  {
    link: "https://layerzero.network/",
    logo: "/icon_layer.svg",
    alt: "Layer zero logo"
  },
  {
    link: "https://volume.finance/",
    logo: "/icon_volume.svg",
    alt: "Volume finance logo"
  },
  {
    link: "https://cosmos.network/",
    logo: "/icon_cosmos.svg",
    alt: "Cosmos logo"
  },
  {
    link: "https://polygon.technology/",
    logo: "/icon_polygon.svg",
    alt: "Polygon logo"
  },
  {
    link: "https://solana.com",
    logo: "/icon_solana.svg",
    alt: "Solana logo"
  },
  {
    link: "https://ethereum.org/en/",
    logo: "/icon_eth.svg",
    alt: "Ethereum logo"
  },
  {
    link: "https://www.palomachain.com/",
    logo: "/icon_paloma.svg",
    alt: "Paloma logo"
  },
  {
    link: "https://curve.fi/",
    logo: "/icon_curve.svg",
    alt: "Curve finance logo"
  },
  {
    link: "https://layerzero.network/",
    logo: "/icon_layer.svg",
    alt: "Layer zero logo"
  },
  {
    link: "https://volume.finance/",
    logo: "/icon_volume.svg",
    alt: "Volume finance logo"
  }
]

const partnersLogoMobile = [
  {
    link: "https://polygon.technology/",
    logo: "/icon_polygon.svg",
    alt: "Polygon logo"
  },
  {
    link: "https://cosmos.network/",
    logo: "/icon_cosmos.svg",
    alt: "Cosmos logo"
  },
  {
    link: "https://solana.com",
    logo: "/icon_solana.svg",
    alt: "Solana logo"
  },
  {
    link: "https://ethereum.org/en/",
    logo: "/icon_eth.svg",
    alt: "Ethereum logo"
  },
  {
    link: "https://www.palomachain.com/",
    logo: "/icon_paloma.svg",
    alt: "Paloma logo"
  },
  {
    link: "https://curve.fi/",
    logo: "/icon_curve.svg",
    alt: "Curve finance logo"
  },
  {
    link: "https://layerzero.network/",
    logo: "/icon_layer.svg",
    alt: "Layer zero logo"
  },
  {
    link: "https://volume.finance/",
    logo: "/icon_volume.svg",
    alt: "Volume finance logo"
  }
]

const heroWelcome = [
  {
    img: "/world-class-event.png",
    alt: "World class event",
    title: "World Class Events",
    description: "access to the most prominent builders and investors in the space"
  },
  {
    img: "/industry-alpha.png",
    alt: "Industry alpha",
    title: "Industry Alpha",
    description: "News and insights on the space to make sure you never miss a beat"
  },
  {
    img: "/authentic-connection.png",
    alt: "Authentic connection",
    title: "Authentic Connection",
    description: "a community of ambitious people solving the hardest problems in cross chain"
  },
]

const Hero = () => {
  return (
    <section className="hero position-relative">
      <Container id="hero-title">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <div className="mt-5 mt-lg-0">
              <h1 className="hero-title">
                The <span style={{"color": "#5858FF"}}>Cross Chain</span> Coalition
              </h1>
              </div>
              <p className="text-muted mb-4 pb-2">Focused on scaling cross chain infrastructure through events & education</p>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-hero">
                Join Us
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/hero_bg.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="hero-description">
        <Row className="align-items-center">
          <p className="eco-description">
            Ecosystems and Partners Who Help Support the Cross Chain Coalition Community of <span style={{"color": "#5151FF", "fontWeight": "700"}}>6000+</span> Developers
          </p>
          <div id="eco-logo-container">
            <div className="eco-logo-list">
            {partnersLogo.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="eco-logo first">
                <img src={item.logo} alt={item.alt} />
              </a>
            ))}
            </div>
          </div>
          <div id="eco-logo-container-mobile">
            <div className="eco-logo-list-mobile">
            {partnersLogoMobile.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="eco-logo first">
                <img src={item.logo} alt={item.alt} />
              </a>
            ))}
            </div>
          </div>

        </Row>
      </Container>
      <Container id="welcome">
        <Row className="align-items-center">
          <h3 className="welcome-title">
            Welcome to The CCC
          </h3>
          <div className="welcome-content-container">
            {heroWelcome.map((item, index) => (
               <div key={index} className="welcome-image">
                <img src={item.img} alt={item.alt} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
               </div>
            ))}
          </div>

        </Row>
      </Container>
    </section>
  );
}
export default Hero;