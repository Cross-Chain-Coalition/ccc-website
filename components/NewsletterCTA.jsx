import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
const Hero = () => {
  return (
    <section id="newsletter-cta" className="position-relative">
      <Container id="newsletter-cta-container">
        <div class="newsletter-form">
          <div class="subscribe-form-container">
              <div class="join">Join our newsletter</div>
              <div class="cc">CROSS-CHAIN</div>
              <div class="weekly">WEEKLY</div>
              <p class="content">Each week, we’ll share resources related to cross chain development to keep you informed and bring you one step closer on your journey from blockchain engineer to crosschain engineer.</p>
              <form class="email-form" method="post" action="https://crosschaindev.substack.com/api/v1/free?nojs=true" target="_blank">
                <div class="email-box"><input class="email-box-input" type="email" name="email" placeholder="Join the Cross Chain Coalition"/><button class="button submit">Subscribe</button></div>
              </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Hero;