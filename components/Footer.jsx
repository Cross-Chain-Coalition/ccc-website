import React, { useState, useEffect } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {

  return (
    <div className="footer-container">
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
                        If you&quot;re interested in partnering 
                    </h3>
                    <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-header">
                    Let&quot;s Chat
                    </a> 
                </div>
            </div>
        <footer className={styles.footer}>
            <div>
                <a href="/" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    About us
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Community
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Events
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Newsletter
                </a>
                <a href="https://ccc.pallet.com/jobs" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Jobs
                </a>
                <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Join us
                </a>
                <a href="https://t.me/amartin55" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    Contact us
                </a>
            </div>
            <div>
                <a href="https://t.me/crosschaincoalition" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    <img src="/tele-icon.svg" alt="telegram" />
                </a>
                <a href="https://crosschaindev.substack.com/" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    <img src="/substack-icon.svg" alt="substack" />
                </a>
                <a href="https://twitter.com/crosschainco" target="_blank" rel="noopener noreferrer" className="footer-menu">
                    <img src="/twitter-icon.svg" alt="twitter" />
                </a>
            </div>
        </footer>
    </div>
  );
}

export default Footer;