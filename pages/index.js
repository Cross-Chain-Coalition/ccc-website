import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container, Row } from 'reactstrap';

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Community from "../components/Community";
// import Newsletter from "../components/Newsletter";
import Job from "../components/Job";
import NewsletterCTA from "../components/NewsletterCTA";
import Footer from "../components/Footer";

import { fetchAllNewsletters } from './api/axios';
import { fetchEvents, fetchNewsletters } from '../utils/storyblok';
import NewsletterItem from '../components/NewsletterItem';
import EventItem from '../components/EventItem';

export default function Home({ all_posts, newsletter, events }) {
  
  // console.log("This is all post from axios", all_posts);
  // console.log("These are all the newsletter from storyblok", newsletter);
  // console.log("These are all the events", events)

  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Head>
        <title>Cross Chain Coalition</title>
        <meta name="description" content="Focused on scaling cross chain infrastructure through events & education" />
        <link rel="icon" href="/ccc-icon.svg" />
      </Head>

      <Header />
      <Hero />
      <section id="event" className="position-relative">
        <Container id="event-container">
          <Row className="align-items-center">
              <div className="event-title-container">
                  <div className="event-container-left">
                      <h3 className="event-title">
                          Our Events
                      </h3>
                      <p className="event-description">
                      Over the past quarter, we’ve hosted 6 events across 4 continents bringing together over 6,000 web3 builders! In an industry as remote as web3, events are the glue to a strong community. Hosting weekly AMA’s, monthly IRL networking meetups, & quarterly hackathons is our secret recipe for spurring cross chain innovation. 
                      </p>
                  </div>
              </div>
            <div className="event-content-container">
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
              {
                events.slice(0, 4).map(post => {
                return <EventItem key={post.id} post={post} />
                })
              }
            </div>

          </Row>
        </Container>
      </section>
      <Community />
      <section id="newsletter" className="position-relative">
        <Container id="newsletter-container">
          <Row className="align-items-center">
              <div className="newsletter-title-container">
                  <div className="newsletter-container-left">
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
              {
                newsletter.slice(0, 4).map(post => {
                return <NewsletterItem key={post.id} post={post} />
                })
              }
            </div>

          </Row>
        </Container>
      </section>
      <Job />
      <NewsletterCTA />
      <Footer />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const all_posts = await fetchAllNewsletters();
  const newsletter = await fetchNewsletters();
  const events = await fetchEvents();

  return {
    props: {
      all_posts,
      newsletter,
      events
    }
  }
}