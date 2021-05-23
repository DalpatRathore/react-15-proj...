import React from "react";
import heroImg from "./images/hero-image.svg";
import { useGlobalContext } from "../../context";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { companiesLogo } from "./data";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <article className="hero-images">
        <img src={heroImg} alt="" className="phone-img" />
      </article>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Payments <br /> infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <div className="btn-container">
            <button className="btn btn-startNow">
              Start now
              <FaChevronRight className="chevronRight"></FaChevronRight>
              <FaArrowRight className="arrowRight"></FaArrowRight>
            </button>
            <button className="btn btn-contactSales">
              Contact sales
              <FaChevronRight className="chevronRight"></FaChevronRight>
              <FaArrowRight className="arrowRight"></FaArrowRight>
            </button>
          </div>
        </article>

        <article className="companies-logo">
          {companiesLogo.map(companyLogo => {
            const { id, logoUrl } = companyLogo;
            return (
              <div className="logo-wrapper" key={id}>
                <img src={logoUrl} alt="" />
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Hero;
