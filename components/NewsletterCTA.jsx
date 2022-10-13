import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
const Hero = () => {
  return (
    <section id="newsletter-cta" className="position-relative">
      <Container id="newsletter-container">
        <Row className="align-items-center">
            <div className="newsletter-title-container">
                <h5 className="">
                Join our newsletter
                </h5>
                <h2 className="">
                CROSS-CHAIN <span style={{"color":"#5858FF"}}>WEEKLY</span>
                </h2>
                <p className="">
                Each week, we’ll share resources related to cross chain development to keep you informed and bring you one step closer on your journey from blockchain engineer to crosschain engineer.
                </p>
            </div>
          <div className="newsletter-content-container">
            <div className="newsletter-content">
              <img src="/newsletter-img.png" alt="World class event" />
              <p>
                The Cross Chain Coalition teams up with TechCrunch, another $100m+ hack, the merge post-mortem, & IBC is taking over the world
              </p>
                <div className="newsletter-content-details flex-space-between">
                    <span>
                    September 30, 2021
                    </span>
                    <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            </div>
            <div className="newsletter-content">
              <img src="/newsletter-img.png" alt="World class event" />
              <p>
                The Cross Chain Coalition teams up with TechCrunch, another $100m+ hack, the merge post-mortem, & IBC is taking over the world
              </p>
                <div className="newsletter-content-details flex-space-between">
                    <span>
                    September 30, 2021
                    </span>
                    <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            </div>
            <div className="newsletter-content">
              <img src="/newsletter-img.png" alt="World class event" />
              <p>
                The Cross Chain Coalition teams up with TechCrunch, another $100m+ hack, the merge post-mortem, & IBC is taking over the world
              </p>
                <div className="newsletter-content-details flex-space-between">
                    <span>
                    September 30, 2021
                    </span>
                    <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            </div>
            <div className="newsletter-content">
              <img src="/newsletter-img.png" alt="World class event" />
              <p>
                The Cross Chain Coalition teams up with TechCrunch, another $100m+ hack, the merge post-mortem, & IBC is taking over the world
              </p>
                <div className="newsletter-content-details flex-space-between">
                    <span>
                    September 30, 2021
                    </span>
                    <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            </div>
          </div>

        </Row>
      </Container>
    </section>
  );
}
export default Hero;