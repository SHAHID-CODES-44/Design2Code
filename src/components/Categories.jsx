import React, { useState } from 'react';
// Switched to lucide-react icons for environment compatibility
import { Globe, Layers, Zap, Star, ChevronDown, Mail, Send, Figma, Code } from 'lucide-react'; 
import './Categories.css'; 

// --- Data Definitions ---
const categories = [
    {
        name: "Web Development",
        description: "Focus on front-end frameworks, responsive design, and performance optimization.",
        icon: Globe, 
        type: "Website",
        difficulty: "Intermediate"
    },
    {
        name: "UI/UX Design Systems",
        description: "Master component libraries, interaction design, and user flow mapping.",
        icon: Layers, 
        type: "UI/UX Design",
        difficulty: "Advanced"
    },
    {
        name: "3D & Motion Graphics",
        description: "Explore portfolio projects in Blender, Cinema 4D, and Lottie animations.",
        icon: Zap, 
        type: "Other",
        difficulty: "Advanced"
    },
    {
        name: "Technical Writing",
        description: "Create documentation, case studies, and clear explanations for complex concepts.",
        icon: Star, 
        type: "Other",
        difficulty: "Beginner"
    }
    // Add more categories here
];

const CategoryCard = ({ name, description, Icon }) => {
    return (
        <div className="card">
            <div className="card-icon-wrapper">
                <Icon className="card-icon" />
            </div>
            <h3 className="card-name">{name}</h3>
            <p className="card-description">{description}</p>

            {/* Action Buttons for Templates */}
            <div className="card-actions">
                {/* Link for Figma Design (Template-1) */}
                <a href="/Template1" className="action-button figma-button">
                   <button id='categ-btns'>FIGMA-DESIGNs</button>
                </a>
                {/* Link for React Code (Template-2) */}
                <a href="/Template02" className="action-button react-button">
                   <button id='categ-btns'>REACT-CODES</button>
                </a>
            </div>

        </div>
    );
};

const FilterDropdown = ({ label, options, selected, setSelected }) => {
    return (
        <div className="dropdown">
            <label className="dropdown-label">{label}</label>
            <div className="dropdown-select-wrapper">
                <select 
                    value={selected} 
                    onChange={(e) => setSelected(e.target.value)}
                    className="dropdown-select"
                >
                    <option value="">All {label.split(' ')[0]}</option>
                    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <ChevronDown className="dropdown-icon" />
            </div>
        </div>
    );
};

// --- Main Page Component ---
const CategoryPage = () => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [difficultyFilter, setDifficultyFilter] = useState('');

    const filteredCategories = categories.filter(cat => {
        const matchesCategory = categoryFilter ? cat.type === categoryFilter : true;
        const matchesDifficulty = difficultyFilter ? cat.difficulty === difficultyFilter : true;
        return matchesCategory && matchesDifficulty;
    });

    return (
        <div className="page-wrapper">
            {/* Header Section */}
            <header className="header-section">
                <div className="header-content">
                    <h1 className="page-title">Explore Categories</h1>
                    <p className="page-subtitle">
                        Choose your path and find the perfect portfolio direction.
                    </p>
                </div>
            </header>

            {/* Inspirational Quote */}
            <div className="quote-section">
                <blockquote>“Build smarter, not harder.”</blockquote>
                <div className="soft-separator"></div>
            </div>

            {/* Filter Bar */}
            <section className="filter-bar-section">
                <div className="filter-bar-content">
                    <FilterDropdown
                        label="Category Type"
                        options={["Website", "UI/UX Design", "Other"]}
                        selected={categoryFilter}
                        setSelected={setCategoryFilter}
                    />
                    <FilterDropdown
                        label="Difficulty"
                        options={["Beginner", "Intermediate", "Advanced"]}
                        selected={difficultyFilter}
                        setSelected={setDifficultyFilter}
                    />
                </div>
            </section>

            {/* Category Cards Grid */}
            <section className="category-grid-section">
                <div className="category-grid">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((cat, index) => (
                            <CategoryCard
                                key={index}
                                name={cat.name}
                                description={cat.description}
                                Icon={cat.icon}
                            />
                        ))
                    ) : (
                        <p className="no-results">No categories match your current filters. Try adjusting your selection.</p>
                    )}
                </div>
            </section>
            
            <div className="soft-separator" style={{ margin: '4rem 0' }}></div>

            {/* Feedback Form */}
            <section className="feedback-section">
                <h2 className="section-title">Have a Category Idea?</h2>
                <p className="section-subtitle">Help us grow the Hub by suggesting new portfolio directions or features.</p>

                <form className="feedback-form">
                    <div className="form-group">
                        <label htmlFor="feedback-email">Your Email (Optional)</label>
                        <div className="input-with-icon">
                            <Mail />
                            <input type="email" id="feedback-email" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="feedback-text">Your Suggestion</label>
                        <textarea id="feedback-text" rows="4" placeholder="I think a 'Data Visualization' category would be great..."></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        <Send /> Send Suggestion
                    </button>
                </form>
            </section>

        </div>
    );
};

export default CategoryPage;
