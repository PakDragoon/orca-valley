import React from "react";
import { relayProject, proAssistProject, projects } from "../data/projects";

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

function RelayDiagram() {
  const box = { fill: "none", stroke: "#A9C4C9", strokeOpacity: ".5" };
  return (
    <div className="diagram">
      <svg viewBox="0 0 460 236" role="img" aria-labelledby="relay-title relay-desc">
        <title id="relay-title">Relay architecture</title>
        <desc id="relay-desc">
          A React single-page app calls a NestJS API. The API stores data in PostgreSQL and hands
          heavy jobs to BullMQ workers on Redis. The API and workers connect to Reynolds,
          Fortellis, RouteOne, Stripe, Pusher and Persona.
        </desc>
        <defs>
          <marker id="ah-relay" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0l10 5-10 5z" fill="#A9C4C9" />
          </marker>
        </defs>
        <g fontFamily="Archivo, sans-serif" fontSize="13" fill="#F2F7F6">
          <rect x="10" y="10" width="280" height="44" rx="10" {...box} />
          <text x="150" y="37" textAnchor="middle">React 19 SPA</text>

          <rect x="10" y="90" width="280" height="44" rx="10" fill="#1F5C6B" />
          <text x="150" y="117" textAnchor="middle" fontWeight="700">NestJS API, clean architecture</text>

          <rect x="10" y="170" width="130" height="50" rx="10" {...box} />
          <text x="75" y="200" textAnchor="middle">PostgreSQL</text>

          <rect x="160" y="170" width="130" height="50" rx="10" {...box} />
          <text x="225" y="192" textAnchor="middle">BullMQ workers</text>
          <text x="225" y="209" textAnchor="middle" fontSize="11" fill="#A9C4C9">Redis</text>

          <rect x="326" y="10" width="124" height="210" rx="10" fill="none" stroke="#F5A524" strokeOpacity=".7" strokeDasharray="5 5" />
          <text x="388" y="36" textAnchor="middle" fontWeight="700" fill="#F5A524">Integrations</text>
          {["Reynolds DMS", "Fortellis / CDK", "RouteOne", "Stripe", "Pusher", "Persona"].map((t, i) => (
            <text key={t} x="388" y={68 + i * 26} textAnchor="middle">{t}</text>
          ))}
        </g>
        <g stroke="#A9C4C9" strokeWidth="1.6" fill="none" markerEnd="url(#ah-relay)">
          <path d="M150 54v32" />
          <path d="M75 134v32" />
          <path d="M225 134v32" />
          <path d="M290 112h32" />
          <path d="M290 195h32" />
        </g>
      </svg>
    </div>
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
          <p className="lede">Our most recent client platform, the AI systems we've built, and products we've shipped.</p>
        </div>

        <article className="relay">
          <span className="kind">{relayProject.kind}</span>
          <h3>{relayProject.title}</h3>
          <p className="relay-pitch">{relayProject.pitch}</p>
          <div className="case">
            <div className="case-copy">
              <p>{relayProject.text}</p>
              <p className="scale">{relayProject.scale}</p>
              <Tags items={relayProject.tags} />
            </div>
            <RelayDiagram />
          </div>
          <ul className="highlights">
            {relayProject.highlights.map((h) => (
              <li key={h.title}>
                <h4>{h.title}</h4>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </article>

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
