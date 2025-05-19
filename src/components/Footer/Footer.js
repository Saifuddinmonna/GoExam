import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text"><span>Quiz</span>Master</h1>
          <p>
            QuizMaster is your go-to platform for sharpening your knowledge
            and preparing for exams with engaging quizzes.
          </p>
          <div className="contact">
            <span><FaPhone /> &nbsp; 123-456-7890</span>
            <span><FaEnvelope /> &nbsp; info@quizmaster.com</span>
          </div>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li><a href="/topics">Topics</a></li>
            <li><a href="/statistics">Statistics</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <br />
          <form action="#" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <FaEnvelope />
              &nbsp;Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} QuizMaster.com | Designed by QuizMaster Team
      </div>
    </footer>
  );
};

export default Footer;