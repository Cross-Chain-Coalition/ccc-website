import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
                <div className="mt-5 mt-lg-0">
                <img src="/hero-title.svg" alt="" className="img-fluid d-block"/>
                </div>
              {/* <h1 className="mb-4 font-weight-bold line-height-1_4">The <span className="text-primary font-weight-bold">Cross Chain</span> Coalition</h1> */}
              <p className="text-muted mb-4 pb-2">Focused on scaling cross chain infrastructure through events & education</p>
              <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer" className="btn btn-hero">
                Join Us
              </a>
              {/* <Button
                    color="primary"
                >
                    Click Me
                </Button> */}

            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/hero-image.png" alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Hero;