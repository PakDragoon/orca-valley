import React from "react";
import Logo from "./Logo";
import { bookingLinkProps } from "../data/contact";

export default function Header() {
  return (
    <header id="top" className="z-surface" data-tone="light">
      <div className="wrap top">
        <Logo />
        <nav aria-label="Main">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a className="btn sm" href="#contact">Contact us</a>
        </nav>
      </div>

      <div className="wrap hero" id="main">
        <h1 className="display">We build AI into the software your business runs on.</h1>
        <p className="lede">
          Orca Valley designs and builds RAG knowledge assistants, LLM features and AI agents,
          plus the CRMs, web apps and cloud infrastructure they live in. A small team of senior
          engineers in Lahore, working with businesses that want AI to do real work.
        </p>
        <div className="actions">
          <a className="btn" {...bookingLinkProps()}>
            Book a discovery call
          </a>
          <a className="link" href="#work">See what we've built</a>
        </div>
      </div>

      <div className="waterline" aria-hidden="true">
        <svg className="fin" viewBox="0 0 74 78">
          <path d="M2 78C22 72 34 50 40 2c6 30 16 58 32 76z" fill="#0E3140" />
        </svg>
        <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0 62 C 120 50, 240 74, 360 62 S 600 50, 720 62 960 74, 1080 62 1320 50, 1440 62 V120 H0 Z"
            fill="var(--shallows)"
          />
          <path
            d="M0 62 C 120 50, 240 74, 360 62 S 600 50, 720 62 960 74, 1080 62 1320 50, 1440 62"
            fill="none"
            stroke="#0E3140"
            strokeOpacity=".35"
            strokeWidth="2"
          />
        </svg>
      </div>
    </header>
  );
}
