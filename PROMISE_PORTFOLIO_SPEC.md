# **Promise Adeleye Portfolio — Master Build Specification**

## **1\. Project Overview**

Build a polished, responsive personal portfolio website for **Promise Adeleye**, an early-career Product Manager.

The portfolio should communicate three things clearly:

1. Promise understands how to identify and analyze product problems.  
2. Promise can think across users, product strategy, and business goals.  
3. Promise doesn't only analyze products — he also builds products.

The website should feel **editorial, thoughtful, modern, confident, and approachable**.

The visual direction is **Editorial Product**: strong typography, generous whitespace, restrained use of color, minimal borders, subtle motion, and project-first presentation.

The website should feel custom-designed rather than like a generic AI-generated portfolio template.

---

# **2\. Primary Goal**

The primary goal is to help a recruiter, hiring manager, founder, or fellow product professional quickly understand:

* Who Promise is  
* How he thinks about products  
* What kind of work he has done  
* What products he has built  
* What skills he brings  
* How to contact him

The site should communicate this within the first few seconds without requiring the visitor to read everything.

---

# **3\. Target Audience**

Primary:

* Product hiring managers  
* Product leaders  
* Startup founders  
* Recruiters  
* Other product professionals

Secondary:

* Designers  
* Developers  
* Potential collaborators  
* People interested in Promise's product work

The design should therefore be professional but should retain enough personality to feel like a personal portfolio rather than a corporate website.

---

# **4\. Brand Personality**

The portfolio should feel:

* Thoughtful  
* Curious  
* Product-minded  
* Confident  
* Approachable  
* Modern  
* Practical  
* Human

Avoid making the site feel:

* Corporate  
* Overly formal  
* Flashy  
* "Tech bro"  
* Generic  
* Overly playful  
* AI-generated  
* Like a résumé pasted onto a website

A useful internal design principle:

> **Serious about products, relaxed about presentation.**

---

# **5\. Visual Direction**

## **Overall Style**

Use an **editorial/product design aesthetic**.

Visual characteristics:

* Warm off-white background  
* Near-black typography  
* One restrained accent color  
* Large editorial headings  
* Modern sans-serif body typography  
* Generous whitespace  
* Thin borders  
* Strong alignment  
* Occasional asymmetry  
* Minimal shadows  
* Restrained border radii  
* Subtle animations

Do not use excessive:

* Gradients  
* Glassmorphism  
* Glow effects  
* 3D objects  
* Floating decorative shapes  
* Huge shadows  
* Rounded containers everywhere  
* Animated background effects

---

# **6\. Initial Color System**

Use CSS variables/design tokens so colors can be changed globally later.

Background:      \#F7F6F2  
Primary text:    \#171717  
Secondary text:  \#686862  
Border:          \#D9D7D0  
Accent:          TBD

The accent color should be implemented as a single design token rather than hardcoded throughout the application.

Do not introduce multiple accent colors.

The accent should primarily be used for:

* Links  
* Button emphasis  
* Small visual details  
* Hover states  
* Selected/active states

It should not dominate the page.

---

# **7\. Typography**

Use a two-font system.

### **Display font**

Preferred:

**Instrument Serif**

Use for:

* Hero heading  
* Major section headings where appropriate  
* Large editorial statements

### **Sans-serif**

Preferred:

**Manrope**

Use for:

* Body copy  
* Navigation  
* Buttons  
* Project metadata  
* Labels  
* Skills  
* Footer  
* Supporting text

Typography should create hierarchy through:

* Size  
* Weight  
* Line height  
* Spacing  
* Font family

Avoid excessive font weights.

---

# **8\. Layout Principles**

The website should use a responsive centered content container.

Desktop:

* Maximum content width approximately `1200–1280px`  
* Generous horizontal padding  
* Strong grid alignment

Tablet:

* Reduced horizontal spacing  
* Preserve hierarchy

Mobile:

* Single-column layout  
* Comfortable side padding  
* No horizontal overflow  
* Typography scales down appropriately  
* Navigation becomes a mobile menu

Use consistent vertical spacing between sections.

Do not make every section identical.

Some sections can use:

* Full-width headings  
* Two-column layouts  
* Grid layouts  
* Asymmetric arrangements

This helps create the editorial feel.

---

# **9\. Navigation**

Navigation should remain simple.

Suggested structure:

Promise Adeleye

About  
Work  
Skills  
Contact

The logo/name should link back to the top of the page.

Desktop navigation should be minimal.

Mobile navigation should collapse into a clean menu.

Navigation should support smooth scrolling to sections.

Use a subtle active/hover state.

Avoid a huge sticky navigation bar.

A lightweight sticky/fixed navigation is acceptable if it improves usability.

---

# **10\. Hero Section**

## **Content**

Use the supplied copy:

**Hi, I'm Promise**

**A Product Manager who loves solving problems that matter 😄**

Supporting copy:

> From defining the “why” to shaping the “how”, I aim to build digital experiences that balance user value and business growth.

CTA:

**View my projects**

The CTA should scroll to the Projects section.

---

## **Hero Design**

The hero should occupy a substantial portion of the initial viewport.

The main heading should be visually dominant.

Suggested hierarchy:

Hi, I'm Promise😄

A Product Manager who  
loves solving problems  
that matter

From defining the “why” to shaping  
the “how”, I aim to build digital  
experiences that balance user value  
and business growth.

\[ View my projects → \]

Do not overcrowd the hero.

Do not add:

* Fake metrics  
* Testimonials  
* Generic illustrations  
* Stock photos  
* Floating UI cards  
* Unrequested badges

If a visual element is eventually added, it should support the personal brand rather than compete with the headline.

---

# **11\. About Section**

Section title:

**About Me**

Content:

> I'm an early-career Product Manager with a passion for creating meaningful digital experiences. My journey into product management grew out of my experience learning UI/UX Design, where I became fascinated by user behaviour, needs, research and the ‘why’ behind every design decision.

> Over time, that curiosity evolved into a drive to understand how great products are built from strategy to execution. Today, I’m passionate about understanding users, simplifying complex experiences, aligning business goals and helping teams develop products that make an impact. Through my projects, I've learned to balance user research, data, and cross-functional collaboration to deliver solutions that truly matter.

## **Presentation**

Do not display this as one giant wall of text.

Use an editorial layout that breaks the section into visually digestible portions.

Potential structure:

ABOUT ME

01  
How I got here

\[UI/UX → Product Management story\]

02  
How I think about products

\[Users \+ research \+ data \+  
business goals \+ execution\]

The actual supplied copy should remain the source of truth.

Do not invent biographical details.

---

# **12\. Projects Section**

This is the **most important section of the website**.

Section title:

**Selected Work**

The section should immediately communicate that Promise both **analyzes products** and **builds products**.

Separate the work into two categories.

---

## **12.1 Case Studies**

Label:

**Case Studies**

Projects:

### **Microvest**

Category:

`Product Strategy · Fintech`

Description:

> Strategic analysis and product improvement approach for Microvest, a Nigerian Fintech platform that offers savings and investment solutions.

CTA:

**View case study →**

---

### **Lenco**

Category:

`Product Strategy · Growth`

Description:

> Identified challenges and potential opportunities for Lenco to increase adoption and accelerate growth.

CTA:

**View case study →**

---

### **Keble**

Category:

`Product Analysis · Growth`

Description:

> Examined Keble’s product and highlighted constraints affecting user adoption and growth. Proposed potential fixes to these constraints.

CTA:

**View case study →**

---

### **CNN 60**

Category:

`Product Discovery · Media`

Description:

> Reimagined the news-reading experience by researching a potential short-form news app delivering summaries in fewer than 60 words.

CTA:

**View case study →**

---

### **myMTN NG**

Category:

`Product Research · Mobile`

Description:

> Identified key user pain points and challenges of using the myMTN NG app, with recommendations made to maintain user trust in the app.

CTA:

**View case study →**

---

# **12.2 Built Products**

Label:

**Products I've Built**

These should be visually distinguished from the case studies.

### **Apineer**

Category:

`Fintech · API Discovery`

Description:

> Developed an MVP for a fintech API discovery and comparison platform.

CTA:

**View project →**

---

### **Credit Compass**

Category:

`Fintech · SME Lending`

Description:

> Designed a tool for SMEs to assess their credit readiness before applying for loans, with recommendations to strengthen their financing readiness.

CTA:

**View project →**

---

### **Humore**

Category:

`Employee Experience · SaaS`

Description:

> Developed a minimum viable product (MVP) to help teams track mood trends, provide peer recognition, and safely share feedback to improve engagement and culture.

CTA:

**View project →**

---

# **13\. Project Presentation**

Do not display all eight projects as identical generic cards.

Use an editorial presentation.

Possible desktop pattern:

01

MICROVEST  
Product Strategy · Fintech

Strategic analysis and product  
improvement approach...

                         View case study ↗

Projects can alternate visual alignment or use varying grid proportions while maintaining a consistent system.

Each project should have room for a visual asset.

If screenshots/images are not yet available, create an intentional placeholder area that can later receive project imagery.

Do not use random stock imagery.

---

# **14\. Project Data Architecture**

Store project content separately from components.

Create:

data/projects.ts

The project data structure should contain fields similar to:

id  
title  
type  
category  
description  
ctaLabel  
href  
image  
featured

This allows new projects to be added without rewriting the Projects component.

Use TypeScript types for the project data.

---

# **15\. Project Visuals**

The system should support project imagery but should not require imagery for the initial build.

Create a consistent visual container for each project.

The eventual visuals could include:

* Product screenshots  
* UI mockups  
* Research artifacts  
* Product interfaces  
* Case-study imagery

Do not fabricate screenshots or product interfaces.

Do not use stock photography unless explicitly instructed.

---

# **16\. How I Work / Skills Section**

Do not simply call this section "Skills" if the design allows a better presentation.

Preferred title:

**How I Work**

The purpose is to communicate Promise's product capabilities rather than simply list keywords.

Create four areas:

### **Research**

User interviews, surveys, market research, competitor analysis

### **Product Thinking**

Product roadmapping, understanding user needs, prioritization

### **Product Discovery**

Creating PRDs, user story creation, MVP planning, wireframing

### **Collaboration & Communication**

Stakeholder management, storytelling & presentation, documentation

---

## **Tools**

Display separately:

**Tools I use**

`Figma · Jira · Miro · Google Workspace · Trello · Asana · Canva`

Keep this visually secondary to the core product capabilities.

---

# **17\. Contact Section**

Section should feel like a natural conclusion rather than a generic contact form.

Heading:

**Let's chat\!**

Supporting copy:

> I’m always open to connecting, sharing ideas, or discussing opportunities. Let’s chat\!

Links:

### **Email**

`adeleyepromise76@gmail.com`

### **LinkedIn**

`https://www.linkedin.com/in/promise-adeleye/`

### **Resume**

`https://drive.google.com/file/d/1j7DR604dR0qgWBB1b5ykYyW4MGUx3pwH/view?usp=sharing`

Use appropriate icons where useful.

Email should use a `mailto:` link.

LinkedIn should open the external profile.

Resume should open the provided Google Drive document.

External links should use appropriate security attributes when necessary.

Do not create a contact form unless specifically requested later.

---

# **18\. Footer**

Content:

`© 2026 Promise Adeleye. All rights reserved.`

Keep it minimal.

No unnecessary footer navigation.

---

# **19\. Motion & Interaction**

Motion should feel **subtle and intentional**.

Use Framer Motion or an equivalent lightweight animation approach.

Recommended animations:

### **Page entrance**

Very subtle fade/translate on major sections.

### **Project hover**

On desktop:

* Slight image scale  
* Small arrow movement  
* Subtle title movement

### **Buttons**

Use:

* Small position/opacity change  
* Smooth transition  
* Clear hover state

### **Navigation**

Subtle hover/active indicator.

### **Scroll**

Smooth anchor scrolling.

Do not use:

* Excessive parallax  
* Constant floating elements  
* Large spinning objects  
* Cursor-following effects  
* Dramatic page transitions  
* Excessive stagger animations

Animations should never interfere with reading.

Respect `prefers-reduced-motion`.

---

# **20\. Responsive Requirements**

The website must be designed for:

* Large desktop  
* Desktop  
* Tablet  
* Mobile

Do not simply shrink the desktop design.

### **Mobile priorities**

On mobile:

* Hero typography remains strong but fits comfortably  
* Navigation becomes a menu  
* Projects become single-column  
* About content becomes single-column  
* Skills stack vertically  
* Buttons remain easy to tap  
* No horizontal scrolling  
* Images remain contained  
* Section spacing is reduced but remains generous

Test at approximately:

* 1440px  
* 1280px  
* 1024px  
* 768px  
* 390px  
* 375px

---

# **21\. Accessibility**

The site should follow good accessibility practices.

Requirements:

* Semantic HTML  
* Correct heading hierarchy  
* Accessible navigation  
* Keyboard-accessible interactive elements  
* Visible focus states  
* Sufficient color contrast  
* Descriptive link labels  
* Alt text for meaningful images  
* Decorative images marked appropriately  
* Respect reduced-motion preferences

Do not use clickable `div`s when a button or anchor is appropriate.

---

# **22\. SEO**

Set appropriate metadata.

Title:

**Promise Adeleye — Product Manager**

Description should communicate that Promise is a Product Manager focused on solving meaningful product problems and building digital experiences.

Include appropriate:

* `<title>`  
* Meta description  
* Open Graph metadata  
* Favicon  
* Semantic headings

Do not keyword-stuff the page.

---

# **23\. Technical Stack**

Recommended stack:

**Framework:** Next.js

**Language:** TypeScript

**Styling:** Tailwind CSS

**Animation:** Framer Motion

**Fonts:** Google Fonts / Next.js font optimization

Potential font pairing:

* Instrument Serif  
* Manrope

Use the Next.js font system rather than loading fonts unnecessarily through external CSS.

---

# **24\. Component Architecture**

Suggested structure:

app/  
├── globals.css  
├── layout.tsx  
└── page.tsx

components/  
├── layout/  
│   ├── Navbar.tsx  
│   └── Footer.tsx  
│  
├── sections/  
│   ├── Hero.tsx  
│   ├── About.tsx  
│   ├── Projects.tsx  
│   ├── Skills.tsx  
│   └── Contact.tsx  
│  
└── ui/  
    ├── Button.tsx  
    ├── ProjectCard.tsx  
    └── SectionHeading.tsx

data/  
└── projects.ts

lib/  
└── utils.ts

public/  
├── images/  
└── projects/

Do not over-engineer the project.

This is a portfolio, not a large application.

---

# **25\. Content Rules**

The supplied content is the source of truth.

Cursor must **not invent**:

* Achievements  
* Metrics  
* Testimonials  
* Companies  
* Awards  
* Certifications  
* Job titles  
* Years of experience  
* Client results  
* User numbers  
* Revenue numbers  
* Product statistics

If information is missing, leave a deliberate placeholder or omit the element.

Never fabricate credibility signals.

---

# **26\. Case Study Architecture**

Do not build individual case-study pages during the first implementation unless links/content are already available.

The initial homepage should support links to future case studies.

The architecture should make it easy to add pages later, potentially:

app/  
└── work/  
    └── \[slug\]/  
        └── page.tsx

But do not spend time implementing this during the initial homepage build.

---

# **27\. Performance**

Prioritize:

* Fast initial load  
* Optimized images  
* Next.js image optimization  
* Minimal JavaScript  
* No unnecessary libraries  
* Lazy loading where appropriate  
* Avoiding large animation dependencies beyond what is needed

The visual polish should not come at the expense of performance.

---

# **28\. Design Quality Bar**

The final site should not look like:

> "An AI generated portfolio."

It should look like:

> "A designer and product thinker intentionally created this portfolio."

Before considering a section complete, evaluate:

### **Typography**

Does the hierarchy feel intentional?

### **Spacing**

Does the page breathe?

### **Alignment**

Do elements share consistent visual anchors?

### **Content**

Can someone scan the section quickly?

### **Interaction**

Does motion add meaning?

### **Personality**

Does this feel like Promise rather than a generic template?

### **Restraint**

Is anything on screen that doesn't need to be there?

---

# **29\. Inspiration References**

Use these references as **inspiration for quality and visual direction**, not as templates to reproduce:

* Sam Dickie — [https://www.samdickie.me/](https://www.samdickie.me/)  
* Sewa Adebayo — [https://www.sewaadebayo.com/](https://www.sewaadebayo.com/)  
* Florence — [https://florenceo.framer.website/](https://florenceo.framer.website/)  
* Henrietta — [https://hirehenrietta.lovable.app/](https://hirehenrietta.lovable.app/)

Do not directly copy layouts, branding, illustrations, code, or distinctive visual elements from these sites.

Use them to understand:

* Portfolio hierarchy  
* Project presentation  
* Personal branding  
* Editorial layouts  
* PM portfolio conventions  
* Modern web interaction patterns

---

# **30\. Development Workflow**

Build incrementally.

### **Step 1**

Initialize the Next.js project and establish:

* TypeScript  
* Tailwind  
* Fonts  
* Global styles  
* Design tokens

### **Step 2**

Build:

* Navbar  
* Hero  
* About

### **Step 3**

Build:

* Case Studies  
* Built Products

### **Step 4**

Build:

* How I Work  
* Contact  
* Footer

### **Step 5**

Add:

* Responsive behavior  
* Motion  
* Hover states  
* Mobile navigation

### **Step 6**

Perform:

* Visual QA  
* Accessibility QA  
* Responsive QA  
* Performance QA  
* Link verification

Do not attempt to complete everything in one generated component.

---

# **31\. Definition of Done**

The portfolio is ready for launch when:

* The site works on desktop and mobile  
* All supplied content is correctly represented  
* All navigation works  
* Project CTAs work or have clearly defined temporary destinations  
* Email link works  
* LinkedIn link works  
* Resume link works  
* Typography is consistent  
* Responsive layouts are polished  
* No horizontal overflow exists  
* Animations are subtle and performant  
* Accessibility basics are covered  
* Metadata is configured  
* No fabricated content exists  
* No obvious placeholder content remains  
* The site feels like a custom editorial portfolio rather than an AI-generated template

---

## **Final Design Principle**

The portfolio should tell a simple story:

**Who I am → How I think → What I've analyzed → What I've built → How I work → Let's connect.**

Every visual and interaction should support that story.

The website should make the visitor curious enough to click into the work, not overwhelm them with decoration.

