# Orca Valley website

Marketing site for [orcavalley.com](https://orcavalley.com), an AI-first software agency in Lahore.

Built with React 17 and Create React App. All styles live in `src/style/site.css`; there is no CSS-in-JS.

## Run locally

```bash
npm install
npm start        # http://localhost:3000
```

## Build for production

```bash
npm run build    # outputs to build/
```

## Where to edit content

| What | File |
| --- | --- |
| Hero headline and intro | `src/components/Header.jsx` |
| AI and core services | `src/components/Services.jsx` |
| Project process steps | `src/components/Process.jsx` |
| Featured work and client projects | `src/components/Work.jsx`, `src/data/projects.js` |
| Tech stack | `src/components/Stack.jsx` |
| Email, phone, social links | `src/data/contact.js` |
| Page title, meta and social preview | `public/index.html` |

Project screenshots are in `src/assets/img/work/` as 1200px-wide WebP files. To add a project, drop a screenshot there and add an entry to `src/data/projects.js`.

## Contact form

The form has no backend: on submit it opens the visitor's email app with the message addressed to the email in `src/data/contact.js`.
