import proAssist from "../assets/img/work/pro-assist.webp";
import asyncNow from "../assets/img/work/asyncnow.webp";
import qualStream from "../assets/img/work/qualstream.webp";
import ezEnglish from "../assets/img/work/ezenglish.webp";
import misfits from "../assets/img/work/misfits.webp";
import bystro from "../assets/img/work/bystro.webp";

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
