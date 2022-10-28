/* eslint-disable @next/next/no-img-element */

import { FooterInfoLink } from "../../components/FooterInfoLink";
import { FooterInfoTitle } from "../../components/FooterInfoTitle";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__line"></div>

        <div className="footer-wrapper">
          <div className="footer-form">
            <h3 className="footer-form__title">Subscribe to Brioni news</h3>
            <form action="#" className="footer-form__form">
              <input
                type="email"
                className="input footer-form__input"
                placeholder="Enter e-mail"
              />
              <img
                src="img/footer-form__email.svg"
                alt="e-mail"
                className="footer-form__image"
              />
              <img
                src="img/grey-envelope.svg"
                alt="e-mail"
                className="footer-form__image footer-form__image--grey"
              />
              <img
                src="img/red-envelope.svg"
                alt="e-mail"
                className="footer-form__image footer-form__image--red"
              />
            </form>
          </div>

          <div className="footer-info">
            <div className="footer-info__block">
              <FooterInfoTitle title="Customer Service" />
              <ul className="footer-info__list footer-info__list--mobile_hidden">
                <FooterInfoLink description="Delivery" />
                <FooterInfoLink description="Orders and Returns" />
                <FooterInfoLink description="Exclusive Services" />
                <FooterInfoLink description="Find a Boutique" />
                <FooterInfoLink description="Write to us" />
                <FooterInfoLink description="FAQ" />
              </ul>
            </div>

            <div className="footer-info__block">
              <FooterInfoTitle title="About Brioni" />
              <ul className="footer-info__list footer-info__list--mobile_hidden">
                <FooterInfoLink description="Our Company" />
                <FooterInfoLink description="Atelier Brioni" />
                <FooterInfoLink description="The World of Bespoke" />
              </ul>
            </div>

            <div className="footer-info__block">
              <FooterInfoTitle title="General information" />
              <ul className="footer-info__list footer-info__list--mobile_hidden">
                <FooterInfoLink description="Legal Section" />
                <FooterInfoLink description="Investor Relations" />
                <FooterInfoLink description="Privacy Policy" />
                <FooterInfoLink description="Sustainable Development" />
                <FooterInfoLink description="Atelier Brioni" />
                <FooterInfoLink description="The World of Bespoke" />
              </ul>
            </div>

            {/* <div className="footer-info__follows">
              <h3 className="footer-info__title">Follow us</h3>
              <div className="footer-info__follows-links">
                <Link href="#">
                  <a className="footer-info__link">
                    <img
                      className="footer-info__image"
                      src="img/Facebook.svg"
                      alt="Icon:Facebook"
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className="footer-info__link">
                    <img
                      className="footer-info__image"
                      src="img/Twitter.svg"
                      alt="Icon:Twitter"
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className="footer-info__link">
                    <img
                      className="footer-info__image"
                      src="img/Instagram.svg"
                      alt="Icon:Instagram"
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className="footer-info__link">
                    <img
                      className="footer-info__image"
                      src="img/Google.svg"
                      alt="Icon:Google"
                    />
                  </a>
                </Link>
                <Link href="#">
                  <a className="footer-info__link">
                    <img
                      className="footer-info__image"
                      src="img/YouTube.svg"
                      alt="Icon:YouTube"
                    />
                  </a>
                </Link>
              </div>
            </div> */}
          </div>

          <div className="footer__line"></div>
          <span className="footer__span">2022 © Brioni</span>
        </div>
      </div>
    </footer>
  );
};
