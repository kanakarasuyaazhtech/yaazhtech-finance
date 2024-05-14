import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from React Router

const logoPrimary = "/logos/finance.png";

export const HomeFooter = ({ children }) => {
  function scrollToSelector(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <FOOTER>
      {children}
      <Container>
        <nav>
          <div className="logo">
            <img src={logoPrimary} alt="" />
          </div>
          <ul>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#hero")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#features")}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#instructions")}>
                Instructions
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollToSelector("#cta")}>
                CTA
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="socials">
          <div>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="flex-col">
            <p>
              <FontAwesomeIcon icon={faCopyright} className="copyright-icon" />
              2024 yaazhtech, All rights reserved
            </p>
            <a href="https://www.yaazhtech.com/" target="_blank" rel="noopener noreferrer">    yaazhtech.com</a>
          </div>
        </div>
      </Container>
    </FOOTER>
  );
};

const FOOTER = styled.footer`
  margin-top: 20rem;
  position: relative;
  background-color: #65bdf7;
  padding-top: 8rem;
  color: black;
  .logo {
    width: 8rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.5rem;
    margin-bottom: 1rem;
  }
  h4 {
    color: var(--primary-black);
  }
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin-inline: 0.5rem;
  }

  ul li a {
    color: var(--primary-grey);
    transition: color 0.2s ease-in;
  }
  ul li a:hover {
    color: black;
  }
  hr {
    margin-bottom: 1rem;
  }
  div.socials {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
  }
  div.socials > div a {
    color: black;
    font-size: var(--text-paragraph);
    margin-right: 0.75rem;
  }
  div.socials > div a:hover {
    color: black;
  }

  div.socials > p {
    color: black;
    font-size: var(--button);
  }
  .copyright-icon {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 650px) {
    margin-top:8rem;
  }
`;
