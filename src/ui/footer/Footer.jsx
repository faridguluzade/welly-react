import { Link } from "react-router-dom";

import Input from "../input/Input";

import { ArrowRightIcon } from "../../assets/icons/icons";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__wrap">
        <nav className="footer__nav">
          <ul className="footer__list">
            <li>
              <Link className="footer__link">Products</Link>
            </li>
            <li>
              <Link className="footer__link">Inside the Tin</Link>
            </li>
            <li>
              <Link className="footer__link">About</Link>
            </li>
            <li>
              <Link className="footer__link">Help Center</Link>
            </li>
            <li>
              <Link className="footer__link">Media Kit</Link>
            </li>
            <li>
              <Link className="footer__link">Press</Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li>
              <Link className="footer__link">Store Locator</Link>
            </li>
            <li>
              <Link className="footer__link">Careers</Link>
            </li>
            <li>
              <Link className="footer__link">Wholesale</Link>
            </li>
            <li>
              <Link className="footer__link">Return Policy</Link>
            </li>
            <li>
              <Link className="footer__link">Media Kit</Link>
            </li>
            <li>
              <Link className="footer__link">Accessibility Settings</Link>
            </li>
          </ul>

          <ul className="footer__contact">
            <li>
              <Link className="footer__link">Contact us</Link>
            </li>
            <li>
              <a className="footer__mail" href="mailto:hello@getwelly.com">
                hello@getwelly.com
              </a>
            </li>
            <li>
              <a className="footer__mail" href="mailto:press@getwelly.com">
                press@getwelly.com
              </a>
            </li>
            <li>
              <a href="#">1 (833) BE-­WELLY</a>
            </li>
          </ul>
        </nav>
        <form className="footer__form">
          <label className="footer__link">STAY IN TOUCH</label>
          <Input
            type="email"
            placeholder="Email Address"
            className="footer__input"
          />
          <button className="footer__btn">
            <ArrowRightIcon />
          </button>
        </form>

        <div className="footer__about-box">
          <Link className="footer__about-link" to="/">
            © 2023 Welly All Rights Reserved
          </Link>
          <Link className="footer__about-link" to="/">
            Privacy Policy
          </Link>
          <Link className="footer__about-link" to="/">
            Terms and Conditions
          </Link>
          <Link className="footer__about-link" to="/">
            Accessibility
          </Link>
          <Link className="footer__about-link" to="/">
            Do Not Sell or Share My Personal Information
          </Link>
          <Link className="footer__about-link" to="/">
            <img src="https://c.evidon.com/pub/icong1.png" alt="" />
            <span> AdChoices - Do Not Sell or Share</span>
          </Link>
        </div>

        <div className="footer__social-box">
          <a className="footer__social-link" href="#">
            Instagram
          </a>
          <a className="footer__social-link" href="#">
            Facebook
          </a>
          <a className="footer__social-link" href="#">
            Twiiter
          </a>
          <a className="footer__social-link" href="#">
            Pinterest
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
