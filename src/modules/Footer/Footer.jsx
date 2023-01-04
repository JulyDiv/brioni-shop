/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FooterInfoLink } from "../../components/FooterInfoLink";
import { FooterInfoTitle } from "../../components/FooterInfoTitle";

export const Footer = () => {
  const [email, setEmail] = useState("");
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
      defaultValues: { email: email },
    });
    const onSubmit = (data) => {
      const { email } = data;
      reset();
      console.log(data);
    };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <h4 className="footer__title">
            Subscribe to <strong>Brioni</strong> news
          </h4>
          <form
            action="#"
            className="footer-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                },
              })}
              className="footer-form__input"
              placeholder="Enter e-mail"
              style={{ color: errors.email && "#DA3333" }}
            />
            <button
              className="footer-form__button"
              style={{
                backgroundImage: errors.email && 'url("/img/red-envelope.svg")'
              }}
            ></button>
          </form>

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

            <div className="footer-info__block">
              <FooterInfoTitle title="Follow us" />
              <ul className="footer-info__follows">
                <Link href="#" className="footer-info__link-follows">
                  <img src="/img/Facebook.svg" alt="Icon: Facebook" />
                </Link>
                <Link href="#" className="footer-info__link-follows">
                  <img src="/img/Twitter.svg" alt="Icon: Twitter" />
                </Link>
                <Link href="#" className="footer-info__link-follows">
                  <img src="/img/Instagram.svg" alt="Icon: Instagram" />
                </Link>
                <Link href="#" className="footer-info__link-follows">
                  <img src="/img/Google.svg" alt="Icon: Google" />
                </Link>
                <Link href="#" className="footer-info__link-follows">
                  <img src="/img/YouTube.svg" alt="Icon: YouTube" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <span className="footer__span">2022 © Brioni</span>
      </div>
    </footer>
  );
};
