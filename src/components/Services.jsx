import React from "react";

const aiServices = [
  {
    title: "Knowledge assistants (RAG)",
    text:
      "Chat and search over your documents, tickets, policies and product data. Answers cite their sources, respect user permissions, and stay current as your data changes.",
    example: "For example: a support assistant that answers from your help centre and past tickets.",
  },
  {
    title: "LLM features in your product",
    text:
      "Summaries, drafting, data extraction, classification and natural-language search, added to apps you already run. We pick the model per task to balance quality, speed and cost.",
    example: "For example: turning uploaded PDFs and emails into structured CRM records.",
  },
  {
    title: "AI agents and automation",
    text:
      "Agents that take actions across Slack, CRMs, project boards and code repositories, with a human approval step wherever a mistake would be costly.",
    example: "For example: an agent that turns a Trello card into a reviewed pull request.",
  },
  {
    title: "Custom and fine-tuned models",
    text:
      "When an off-the-shelf model isn't enough, we fine-tune or train models on your data, measure them against a baseline, and deploy them on your own cloud.",
    example: "For example: a classifier trained on your historical records to route requests automatically.",
  },
];

const coreServices = [
  {
    title: "CRMs and internal tools",
    text: "Custom CRMs, dealership and operations systems built around how your team actually works.",
  },
  {
    title: "Web applications",
    text: "React and Next.js front ends on NestJS and PostgreSQL, with clean APIs you can build on.",
  },
  {
    title: "Mobile apps",
    text: "Cross-platform iOS and Android apps that share logic with your web product.",
  },
  {
    title: "Cloud and DevOps",
    text: "AWS infrastructure, CI/CD, monitoring and security hardening, set up so you can run it after we hand over.",
  },
];

export default function Services() {
  return (
    <section id="services" className="z-shallows services" data-tone="light">
      <div className="wrap">
        <div className="intro">
          <h2 className="display">AI that works on your data</h2>
          <p className="lede">
            Most AI projects stall between the demo and production. We build the parts that get
            them there: data pipelines, retrieval, evaluation, permissions, and integration with
            the tools your team already uses.
          </p>
        </div>

        <ul className="ai-list">
          {aiServices.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>
                {s.text}
                <span className="eg">{s.example}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="around">
          <h2 className="display">And the software around it</h2>
          <div className="around-grid">
            {coreServices.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
