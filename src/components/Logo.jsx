import React from "react";
import logoNavy from "../assets/img/brand/orca-valley-logo-navy.png";
import logoWhite from "../assets/img/brand/orca-valley-logo-white.png";

// Full Orca Valley lockup (orca, divider, wordmark).
// By default it follows the colour scheme: navy in light mode, white in dark mode.
// Pass `light` on backgrounds that are always dark (e.g. the footer).
export default function Logo({ light = false, className = "brand" }) {
  const size = { width: 235, height: 52 };
  return (
    <a className={className} href="#top" aria-label="Orca Valley home">
      {light ? (
        <img src={logoWhite} alt="Orca Valley" {...size} />
      ) : (
        <>
          <img className="logo-for-light" src={logoNavy} alt="Orca Valley" {...size} />
          <img className="logo-for-dark" src={logoWhite} alt="" aria-hidden="true" {...size} />
        </>
      )}
    </a>
  );
}
