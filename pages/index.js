import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Container, Row } from 'reactstrap';

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Community from "../components/Community";
import Job from "../components/Job";
import NewsletterCTA from "../components/NewsletterCTA";
import Footer from "../components/Footer";

import { fetchAllNewsletters } from './api/axios';
import { fetchEvents, fetchNewsletters } from '../utils/storyblok';
import NewsletterItem from '../components/NewsletterItem';
import EventItemUpcoming from '../components/EventItemUpcoming';
import EventItemPast from '../components/EventItemPast';

import { convertUTCtoLocalTime, parseDate } from '../utils/date';

export default function Home({ all_posts, newsletter, events }) {
  const [toggled, setToggled] = useState(false);

  // Event filtering
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchEvents();

      const upcomingEvents = [];
      const pastEvents = [];

      for (let i = 0; i < data.length; i++) {
        const event = data[i];
        console.log("This is all the event", event);

        const currentTime = new Date().getTime();
        const eventTime = convertUTCtoLocalTime(
          parseDate(event.content.EventTime).getTime()
        );

        console.log("This is the event time:" + eventTime)

        if (eventTime >= currentTime) {
          upcomingEvents.push(event);
        } else {
          pastEvents.push(event);
        }
      }

      upcomingEvents.sort((a, b) => {
        const aEventTime = parseDate(a.content.EventTime).getTime();
        const bEventTime = parseDate(b.content.EventTime).getTime();

        return aEventTime > bEventTime ? 1 : -1;
      });

      pastEvents.sort((a, b) => {
        const aEventTime = parseDate(a.content.EventTime).getTime();
        const bEventTime = parseDate(b.content.EventTime).getTime();

        return aEventTime > bEventTime ? -1 : 1;
      });

      setUpcomingEvents(upcomingEvents);
      setPastEvents(pastEvents);
      console.log("Upcoming events", upcomingEvents);
      console.log("Past events", pastEvents);
    };

    getData();
  }, []);

  // Toggle related setting
  const handleClick = () => {
    let pastToggle = document.getElementById('past-toggle');
    let upcomingToggle = document.getElementById('upcoming-toggle');
    setToggled(current => !current);
    if (!toggled) {
      pastToggle.classList.add('active');
      upcomingToggle.classList.remove('active');
    } else {
      upcomingToggle.classList.add('active');
      pastToggle.classList.remove('active');
    }
  };

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
                    <div className="event-container">
                      <h3 className="event-title">
                        Our Events
                      </h3>
                      <div className="toggle-section">
                        <button disabled={!toggled} id="upcoming-toggle" className="active" onClick={handleClick}>UPCOMING</button>
                        <button disabled={toggled} id="past-toggle" className="" onClick={handleClick}>PAST</button>
                      </div>
                    </div>
                    <p className="event-description">
                    Over the past quarter, we’ve hosted 6 events across 4 continents bringing together over 6,000 web3 builders! In an industry as remote as web3, events are the glue to a strong community. Hosting weekly AMA’s, monthly IRL networking meetups, & quarterly hackathons is our secret recipe for spurring cross chain innovation. 
                    </p>
                  </div>
              </div>
            <div className="event-content-container">
              { !toggled ? (
                upcomingEvents.map(post => {
                return <EventItemUpcoming key={post.id} post={post} />
                })
              ) : (
                pastEvents.map(post => {
                return <EventItemPast key={post.id} post={post} />
                })
              ) } 
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