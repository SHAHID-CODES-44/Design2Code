import React from 'react';
import "./Landing-Page.css";

// Image imports (place your images in: src/components/images/)
import Logo from "./images/logo.png";
import heroImage from "./images/hero-main.png";
import templatePreview from "./images/template-gallery.png";
import partnerBehance from "./images/partner-behance.png";
import partnerDribbble from "./images/partner-dribbble.png";
import partnerGithub from "./images/partner-github.png";
import partnerFigma from "./images/partner-figma.png";
import testimonialDev from "./images/testimonial-developer.png";
import testimonialDesigner from "./images/testimonial-designer.png";
import testimonialStudent from "./images/testimonial-student.png";
import chatbotIllustration from "./images/chatbot-assist.png";

const landingPageStyles = `
/* Global Reset and Variables */
:root {
    --landing-primary-dark: #222;
    --landing-secondary-dark: #333;
    --landing-light-gray: #f5f5f5;
    --landing-text-color: #333;
    --landing-accent-color: #000;
}

#landing-root {
    font-family: 'Inter', sans-serif;
    color: var(--landing-text-color);
    background-color: white;
    box-sizing: border-box;
    min-height: 100vh;
}

/* Utility Classes */
.landing-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.landing-section-padding {
    padding: 5rem 0;
}

.landing-title {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.landing-subtitle {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--landing-text-color);
    margin-bottom: 3rem;
    text-align: center;
}

.landing-text-left-align {
    text-align: left !important;
    font-weight: 600;
}

.landing-placeholder {
    background-color: var(--landing-light-gray);
    border-radius: 1.5rem;
}

.landing-button {
    background-color: var(--landing-accent-color);
    color: white;
    padding: 0.75rem 1.75rem;
    border-radius: 0.75rem;
    font-weight: 600;
    transition: background-color 0.2s;
    cursor: pointer;
    border: none;
}
.landing-button:hover {
    background-color: var(--landing-secondary-dark);
}

/* Generic image fit */
.landing-image-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    display: block;
}

/* Header */
.landing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
}

.landing-logo-block {
    width: 2rem;
    height: 2rem;
    background-color: black;
    border-radius: 0.5rem;
}

/* Hero Section */
.landing-hero-wrapper {
    background-color: var(--landing-light-gray);
    border-radius: 2rem;
    padding: 4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    min-height: 500px;
    margin-bottom: 5rem;
}

.landing-hero-content {
    max-width: 500px;
}

.landing-hero-graphic {
    width: 45%;
    min-width: 250px;
    height: 400px;
    background-color: var(--landing-primary-dark);
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
}
/* Optional abstract overlay, still kept */
.landing-hero-graphic::before,
.landing-hero-graphic::after {
    content: '';
    position: absolute;
    background-color: #333;
    border-radius: 50%;
    opacity: 0.5;
}
.landing-hero-graphic::before {
    width: 250px;
    height: 250px;
    top: 50px;
    left: 50px;
    transform: rotate(45deg);
}
.landing-hero-graphic::after {
    width: 200px;
    height: 200px;
    bottom: -50px;
    right: -50px;
    background-color: #555;
}

/* Feature 1: Templates */
.landing-templates-layout {
    display: flex;
    gap: 4rem;
    align-items: center;
    margin-bottom: 5rem;
}

.landing-templates-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex-shrink: 0;
}

.landing-circle-placeholder {
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--landing-light-gray);
    border-radius: 50%;
}

.landing-templates-right {
    flex-grow: 1;
}
.landing-templates-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 2rem;
}
.landing-large-placeholder {
    width: 100%;
    height: 300px;
    background-color: var(--landing-light-gray);
    border-radius: 1.5rem;
    overflow: hidden;
}

/* Feature 2: Explanation */
.landing-text-block {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 4rem;
}

/* Partners Section */
.landing-partners-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 3rem 0;
}
.landing-partner-circle {
    width: 8rem;
    height: 8rem;
    background-color: var(--landing-light-gray);
    border-radius: 50%;
    overflow: hidden;
}

/* Testimonials Section */
.landing-testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding-top: 2rem;
}
.landing-testimonial-card {
    height: 250px;
    background-color: var(--landing-light-gray);
    border-radius: 1.5rem;
    overflow: hidden;
}

/* CTA/Chatbot Section */
.landing-cta-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding-top: 5rem;
}
.landing-cta-content {
    max-width: 500px;
}
.landing-cta-graphic {
    width: 350px;
    height: 350px;
    background-color: var(--landing-light-gray);
    border-radius: 2rem;
    flex-shrink: 0;
    overflow: hidden;
}

/* Footer */
.landing-footer {
    background-color: var(--landing-light-gray);
    margin-top: 5rem;
    padding: 3rem 0 2rem;
}
.landing-footer-layout {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}
.landing-footer-brand {
    max-width: 300px;
}
.landing-footer-links-group {
    display: flex;
    gap: 5rem;
}
.landing-footer-links h4 {
    font-weight: 700;
    margin-bottom: 1rem;
}
.landing-footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.landing-footer-links li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
}
.landing-footer-links li:hover {
    text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .landing-hero-wrapper {
        flex-direction: column;
        text-align: center;
    }
    .landing-hero-content {
        max-width: 100%;
    }
    .landing-hero-graphic {
        width: 100%;
        height: 300px;
    }

    .landing-templates-layout {
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
    }
    .landing-templates-left {
        flex-direction: row;
        gap: 1rem;
    }
    .landing-templates-title {
        font-size: 2.5rem;
    }

    .landing-testimonials-grid {
        grid-template-columns: 1fr;
    }

    .landing-cta-wrapper {
        flex-direction: column-reverse;
        text-align: center;
    }
    .landing-cta-graphic {
        width: 100%;
        max-width: 350px;
        height: 250px;
    }
}

@media (max-width: 768px) {
    .landing-section-padding {
        padding: 3rem 0;
    }
    .landing-title {
        font-size: 2rem;
    }
    .landing-subtitle {
        font-size: 1.25rem;
    }
    .landing-partners-grid {
        flex-wrap: wrap;
        gap: 1rem;
    }
    .landing-partner-circle {
        width: 6rem;
        height: 6rem;
    }
    .landing-footer-layout {
        flex-direction: column;
        gap: 3rem;
    }
    .landing-footer-links-group {
        justify-content: space-between;
    }
}
`;

const Header = () => (
    <div className="landing-header landing-container">
<img src={Logo} alt="Logo" />
         <div className="landing-nav">
            <a href="/https://linkedin.com"></a><p>Follow Us</p>
            <a href="/Contact"></a><p>Contact</p>
            <a href="/Auth"></a><p>Login</p>
            <a href="/Auth"></a><p>Signup</p>
            <a href="/Categories"></a><p>Explore More</p>
        </div>
        <a href="/Auth"><button className="landing-button">Get in</button></a>
    </div>
);

const HeroSection = () => (
    <div className="landing-container">
        <div className="landing-hero-wrapper">
            <div className="landing-hero-content">
                <h1 className="landing-title" id="landing-hero-title">Welcome</h1>
                <p>
                    Digital design tools built for every domain and skill level.
                    Explore beautifully crafted designs across Figma, code-based workflows, and no-code builders. Whether you're a beginner or a seasoned creator, you’ll find templates, layouts, and project ideas that match your goals. Get customized projects with smart filters, intelligent recommendations, and guided steps that help you build faster and better.
                    <br />
                    <br />
                    Our platform brings everything into one place — development-ready components, visual UI assets, and interactive previews. Instead of hunting through multiple websites, you get instant access to curated designs that fit your industry, style, and skill level. Each resource is structured to help you learn, adapt, and publish with ease.
                    <br />
                    <br />
                    From developers shaping their next React portfolio, to designers experimenting with new layouts, to students building academic projects — we support every type of creator. With step-by-step guidance, clear documentation, and helpful automation, you can go from concept to completion confidently.
                </p>
                <a href="/Auth"><button className="landing-button" style={{ marginTop: '1.5rem' }}>Explore</button></a>
            </div>

            {/* Hero image inside abstract container */}
            <div className="landing-hero-graphic">
                <img
                    src={heroImage}
                    alt="Hero portfolio preview"
                    className="landing-image-cover"
                />
            </div>
        </div>
    </div>
);

const TemplatesSection = () => (
    <div className="landing-section-padding landing-container">
        <div className="landing-templates-layout">
            <div className="landing-templates-left">
                {/* Placeholder circles on the left (could be icon images later) */}
                <div className="landing-circle-placeholder" id="landing-circle-1"></div>
                <div className="landing-circle-placeholder" id="landing-circle-2"></div>
                <div className="landing-circle-placeholder" id="landing-circle-3"></div>
                <div className="landing-circle-placeholder" id="landing-circle-4"></div>
            </div>
            <div className="landing-templates-right">
                <h2 className="landing-templates-title">
                    Top Portfolio Templates to Kickstart Your Online Presence
                </h2>
                {/* Template gallery preview */}
                <div className="landing-large-placeholder" id="landing-template-preview">
                    <img
                        src={templatePreview}
                        alt="Template gallery preview"
                        className="landing-image-cover"
                    />
                </div>
            </div>
        </div>

        <div className="landing-text-block" id="landing-text-info">
            <h3 className="landing-subtitle landing-text-left-align">We got you!</h3>
            <p style={{ marginBottom: '1rem' }}>
                Looking to build or refresh your portfolio? This collection highlights how creators—ranging from developers to designers—present their work, tell their stories, and build trust with their audience. Explore how different professionals structure their pages, communicate their strengths, and visually express their identity. Use these examples for layout ideas, section flow, content style, and inspiration to shape your own site with confidence.
<br />
<br />
                A strong portfolio showcases your best work, keeps navigation simple, and tells an impactful story about who you are and what you can do. Before you begin, outline your key projects, results, and call-to-actions to make your portfolio work effectively for you. Study how others have taken this journey, understand what makes their pages stand out, and apply those learnings to attract the right opportunities.
            </p>
        </div>
    </div>
);

const PartnersSection = () => (
    <div className="landing-section-padding landing-container">
        <h3 className="landing-subtitle">Our Partners</h3>
        <div className="landing-partners-grid" id="landing-partners">
            {/* Partner Logos – you can map them later if you want */}
            <div className="landing-partner-circle">
                <img
                    src={partnerBehance}
                    alt="Behance partner logo"
                    className="landing-image-cover"
                />
            </div>
            <div className="landing-partner-circle">
                <img
                    src={partnerDribbble}
                    alt="Dribbble partner logo"
                    className="landing-image-cover"
                />
            </div>
            <div className="landing-partner-circle">
                <img
                    src={partnerGithub}
                    alt="GitHub partner logo"
                    className="landing-image-cover"
                />
            </div>
            <div className="landing-partner-circle">
                <img
                    src={partnerFigma}
                    alt="Figma partner logo"
                    className="landing-image-cover"
                />
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => (
    <div className="landing-section-padding landing-container" style={{ paddingTop: '0' }}>
        <h3 className="landing-subtitle">Testimonials</h3>
        <div className="landing-testimonials-grid" id="landing-testimonials">
            <div className="landing-testimonial-card" id="landing-testimonial-1">
                <img
                    src={testimonialDev}
                    alt="Developer testimonial"
                    className="landing-image-cover"
                />
            </div>
            <div className="landing-testimonial-card" id="landing-testimonial-2">
                <img
                    src={testimonialDesigner}
                    alt="Designer testimonial"
                    className="landing-image-cover"
                />
            </div>
            <div className="landing-testimonial-card" id="landing-testimonial-3">
                <img
                    src={testimonialStudent}
                    alt="Student testimonial"
                    className="landing-image-cover"
                />
            </div>
        </div>
    </div>
);

const CTASection = () => (
    <div className="landing-section-padding landing-container" style={{ paddingTop: '0' }}>
        <div className="landing-cta-wrapper">
            <div className="landing-cta-content">
                <h2 className="landing-title">Find instantly with chatbot help</h2>
                <p style={{ marginBottom: '1.5rem' }}>
                    Not sure where to start? Let our chatbot pick the perfect template for you.
                </p>
                <a href="/Auth"><button className="landing-button">Signup</button></a>
            </div>
            {/* Chatbot / assistant illustration */}
            <div className="landing-cta-graphic" id="landing-cta-image">
                <img
                    src={chatbotIllustration}
                    alt="Chatbot assisting with portfolio selection"
                    className="landing-image-cover"
                />
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer className="landing-footer">
        <div className="landing-container landing-footer-layout">
            <div className="landing-footer-brand">
                <div className="landing-logo-block" style={{ marginBottom: '1rem' }}></div>
                <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Portfolio Builder Hub</p>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    Build your perfect portfolio with smart templates, filters, recommendations and
                    guided steps.
                </p>
            </div>

            <div className="landing-footer-links-group">
                <div className="landing-footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <a href="/About"><li>About</li></a>
                        <a href="/Testimonials"><li>Testimonials</li></a>
                        <a href="/Auth"><li>Login</li></a>
                        <a href="Dashboard"><li>Dashboard</li></a>
                    </ul>
                </div>
                <div className="landing-footer-links">
                    <h4>Support</h4>
                    <ul>
                        <a href="/Contact"><li>Help Center</li></a>
                        <a href="/Contact"><li>Contact</li></a>
                        <a href="/About"><li>Terms & Privacy</li></a>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default function App() {
    return (
        <div id="landing-root">
            {/* Inject the CSS styles directly */}
            <style>{landingPageStyles}</style>

            <Header />
            <main>
                <HeroSection />
                <TemplatesSection />
                <PartnersSection />
                <TestimonialsSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
