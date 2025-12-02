import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ExternalLink, FileText } from "lucide-react";
import './Template-2.css';

// Sample templates data with Google Drive links
const templates = [
  {
    id: 1,
    name: "Modern Portfolio Template",
    figmaLink: "https://figma.com/template-1",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.8,
    details: {
      size: "2.3 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "A sleek, modern portfolio template with smooth animations and responsive design.",
    tags: ["portfolio", "modern", "animated"],
    dateAdded: "2025-12-02"
  },
  {
    id: 2,
    name: "Business Landing Page",
    figmaLink: "https://figma.com/template-2",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.6,
    details: {
      size: "1.8 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Professional business landing page with contact forms and service sections.",
    tags: ["business", "landing", "professional"],
    dateAdded: "2025-11-28"
  },
  {
    id: 3,
    name: "E-commerce Dashboard",
    figmaLink: "https://figma.com/template-3",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.9,
    details: {
      size: "3.1 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Complete e-commerce admin dashboard with analytics and product management.",
    tags: ["dashboard", "ecommerce", "admin"],
    dateAdded: "2025-11-25"
  },
  {
    id: 4,
    name: "Blog Theme Template",
    figmaLink: "https://figma.com/template-4",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.7,
    details: {
      size: "1.5 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Clean and minimalist blog template with markdown support and dark mode.",
    tags: ["blog", "minimal", "content"],
    dateAdded: "2025-11-20"
  },
  {
    id: 5,
    name: "Restaurant Website",
    figmaLink: "https://figma.com/template-5",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.5,
    details: {
      size: "2.7 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Elegant restaurant template with menu display and reservation system.",
    tags: ["restaurant", "food", "booking"],
    dateAdded: "2025-11-15"
  },
  {
    id: 6,
    name: "Real Estate Listing",
    figmaLink: "https://figma.com/template-6",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.8,
    details: {
      size: "2.9 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Property listing template with search filters and map integration.",
    tags: ["realestate", "listing", "map"],
    dateAdded: "2025-11-10"
  },
  {
    id: 7,
    name: "SaaS Landing Page",
    figmaLink: "https://figma.com/template-7",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.9,
    details: {
      size: "2.1 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Modern SaaS landing page with pricing tables and feature showcases.",
    tags: ["saas", "landing", "pricing"],
    dateAdded: "2025-11-05"
  },
  {
    id: 8,
    name: "Photography Portfolio",
    figmaLink: "https://figma.com/template-8",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.7,
    details: {
      size: "3.5 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Stunning photography portfolio with gallery grid and lightbox.",
    tags: ["photography", "gallery", "visual"],
    dateAdded: "2025-10-30"
  },
  {
    id: 9,
    name: "Fitness App Template",
    figmaLink: "https://figma.com/template-9",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.6,
    details: {
      size: "2.4 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Fitness tracking app template with workout plans and progress charts.",
    tags: ["fitness", "health", "tracking"],
    dateAdded: "2025-10-25"
  },
  {
    id: 10,
    name: "Education Platform",
    figmaLink: "https://figma.com/template-10",
    driveLink: "https://drive.google.com/drive/folders/1p2h-6_raqqS0eP6ikpoxF8Mul1m-tgdt?usp=drive_link",
    rating: 4.8,
    details: {
      size: "3.2 MB",
      files: ["package.json", "src/", "public/", "README.md"],
      reactVersion: "18.2.0"
    },
    explanation: "Online learning platform with course management and video player.",
    tags: ["education", "learning", "courses"],
    dateAdded: "2025-10-20"
  }
];

export default function TemplateDetailPage() {
  const { id } = useParams();
  const templateId = Number(id) || 1;
  const template = templates.find((t) => t.id === templateId) || templates[0];

  const [downloadError, setDownloadError] = useState(null);

  useEffect(() => {
    setDownloadError(null);
  }, [templateId]);

  const handleDriveClick = () => {
    if (!template.driveLink || template.driveLink === "") {
      setDownloadError("Google Drive link not yet added for this template.");
      return;
    }
    window.open(template.driveLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="template-detail-root">
      <header className="template-header">
        <Link to="/" className="back-link">← Back to Templates</Link>
        <h1 className="template-title">{template.name}</h1>
      </header>

      <main className="template-main">
        {/* Meta Section */}
        <section className="template-meta">
          <p className="template-explanation">{template.explanation}</p>

          <div className="template-rating" aria-label={`Rating ${template.rating}`}>
            <Star className="rating-icon" size={20} />
            <strong>{template.rating}</strong>
          </div>

          <div className="template-tags">
            {template.tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>

          <div className="template-links">
            <a 
              className="figma-link" 
              href={template.figmaLink} 
              target="_blank" 
              rel="noreferrer"
            >
              <FileText size={18} /> See More
            </a>

            <button
              className="drive-button"
              onClick={handleDriveClick}
            >
              <ExternalLink size={18} /> Go to Drive
            </button>
          </div>

          {downloadError && (
            <div className="error-message">{downloadError}</div>
          )}
        </section>

        {/* Details Box */}
        <section className="template-details">
          <h2>Template Details</h2>
          <ul className="details-list">
            <li><strong>Date Added:</strong> {template.dateAdded || "—"}</li>
            <li><strong>Size:</strong> {template.details?.size || "—"}</li>
            <li><strong>Files:</strong> {(template.details?.files || []).join(", ") || "—"}</li>
            <li><strong>React Version:</strong> {template.details?.reactVersion || "—"}</li>
          </ul>
        </section>

        {/* Setup Guide */}
        <section className="setup-guide">
          <h2>Setup Guide</h2>
          <ol className="setup-steps">
            <li>
              <strong>Download & Unzip</strong> — Extract the downloaded archive to your preferred location.
            </li>
            <li>
              <strong>Install Dependencies</strong> — Open terminal in the project root:
              <pre><code>npm install</code></pre>
            </li>
            <li>
              <strong>Start Development Server</strong>:
              <pre><code>npm start</code></pre>
            </li>
            <li>
              <strong>Build for Production</strong>:
              <pre><code>npm run build</code></pre>
            </li>
            <li>
              <strong>Deploy</strong> — Upload the build folder to your hosting service.
            </li>
          </ol>

          <p className="setup-note">
            <strong>Note:</strong> If using Vite or Next.js, commands may differ. Check the README.md file included in the template.
          </p>
        </section>

        {/* Quick Tips */}
        <aside className="quick-tips">
          <h3>Quick Tips</h3>
          <ul>
            <li>Always check the README.md file for specific instructions</li>
            <li>Replace all placeholder content before deployment</li>
            <li>Configure environment variables in .env if needed</li>
            <li>Test responsive design on multiple devices</li>
            <li>Run npm audit to check for security vulnerabilities</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}