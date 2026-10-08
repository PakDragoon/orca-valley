import React from "react";
import DepthGauge from "../components/DepthGauge";
import Header from "../components/Header";
import Services from "../components/Services";
import Process from "../components/Process";
import Work from "../components/Work";
import Stack from "../components/Stack";
import Contact from "../components/Contact";

export default function Landing() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <DepthGauge />
      <Header />
      <Services />
      <Process />
      <Work />
      <Stack />
      <Contact />
    </>
  );
}
