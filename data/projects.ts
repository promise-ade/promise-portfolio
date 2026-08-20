export type ProjectType = "case-study" | "built-product";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  type: ProjectType;
  category: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: ProjectImage;
  images?: ProjectImage[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "microvest",
    title: "Microvest",
    type: "case-study",
    category: "Product Strategy · Fintech",
    description:
      "Strategic analysis and product improvement approach for Microvest, a Nigerian Fintech platform that offers savings and investment solutions.",
    ctaLabel: "View case study",
    href: "https://drive.google.com/file/d/18Xkus_CHKfJ_zdXavNOxll5hxiB8EJzz/view?usp=sharing",
    image: {
      src: "/projects/microvest/screenshot.png",
      alt: "Microvest case study cover with product analysis and mobile app mockups",
      width: 4452,
      height: 2310,
    },
    featured: true,
  },
  {
    id: "lenco",
    title: "Lenco",
    type: "case-study",
    category: "Product Strategy · Growth",
    description:
      "Identified challenges and potential opportunities for Lenco to increase adoption and accelerate growth.",
    ctaLabel: "View case study",
    href: "https://drive.google.com/file/d/165ZVruE6pF5hbGpO2skY3yX5khrGf7Y5/view?usp=sharing",
    image: {
      src: "/projects/lenco/screenshot.png",
      alt: "Lenco product insights brief cover with business banking app mockups",
      width: 1920,
      height: 1080,
    },
    featured: true,
  },
  {
    id: "keble",
    title: "Keble",
    type: "case-study",
    category: "Product Analysis · Growth",
    description:
      "Examined Keble’s product and highlighted constraints affecting user adoption and growth. Proposed potential fixes to these constraints.",
    ctaLabel: "View case study",
    href: "https://drive.google.com/file/d/1DWvwJB7uO7Wl04RjkySIT8krkNbC731w/view?usp=drive_link",
    image: {
      src: "/projects/keble/screenshot.png",
      alt: "Keble product insights brief cover with overlapping mobile app screens",
      width: 1920,
      height: 1080,
    },
    featured: true,
  },
  {
    id: "cnn-60",
    title: "CNN 60",
    type: "case-study",
    category: "Product Discovery · Media",
    description:
      "Reimagined the news-reading experience by researching a potential short-form news app delivering summaries in fewer than 60 words.",
    ctaLabel: "View case study",
    href: "https://drive.google.com/file/d/1GbY_f7k70fFPYYKSEZ0J3LeI4IKmUG2N/view?usp=sharing",
    image: {
      src: "/projects/cnn-60/screenshot.png",
      alt: "CNN 60 product management research report cover",
      width: 1897,
      height: 978,
    },
    featured: true,
  },
  {
    id: "mymtn-ng",
    title: "myMTN NG",
    type: "case-study",
    category: "Product Research · Mobile",
    description:
      "Identified key user pain points and challenges of using the myMTN NG app, with recommendations made to maintain user trust in the app.",
    ctaLabel: "View case study",
    href: "https://drive.google.com/file/d/1ixlQ-kKfwoDa9SlOrF0iBrzeOK8si3fX/view?usp=drive_link",
    image: {
      src: "/projects/mymtn/screenshot.png",
      alt: "myMTN NG app case study cover with mobile interface screens",
      width: 960,
      height: 540,
    },
    featured: true,
  },
  {
    id: "apineer",
    title: "Apineer",
    type: "built-product",
    category: "Fintech · API Discovery",
    description:
      "Developed an MVP for a fintech API discovery and comparison platform.",
    ctaLabel: "View project",
    href: "https://www.apineer.xyz/",
    image: {
      src: "/projects/apineer/screenshot.png",
      alt: "Apineer fintech API discovery platform landing page",
      width: 3801,
      height: 1757,
    },
  },
  {
    id: "credit-compass",
    title: "Credit Compass",
    type: "built-product",
    category: "Fintech · SME Lending",
    description:
      "Designed a tool for SMEs to assess their credit readiness before applying for loans, with recommendations to strengthen their financing readiness.",
    ctaLabel: "View project",
    href: "https://creditcompass.xyz/",
    image: {
      src: "/projects/credit-compass/screenshot.png",
      alt: "Credit Compass landing page for SME credit readiness assessment",
      width: 3797,
      height: 1761,
    },
  },
  {
    id: "humore",
    title: "Humore",
    type: "built-product",
    category: "Employee Experience · SaaS",
    description:
      "Developed a minimum viable product (MVP) to help teams track mood trends, provide peer recognition, and safely share feedback to improve engagement and culture.",
    ctaLabel: "View project",
    href: "https://gethumore.com/",
    image: {
      src: "/projects/humore/screenshot.png",
      alt: "Humore employee experience platform landing page",
      width: 1521,
      height: 767,
    },
  },
];

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((project) => project.type === type);
}
