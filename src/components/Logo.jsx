import React from "react";
import logoNavy from "../assets/img/brand/orca-valley-logo-navy.png";
import logoWhite from "../assets/img/brand/orca-valley-logo-white.png";

// Full Orca Valley lockup (orca, divider, wordmark). Use `light` on dark backgrounds.
export default function Logo({ light = false, className = "brand" }) {
  return (
    <a className={className} href="#top" aria-label="Orca Valley home">
      <img src={light ? logoWhite : logoNavy} alt="Orca Valley" width="235" height="52" />
    </a>
  );
}
