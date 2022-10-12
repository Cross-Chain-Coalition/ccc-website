import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
const Hero = () => {
  return (
    <section className="hero position-relative">
      <Container id="hero-title">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
                <div className="mt-5 mt-lg-0">
                <img src="/hero-title.svg" alt="" className="img-fluid d-block"/>
                </div>
              <p className="text-muted mb-4 pb-2">Focused on scaling cross chain infrastructure through events & education</p>
              <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer" className="btn btn-hero">
                Join Us
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/hero-image.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
      <Container id="hero-description">
        <Row className="align-items-center">
          <p className="eco-description">
            Ecosystems and Partners Who Help Support the Cross Chain Coalition Community of <span style={{"color": "#5151FF", "fontWeight": "700"}}>6000+</span> Developers
          </p>
          <div className="eco-logo-container">
            <a href="https://cosmos.network/" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_cosmos.png" alt="Cosmos logo" />
            </a>
            <a href="https://polygon.technology/" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_polygon.png" alt="Polygon logo" />
            </a>
            <a href="https://solana.com/" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_solana.png" alt="Solana logo" />
            </a>
            <a href="https://ethereum.org/en/" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_eth.png" alt="Ethereum logo" />
            </a>
            <a href="https://www.palomachain.com/" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_paloma.png" alt="Palomachain logo" />
            </a>
            <a href="https://curve.fi/" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_curve.png" alt="Curve finance logo" />
            </a>
            <a href="https://layerzero.network/" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_layer.png" alt="Layer zero logo" />
            </a>
            <a href="https://volume.finance//" target="_blank" rel="noopener noreferrer" className="eco-logo">
              <img src="/icon_volume.png" alt="Volume finance logo" />
            </a>
          </div>

        </Row>
      </Container>
      <Container id="hero-welcome">
        <Row className="align-items-center">
          <h3 className="welcome-title">
            Welcome to The CCC
          </h3>
          <div className="welcome-content-container">
            <div className="welcome-image">
              <img src="/world-class-event.png" alt="World class event" />
              <h4>
                World Class Events
              </h4>
              <p>
                access to the most prominent builders and investors in the space
              </p>
            </div>
            <div className="welcome-image">
              <img src="/industry-alpha.png" alt="Industry aplha" />
              <h4>
                Industry Alpha
              </h4>
              <p>
                News and insights on the space to make sure you never miss a beat
              </p>
            </div>
            <div className="welcome-image">
              <img src="/authentic-connection.png" alt="Authentic connection" />
              <h4>
                Authentic Connection
              </h4>
              <p>
                a community of ambitious people solving the hardest problems in cross chain
              </p>
            </div>
          </div>

        </Row>
      </Container>
    </section>
  );
}
export default Hero;