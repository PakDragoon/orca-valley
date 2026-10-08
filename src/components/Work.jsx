import React from "react";
import { proAssistProject, projects } from "../data/projects";

function Shot({ src, alt }) {
  return (
    <figure className="shot">
      <div className="bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <img src={src} alt={alt} loading="lazy" width="1200" height="585" />
    </figure>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function OrcaAgentsDiagram() {
  return (
    <div className="diagram">
      <svg viewBox="0 0 420 230" role="img" aria-labelledby="oa-title oa-desc">
        <title id="oa-title">Orca Agents workflow</title>
        <desc id="oa-desc">
          A Trello card goes to the PM agent, which writes a developer brief. A Slack command
          triggers the developer agent, which opens a pull request for human review.
        </desc>
        <defs>
          <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0l10 5-10 5z" fill="#A9C4C9" />
          </marker>
        </defs>
        <g fontFamily="Archivo, sans-serif" fontSize="13" fill="#F2F7F6">
          <rect x="10" y="20" width="110" height="46" rx="10" fill="none" stroke="#A9C4C9" strokeOpacity=".5" />
          <text x="65" y="48" textAnchor="middle">Trello card</text>
          <rect x="155" y="20" width="110" height="46" rx="10" fill="#1F5C6B" />
          <text x="210" y="48" textAnchor="middle" fontWeight="700">PM agent</text>
          <rect x="300" y="20" width="110" height="46" rx="10" fill="none" stroke="#A9C4C9" strokeOpacity=".5" />
          <text x="355" y="48" textAnchor="middle">Dev brief</text>
          <rect x="300" y="160" width="110" height="46" rx="10" fill="none" stroke="#A9C4C9" strokeOpacity=".5" />
          <text x="355" y="188" textAnchor="middle">Slack command</text>
          <rect x="155" y="160" width="110" height="46" rx="10" fill="#1F5C6B" />
          <text x="210" y="188" textAnchor="middle" fontWeight="700">Dev agent</text>
          <rect x="10" y="160" width="110" height="46" rx="10" fill="#F5A524" />
          <text x="65" y="182" textAnchor="middle" fill="#1b1300" fontWeight="700">Pull request</text>
          <text x="65" y="198" textAnchor="middle" fill="#1b1300" fontSize="11">human review</text>
        </g>
        <g stroke="#A9C4C9" strokeWidth="1.6" fill="none" markerEnd="url(#ah)">
          <path d="M120 43h31" />
          <path d="M265 43h31" />
          <path d="M355 66v90" />
          <path d="M300 183h-31" />
          <path d="M155 183h-31" />
        </g>
      </svg>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="z-deep" data-tone="dark">
      <div className="wrap">
        <div className="intro">
          <h2 className="display">Selected work</h2>
          <p className="lede">AI systems we've built, and the platforms we've shipped for clients.</p>
        </div>

        <div className="work">
          <article className="case">
            <div className="case-copy">
              <span className="kind">In-house AI product</span>
              <h3>Orca Agents</h3>
              <p>
                A multi-agent system that runs part of our own development workflow. A
                project-manager agent reads Trello cards and writes precise developer briefs; a
                developer agent, triggered from Slack, implements them with Claude Code and opens
                the change for human review.
              </p>
              <Tags items={["Claude", "Claude Code", "n8n", "Slack", "Trello", "Bitbucket", "AWS"]} />
            </div>
            <OrcaAgentsDiagram />
          </article>

          <article className="case flip">
            <div className="case-copy">
              <span className="kind">{proAssistProject.kind}</span>
              <h3>{proAssistProject.title}</h3>
              <p>{proAssistProject.text}</p>
              <Tags items={proAssistProject.tags} />
            </div>
            <Shot src={proAssistProject.img} alt="Pro Assist sign-in screen" />
          </article>
        </div>

        <div className="more">
          <h3 className="more-title">Client platforms</h3>
          <p>Web apps and marketplaces we've designed and built end to end.</p>
          <ul className="grid">
            {projects.map((p) => (
              <li key={p.title}>
                <Shot src={p.img} alt={`${p.title} home page`} />
                <h4>{p.title}</h4>
                <p>{p.text}</p>
                <Tags items={p.tags} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
