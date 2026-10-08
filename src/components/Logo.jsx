import React from "react";
import mark from "../assets/img/brand/orca-mark.png";
import markLight from "../assets/img/brand/orca-mark-light.png";

export default function Logo({ light = false }) {
  return (
    <a className="brand" href="#top" aria-label="Orca Valley home">
      <img src={light ? markLight : mark} alt="" width="34" height="32" />
      Orca Valley
    </a>
  );
}
