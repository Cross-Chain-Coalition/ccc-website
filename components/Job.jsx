import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const jobList = [
  {
    img: "/paloma-job.png",
    alt: "Paloma",
    company: "Paloma",
    description_1: "11-50 Employees",
    description_2: "The fastest messenger chain",
    job_link: "https://ccc.pallet.com/jobs",
  },
  {
    img: "/layer-job.png",
    alt: "LayerZero",
    company: "LayerZero",
    description_1: "11-50 Employees",
    description_2: "Seamlessly connecting blockchains",
    job_link: "https://ccc.pallet.com/jobs",
  },
  {
    img: "/axelar-job.png",
    alt: "Axelar",
    company: "Axelar",
    description_1: "11-50 Employees",
    description_2: "Secure cross-chain communication",
    job_link: "https://ccc.pallet.com/jobs",
  },
]

const Job = () => {
  return (
    <section style={{"paddingBottom":"100px"}} id="hero-job" className="section position-relative">
      <Container id="job-container">
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
            {jobList.map((item, index) => (
              <div key={index} className="job-list">
                <div className="job-img-container">
                  <img className="job-img" src={item.img} alt={item.alt} />
                </div>
                <h4>
                  {item.company}
                </h4>
                <ul>
                  <li>
                  {item.description_1}
                  </li>
                  <li>
                  {item.description_2}
                  </li>
                </ul>
                <a href={item.job_link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                  View profile
                </a>
              </div>
            ))}
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
export default Job;