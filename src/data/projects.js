import proAssist from "../assets/img/work/pro-assist.webp";
import asyncNow from "../assets/img/work/asyncnow.webp";
import qualStream from "../assets/img/work/qualstream.webp";
import ezEnglish from "../assets/img/work/ezenglish.webp";
import misfits from "../assets/img/work/misfits.webp";
import bystro from "../assets/img/work/bystro.webp";

// Most recent and largest client platform (no public screenshots yet, so it uses a diagram)
export const relayProject = {
  title: "Relay",
  kind: "Client platform, current",
  pitch:
    "A multi-tenant SaaS platform for car dealerships that runs deal management and staff scheduling in one product, synced with the dealership systems they already use.",
  text:
    "Dealerships were tracking deals and rotas across spreadsheets, DMS portals, group chats and whiteboards. Relay brings it together. DPM follows every deal from quote to finalisation with role-specific dashboards, finance products and commission reporting. StaffMaster builds fair staff schedules automatically. We lead the product's architecture, full-stack development and AWS infrastructure.",
  scale:
    "88 data models, 277 database migrations and about 40 API modules across two repositories, with heavy work running on 7 background queues.",
  highlights: [
    {
      title: "Scheduling that respects people",
      text:
        "Rotation slots keep everyone's days off stable when staff join or leave. Re-runs never overwrite manual assignments or approved swaps, and managers preview a schedule before publishing it.",
    },
    {
      title: "DMS sync that never breaks the screen",
      text:
        "Deals sync with Reynolds, Fortellis/CDK and RouteOne. If a third-party API fails, users still see their data, and failed Reynolds messages go to a review queue.",
    },
    {
      title: "Tenant isolation enforced on the server",
      text:
        "Every query is scoped to the dealership from the signed token, across 23 roles, with MFA and identity verification.",
    },
    {
      title: "AI-assisted delivery",
      text:
        "The team ships with Claude Code, using project context files and custom agents for pull request review, ticket planning and database migration checks.",
    },
  ],
  tags: ["NestJS", "Prisma", "PostgreSQL", "React 19", "TypeScript", "BullMQ", "Redis", "AWS ECS", "Stripe", "Pusher", "Claude Code"],
};

// Featured AI project with a screenshot
export const proAssistProject = {
  title: "Pro Assist",
  kind: "AI customer care",
  img: proAssist,
  text:
    "A customer care web app built around AI, helping support teams respond to customers faster. Advanced location-based access control means each team works only with the customers and data for its own region.",
  tags: ["AI", "Customer support", "Location-based access control"],
};

// Other client projects shown in the grid
export const projects = [
  {
    title: "Async Now",
    img: asyncNow,
    text:
      "Video messaging for sales and marketing teams, where startups record and share video proposals with leads and investors.",
    tags: ["Web app", "Video"],
  },
  {
    title: "QualStream",
    img: qualStream,
    text:
      "A lead generation, job posting and talent sourcing platform for recruiters and growing teams.",
    tags: ["SaaS", "Recruitment"],
  },
  {
    title: "EZ English Learning",
    img: ezEnglish,
    text:
      "An online English learning marketplace where students pick a teacher, book classes and learn one-on-one over Zoom or Google Meet.",
    tags: ["Marketplace", "Education"],
  },
  {
    title: "Misfits",
    img: misfits,
    text:
      "An esports academy web app for high school players, covering seasons, enrolment and coaching programmes.",
    tags: ["Web app", "Esports"],
  },
  {
    title: "Bystro",
    img: bystro,
    text:
      "A brand marketing platform with brand listings and product catalogues customers can browse.",
    tags: ["Web app", "Marketing"],
  },
];
