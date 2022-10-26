import React, { useState, useEffect } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { TELEGRAM_LINK, TWITTER_LINK, SUBSTACK_LINK, CONTACT_PIC_LINK, JOBS_LINK } from '../utils/constants';

const Footer = () => {

  return (
    <div id="contact" className="footer-container">
        <div className="v203_7341">
            <div className="v203_7337"></div>
                <div className="v203_7342">
                </div>
                <div className="v203_7343">
                </div>
                <div className="contact-us_body">
                    <h5>
                        CONTACT US
                    </h5>
                    <h3>
                        If you’re interested in partnering 
                    </h3>
                    <a href={CONTACT_PIC_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                    Let’s Chat
                    </a> 
                </div>
            </div>
        <footer className={styles.footer}>
            <div>
                <a href="#welcome" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    About us
                </a>
                <a href="#community" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Community
                </a>
                <a href="#events" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Events
                </a>
                <a href="#newsletter_cta" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Newsletter
                </a>
                <a href={JOBS_LINK} target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Jobs
                </a>
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Join us
                </a>
                <a href={CONTACT_PIC_LINK} target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Contact us
                </a>
            </div>
            <div className="footer-logo">
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="footer-menu">
                    <img src="/tele-icon.svg" alt="telegram" />
                </a>
                <a href={SUBSTACK_LINK} target="_blank" rel="noopener noreferrer" className="footer-menu">
                    <img src="/substack-icon.svg" alt="substack" />
                </a>
                <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer" className="footer-menu">
                    <img src="/twitter-icon.svg" alt="twitter" />
                </a>
            </div>
        </footer>
    </div>
  );
}

export default Footer;