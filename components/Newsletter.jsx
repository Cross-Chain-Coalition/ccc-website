import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
const Hero = () => {
  return (
    <section id="newsletter" className="position-relative">
      <Container id="newsletter-container">
        <Row className="align-items-center">
            <div className="newsletter-title-container">
                <div className="newsletter-container-right">
                    <h3 className="welcome-title">
                        Our Newsletters
                    </h3>
                </div>
                <div className="newsletter-container-right">
                    <h5 className="newsletter-description">
                        Don’t miss any cross chain alpha
                        <a href="#newsletter-cta" className="btn btn-hero subscribe-btn">
                            SUBSCRIBE
                        </a>
                    </h5>
                </div>
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