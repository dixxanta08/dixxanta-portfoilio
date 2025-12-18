This Product Requirements Document (PRD) is designed to balance **Dixanta Nath Shrestha’s** technical authority as a MERN stack developer with the high-end, "Swiss-Brutalist" aesthetic of the reference image.

---

## 1. Landing Page: The "Digital Manifesto"

**Objective:** To establish an immediate sense of gravitas and professionalism through typography and whitespace.

### Visual Architecture

- **Hero Section:** Giant, bold name (**Dixanta.**) in a font like _Clash Display_.
- **The Narrative Pill:** Use the "pill" styling for key tech terms (React, Node.js, MongoDB) embedded within a fluid intro sentence.
- **Background Interaction:** A subtle, low-opacity "Hello" or "Code" text that follows the cursor movement without using heavy GSAP animations.

### Content Strategy (Reaching 2000 Words)

- **The Development Philosophy:** Instead of a simple "I build websites," include a 1,500-word treatise on "The Ethics of Code" and "The Future of Full-Stack." This turns the landing page into a long-form landing experience.
- **Intentional Friction:** Use large margins so the text feels like an editorial magazine piece.

---

## 2. About Page: The "Architectural Journey"

**Objective:** To move beyond a resume and tell the story of your technical evolution.

### Visual Architecture

- **Split Layout:** On desktop, use a 40/60 split. The left side is a sticky photo (grayscale, high contrast). The right side is a long-scroll text.
- **Mobile:** Stacked, with the image serving as a divider between sections.

### Content Strategy

- **The Technical Genesis:** 1,000 words on how you mastered the MERN stack.
- **Stack Logic:** 500 words explaining _why_ you chose MERN over other stacks (opinionated writing creates gravitas).
- **Personal Minimalism:** 500 words on your "Practicing Minimalist" lifestyle and how it influences your clean code.

---

## 3. Projects (Gallery) Page: The "Index"

**Objective:** A high-density visual list that feels like an art gallery index.

### Visual Architecture

- **The List Format:** Use a list-view rather than a standard grid. When hovering over a project name, a large floating thumbnail appears.
- **Metadata Density:** Display Year, Type (SaaS, FinTech), and Role (Lead Dev) in tiny, spaced-out caps next to each title.

### Content Strategy

- **Categorization Intro:** A 500-word introduction to your project selection criteria.
- **Contextual Descriptions:** Each project in the list gets a 200-word "blurb" before the user even clicks into the detail page.

---

## 4. Project Detail Page: The "Technical Post-Mortem"

**Objective:** A deep-dive case study that proves you can document, troubleshoot, and architect complex systems.

### Visual Architecture

- **The "Header Gravitas":** Massive title at the top, followed by a full-bleed "hero" image of the app.
- **JSON-Driven Layout:** Since you are using JSON, the page will dynamically render components based on what you fill in.

### Content Breakdown (The 2000-Word Core)

- **The Problem Space (400 words):** What was the pain point?
- **Technical Architecture (600 words):** Deep dive into the MERN implementation. Describe the schema and the API logic.
- **Challenges & Edge Cases (600 words):** Talk about a specific bug or performance bottleneck (e.g., "Optimizing MongoDB aggregation pipelines").
- **Outcome & Reflection (400 words):** What did the project achieve?

### Functional Elements

- **Code Snippets:** Minimalist syntax highlighting (e.g., _Shiki_).
- **Document Embed:** An iframe or custom component to view your "Documentation Report" directly.
- **Tag Cloud:** Custom pills for every library used (Redux, Framer Motion, Express).

---

## 5. Certifications Page: The "Validation Ledger"

**Objective:** To present certifications as a serious academic record rather than just logos.

### Visual Architecture

- **Tabular Design:** A table-based layout with borders only on the bottom. Columns: [Date], [Issuer], [Course Title], [Credential ID].
- **Interaction:** Clicking a row expands it (Accordion style) to reveal the content.

### Content Strategy

- **Syllabus Reflection:** For each certificate, write 300 words on the most difficult concept you learned in that course.
- **The "Continuous Learning" Essay:** A 1000-word closing essay on your philosophy of staying updated in the JavaScript ecosystem.

---

## 6. Technical Implementation Details

| Feature                | Specification                                                          |
| ---------------------- | ---------------------------------------------------------------------- |
| **Framework**          | Next.js 14+ (App Router)                                               |
| **Styling**            | Tailwind CSS (for efficiency) + CSS Modules (for custom typography)    |
| **Data Source**        | `data/projects.json`, `data/certs.json`, `data/about.json`             |
| **Mobile Strategy**    | 100vw fluid typography; `px-6` (24px) padding for mobile containers    |
| **Typography Control** | `line-height: 1.1` for headers; `line-height: 1.7` for long-form prose |

**Would you like me to generate the `projects.json` schema and a sample Next.js React component that handles the "Project Detail" page dynamically?**
