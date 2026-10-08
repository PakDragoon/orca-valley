import React from "react";

const steps = [
  ["Discovery call", "We learn the problem, the data you have, and what a good result looks like for your team."],
  ["Feasibility on your data", "We test approaches on a real sample of your data and tell you plainly what accuracy and cost to expect."],
  ["Working prototype", "A prototype your team can use and react to, so feedback comes from real use rather than slides."],
  ["Build and integrate", "Production build with authentication, logging, evaluation tests and integration into your existing systems."],
  ["Launch and improve", "We monitor answer quality, latency and spend after launch, and keep improving the system as usage grows."],
];

export default function Process() {
  return (
    <section id="process" className="z-mid" data-tone="dark">
      <div className="wrap">
        <div className="intro">
          <h2 className="display">How a project runs</h2>
          <p className="lede">You see results on your own data before committing to a full build.</p>
        </div>
        <ol className="steps">
          {steps.map(([title, text]) => (
            <li key={title}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
