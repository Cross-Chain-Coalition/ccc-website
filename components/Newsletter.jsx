import React from 'react';
import { Container, Row } from 'reactstrap';
import { fetchNewsletter } from '../pages/api/axios';
import NewsletterItem from './NewsletterItem';
const Newsletter = ({ newsletter }) => {
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
            {/* We use 4 component for now to mimic all 4 newsletter post */}
            {
                newsletter.map(post => {
                return <NewsletterItem key={post.id} post={post} />
                })
              }
            {/* <NewsletterItem /> */}
            {/* <div className="newsletter-content">
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
            </div> */}
          </div>

        </Row>
      </Container>
    </section>
  );
}
export default Newsletter;

export const getStaticProps = async () => {
  // const all_posts = await fetchAllNewsletters();
  const newsletter = await fetchNewsletter();
  // const events = await fetchEvents();

  return {
    props: {
      newsletter,
    }
  }
}