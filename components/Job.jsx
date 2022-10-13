import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
const Hero = () => {
  return (
    <section style={{"paddingBottom":"100px"}} id="hero-job" className="section position-relative">
      <Container id="hero-container">
        <Row className="align-items-center">
          <div className="job-title">
            <h3>
              Get a Blockchain Job
            </h3>
            <p>
              Apply to a curated job opportunity or join our talent collective
            </p>
          </div>
          <div className="job-content-container">
            <div className="job-list">
              <div className="job-img-container">
                <img className="job-img" src="/paloma-job.png" alt="Paloma" />
              </div>
              <h4>
                Paloma
              </h4>
              <ul>
                <li>
                11-50 Employees
                </li>
                <li>
                The fastest messenger chain
                </li>
              </ul>
              <a href="https://ccc.pallet.com/jobs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                View profile
              </a>
            </div>
            <div className="job-list">
              <div className="job-img-container">
                <img className="job-img" src="/layer-job.png" alt="Layer one" />
              </div>
              <h4>
                LayerZero
              </h4>
              <ul>
                <li>
                11-50 Employees
                </li>
                <li>
                Seamlessly connecting blockchains
                </li>
              </ul>
              <a href="https://ccc.pallet.com/jobs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                View profile
              </a>
            </div>
            <div className="job-list">
              <div className="job-img-container">
                <img className="job-img" src="/axelar-job.png" alt="Axelar" />
              </div>
              <h4>
                Axelar
              </h4>
              <ul>
                <li>
                11-50 Employees
                </li>
                <li>
                Secure cross-chain communication
                </li>
              </ul>
              <a href="https://ccc.pallet.com/jobs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                View profile
              </a>
            </div>
          </div>
          <div style={{"marginTop":"40px", "justifyContent": "center", "textAlign": "center"}}>
            <a href="https://ccc.pallet.com/jobs" target="_blank" rel="noopener noreferrer" className="btn btn-hero">
              See all opportunities
            </a>
          </div>

        </Row>
      </Container>
    </section>
  );
}
export default Hero;