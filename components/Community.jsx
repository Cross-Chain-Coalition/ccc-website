import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { TELEGRAM_LINK } from '../utils/constants'

const communityLogo = [
    {
        link: "https://coindesk.com",
        logo: "/coindesk-section.svg",
        alt: "Coindesk logo"
    },
    {
        link: "https://aave.com/",
        logo: "/aave-section.svg",
        alt: "Aave logo"
    },
    {
        link: "https://solana.com",
        logo: "/solana-section.svg",
        alt: "Solana logo"
    },
    {
        link: "https://shima.capital/",
        logo: "/shima-section.svg",
        alt: "Shima logo"
    },
    {
        link: "https://cosmos.network/",
        logo: "/cosmos-section.svg",
        alt: "Cosmos logo"
    },
    {
        link: "https://polygon.technology/",
        logo: "/polygon-section.svg",
        alt: "Polygon logo"
    },
    {
        link: "https://www.palomachain.com/",
        logo: "/paloma-section.svg",
        alt: "Paloma logo"
    },
    {
        link: "https://layerzero.network/",
        logo: "/layer-section.svg",
        alt: "Layer zero logo"
    },
    {
        link: "https://panteracapital.com/",
        logo: "/1-section.svg",
        alt: "Pantera logo"
    },
    {
        link: "https://curve.fi/",
        logo: "/curve-section.svg",
        alt: "Curve finance logo"
    },
    {
        link: "https://jumpcrypto.com/",
        logo: "/2-section.svg",
        alt: "Jump logo"
    },
    {
        link: "https://wormhole.com/",
        logo: "/3-section.svg",
        alt: "Wormhole logo"
    },
    {
        link: "https://pyth.network/",
        logo: "/pyth-section.svg",
        alt: "Pyth logo"
    },
    {
        link: "https://axelar.network/",
        logo: "/axelar-section.svg",
        alt: "Axelar logo"
    },
    {
        link: "https://docs.google.com/spreadsheets/d/1suyGt0IrE0mW2hCjA3WFW_BLmjeBdLW2Q9HbJHnZfqM/edit?usp=sharing",
        logo: "/view-section.svg",
        alt: "View directory"
    }
]

const Hero = () => {
  return (
    <section id="community" className="position-relative">
      <Container>
        <Row className="align-items-center">
          <div className="community-title">
            <h3>
                Our Community
            </h3>
            <p>
            Our audience spans from east to west, from startup to bluechip, from doxxed to anon, and from builder to investor! Check out our breakdown:
            </p>
          </div>
        </Row>
      </Container>
      <Container>
        <Row className="community-flex align-items-center">
          <Col className="community-desktop" lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/community-maps.svg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
            <div className="mt-5 mt-lg-0">
              <img src="/community-stats.svg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
          <Col lg={6}>
            <div className="community-items">
                {communityLogo.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.logo} alt={item.alt} className="img-fluid community-logo d-block"/>
                </a>
                ))}
            </div>
          </Col>
          <Col className="community-mobile" lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/community-stats.svg" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;