import React from "react";

const groups = [
  ["Models", "Claude, GPT, Gemini, Llama, Mistral"],
  ["AI tooling", "LangChain, LlamaIndex, pgvector, Pinecone, n8n, Claude Code"],
  ["Applications", "React, Next.js, NestJS, Node.js, Prisma, PostgreSQL"],
  ["Cloud", "AWS, Docker, GitHub Actions, Bitbucket Pipelines, Sentry"],
];

export default function Stack() {
  return (
    <section id="stack" className="z-deeper" data-tone="dark">
      <div className="wrap">
        <div className="intro">
          <h2 className="display">What we build with</h2>
          <p className="lede">
            We choose tools per project and stay model-agnostic, so you're never locked into one vendor.
          </p>
        </div>
        <div className="stack">
          {groups.map(([title, items]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
