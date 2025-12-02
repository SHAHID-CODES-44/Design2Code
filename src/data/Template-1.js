// figma-portfolio-templates.js
// An array of Figma portfolio templates (collected from the links you provided)
// Each item contains: id, name, figmaLink, rating (1-5), explanation, tags, recommendedFor, dateAdded

const figmaPortfolioTemplates = [
  {
    id: 1,
    name: "portfolio-design",
    figmaLink: "https://www.figma.com/community/file/1182197835889504018/portfolio-design",
    rating: 4.5,
    explanation: "A clean, modern portfolio layout with strong visual hierarchy — great for showcasing case studies and visuals.",
    tags: ["modern", "case-study", "visual"],
    recommendedFor: ["UI/UX designers", "visual designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 2,
    name: "picto-personal-portfolio-free-template-community",
    figmaLink: "https://www.figma.com/community/file/1170206889562959306/picto-personal-portfolio-free-template-community",
    rating: 4.2,
    explanation: "Lightweight personal portfolio template — easy to customize and adapt for freelancers.",
    tags: ["personal", "freelance", "minimal"],
    recommendedFor: ["freelancers", "students"],
    dateAdded: "2025-12-02"
  },
  {
    id: 3,
    name: "space-themed-portfolio",
    figmaLink: "https://www.figma.com/community/file/1192903581929005722/space-themed-portfolio",
    rating: 4.0,
    explanation: "Eye-catching space-themed visuals — excellent if you want a creative or themed portfolio.",
    tags: ["themed", "creative", "visual"],
    recommendedFor: ["illustrators", "creative developers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 4,
    name: "portfolio-template-883766363000361657",
    figmaLink: "https://www.figma.com/community/file/883766363000361657/portfolio-template",
    rating: 4.1,
    explanation: "A balanced template with sections for projects, about, and contact — solid general-purpose choice.",
    tags: ["balanced", "general"],
    recommendedFor: ["developers", "designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 5,
    name: "portfolio-template-1092351809477351862",
    figmaLink: "https://www.figma.com/community/file/1092351809477351862/portfolio-template",
    rating: 4.0,
    explanation: "Flexible template with attention to typographic scale — works well for content-heavy portfolios.",
    tags: ["typography", "content"],
    recommendedFor: ["writers", "designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 6,
    name: "free-ux-ui-design-portfolio",
    figmaLink: "https://www.figma.com/community/file/1304086424732545653/free-ux-ui-design-portfolio",
    rating: 4.6,
    explanation: "Specifically built for UX/UI case studies — sections for process, wireframes, and outcomes.",
    tags: ["UX", "UI", "case-study"],
    recommendedFor: ["UX designers", "product designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 7,
    name: "portfolio-1079379594135318786",
    figmaLink: "https://www.figma.com/community/file/1079379594135318786/portfolio",
    rating: 3.9,
    explanation: "Simple portfolio scaffold — quick to adapt but may need more polishing for production use.",
    tags: ["simple", "scaffold"],
    recommendedFor: ["students", "quick prototypes"],
    dateAdded: "2025-12-02"
  },
  {
    id: 8,
    name: "portfolio-1164933568884615740",
    figmaLink: "https://www.figma.com/community/file/1164933568884615740/portfolio",
    rating: 4.3,
    explanation: "A polished layout with good use of white space and grid — professional-looking by default.",
    tags: ["professional", "grid"],
    recommendedFor: ["designers", "developers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 9,
    name: "portfolio-tomasz-gajda",
    figmaLink: "https://www.figma.com/community/file/897605510384968096/portfolio-tomasz-gajda",
    rating: 4.4,
    explanation: "A designer-focused portfolio with strong visual storytelling and project highlights.",
    tags: ["designer", "storytelling"],
    recommendedFor: ["UI designers", "visual storytellers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 10,
    name: "portfolio-ui-web-mobile",
    figmaLink: "https://www.figma.com/community/file/882879599442878081/portfolio-ui-web-mobile",
    rating: 4.1,
    explanation: "Responsive-focused template with UI components for web and mobile previews.",
    tags: ["responsive", "ui-kit"],
    recommendedFor: ["frontend developers", "mobile designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 11,
    name: "portfolio-template-1063415783897538948",
    figmaLink: "https://www.figma.com/community/file/1063415783897538948/portfolio-template",
    rating: 3.8,
    explanation: "Good starting point but may require customization to stand out.",
    tags: ["starter", "customize"],
    recommendedFor: ["beginners"],
    dateAdded: "2025-12-02"
  },
  {
    id: 12,
    name: "digital-agency-website-freebie",
    figmaLink: "https://www.figma.com/community/file/1058842196634115002/digital-agency-website-freebie",
    rating: 4.2,
    explanation: "Agency-style layout with service pages and team sections — heavier but feature-rich.",
    tags: ["agency", "services"],
    recommendedFor: ["agencies", "freelance teams"],
    dateAdded: "2025-12-02"
  },
  {
    id: 13,
    name: "web-portfolio-design",
    figmaLink: "https://www.figma.com/community/file/1244911410692501170/web-portfolio-design",
    rating: 4.0,
    explanation: "A web-first portfolio layout — balanced visuals and content areas for case studies.",
    tags: ["web-first", "portfolio"],
    recommendedFor: ["developers", "designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 14,
    name: "portfolio-for-developers",
    figmaLink: "https://www.figma.com/community/file/1311309815091555685/portfolio-for-developers",
    rating: 4.5,
    explanation: "Tailored for developer portfolios — sections for projects, code links, and tech stack.",
    tags: ["developer", "tech-stack", "projects"],
    recommendedFor: ["web developers", "software engineers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 15,
    name: "crafting-a-dynamic-portfolio-website-with-figma",
    figmaLink: "https://www.figma.com/community/file/1315261978222625227/crafting-a-dynamic-portfolio-website-with-figma",
    rating: 4.3,
    explanation: "A guide-style template that emphasizes interaction and dynamic project displays.",
    tags: ["interactive", "guide"],
    recommendedFor: ["frontend devs", "interactive designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 16,
    name: "developer-portfolio-landing-page-template",
    figmaLink: "https://www.figma.com/community/file/1358480804111249444/developer-portfolio-landing-page-template",
    rating: 4.4,
    explanation: "Focused landing page for developers — ideal as a compact single-page resume site.",
    tags: ["landing", "developer"],
    recommendedFor: ["developers", "job seekers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 17,
    name: "personal-portfolio-blog-cv-website",
    figmaLink: "https://www.figma.com/community/file/1156621744765683500/personal-portfolio-blog-cv-website",
    rating: 4.0,
    explanation: "Combines portfolio with blog and CV sections — good if you want to publish writing alongside projects.",
    tags: ["blog", "cv", "portfolio"],
    recommendedFor: ["content creators", "designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 18,
    name: "personal-website-portfolio-landing-page",
    figmaLink: "https://www.figma.com/community/file/1367147937202987176/personal-website-portfolio-landing-page",
    rating: 4.1,
    explanation: "A modern single-page layout with clear CTAs and project highlights.",
    tags: ["single-page", "CTA"],
    recommendedFor: ["job hunters", "freelancers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 19,
    name: "portfolio-design-template-1316775539704155787",
    figmaLink: "https://www.figma.com/community/file/1316775539704155787/portfolio-design-template",
    rating: 4.0,
    explanation: "A flexible template good for both visual portfolios and case studies.",
    tags: ["flexible", "case-study"],
    recommendedFor: ["designers", "photographers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 20,
    name: "portfolio-website-design",
    figmaLink: "https://www.figma.com/community/file/1319634075055654983/portfolio-website-design",
    rating: 4.2,
    explanation: "Polished website design with sections that map well to a static site generator.",
    tags: ["static-site", "polished"],
    recommendedFor: ["developers", "designers"],
    dateAdded: "2025-12-02"
  },
  {
    id: 21,
    name: "vigads-com-br",
    figmaLink: "https://www.figma.com/community/file/1347178160959502491/vigads-com-br",
    rating: 3.9,
    explanation: "A branded layout that may require permission to reuse branding elements; best as inspiration.",
    tags: ["branded", "inspiration"],
    recommendedFor: ["designers looking for ideas"],
    dateAdded: "2025-12-02"
  },
  {
    id: 22,
    name: "juan-simmons-portfolio-website",
    figmaLink: "https://www.figma.com/community/file/1382880241274886758/juan-simmons-portfolio-website",
    rating: 4.3,
    explanation: "Personal portfolio example with a designer's voice — great as a starting point to personalize.",
    tags: ["personal", "example"],
    recommendedFor: ["designers", "creatives"],
    dateAdded: "2025-12-02"
  }
];

export default figmaPortfolioTemplates;

// Usage example:
// import templates from './figma-portfolio-templates.js';
// templates.forEach(t => console.log(t.name, t.figmaLink));
