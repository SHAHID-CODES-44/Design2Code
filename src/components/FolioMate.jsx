import { useState, useRef, useEffect } from 'react';
import "./FolioMate.css";

const helpTopics = [
  {
    id: "design",
    title: "Design & Template Suggestions",
    description: "Get help choosing a portfolio template or improving the design.",
    icon: "🎨",
    questions: [
      {
        id: "design-beginner",
        label: "I'm a beginner in React. Which type of template should I start with?",
        answer: "Start with a simple single-page portfolio template that has clear sections like About, Projects, and Contact. Look for templates with minimal components and straightforward file structures. Avoid templates with complex routing or state management at first. Our 'Minimal Portfolio' and 'Clean Developer' templates are great beginner choices.",
      },
      {
        id: "design-dark-light",
        label: "I want a dark theme with a strong hero section. What should I look for?",
        answer: "Look for templates tagged with 'dark mode' or 'dark theme' in the preview gallery. Pay attention to templates that feature large hero sections with bold typography and animated elements. The 'Night Mode Pro' and 'Developer Dark' templates both offer striking dark themes with prominent hero sections that include particle effects or gradient backgrounds.",
      },
      {
        id: "design-responsive",
        label: "How do I know if a template is mobile-responsive?",
        answer: "All Build-Folio templates are mobile-responsive by default. You can check the preview images in the template gallery which show both desktop and mobile views. When you download and run the template locally, try resizing your browser window or use Chrome DevTools device toolbar to test different screen sizes.",
      },
      {
        id: "design-customize",
        label: "How easy is it to customize colors and fonts in these templates?",
        answer: "Very easy! Most templates use CSS variables defined in the main CSS file, usually in src/index.css or src/App.css. You'll find variables like --primary-color, --text-color, and --font-family at the top of the file. Just change these values to instantly update the entire template's appearance. Fonts can be swapped by updating the Google Fonts import link.",
      },
      {
        id: "design-animations",
        label: "Do templates include animations and interactive elements?",
        answer: "Yes! Many templates include smooth scroll animations, hover effects, parallax scrolling, and transition effects. These are typically built with CSS animations and React libraries like Framer Motion or AOS (Animate On Scroll). You can easily adjust animation speeds and effects by modifying the component props.",
      },
    ],
  },
  {
    id: "errors",
    title: "Errors & Issues",
    description: "Basic help if something looks broken or not working.",
    icon: "⚠️",
    questions: [
      {
        id: "build-error",
        label: "The site is not loading after I run npm run dev.",
        answer: "First, make sure you ran 'npm install' after extracting the ZIP file. This installs all required dependencies. If you did that and still see errors, check that you're using Node.js version 16 or higher by running 'node --version'. Also ensure you're in the correct project directory when running the command. If errors persist, delete the node_modules folder and package-lock.json, then run 'npm install' again.",
      },
      {
        id: "broken-images",
        label: "Images or screenshots are not showing in the template.",
        answer: "Images in Vite + React projects need to be imported or placed in the public folder. If images are in src/assets, make sure they're imported at the top of your component file. If they're placeholder images in the demo, you'll need to replace them with your own images. Check that image paths are correct and the files actually exist in your project folders.",
      },
      {
        id: "npm-not-found",
        label: "I get 'npm not found' or 'command not recognized' error.",
        answer: "This means Node.js and npm are not installed on your computer. Download and install Node.js from nodejs.org (LTS version recommended). The npm package manager comes bundled with Node.js. After installation, close and reopen your terminal or command prompt, then try again.",
      },
      {
        id: "port-in-use",
        label: "I see an error that says the port is already in use.",
        answer: "This happens when another application is using the default development port (usually 5173 for Vite). Either close the other application or Vite instance, or you can specify a different port by running 'npm run dev -- --port 3000' to use port 3000 instead. You can choose any available port number.",
      },
      {
        id: "module-error",
        label: "I'm getting module not found or import errors.",
        answer: "This usually means a package is missing or not properly installed. Run 'npm install' to ensure all dependencies are installed. If the error persists, check your import paths - they should be relative (./Component) for local files or exact package names for node_modules. Also verify the file extensions match (.jsx, .js).",
      },
      {
        id: "blank-page",
        label: "The browser shows a blank white page with no errors.",
        answer: "Check the browser console (F12) for JavaScript errors. Common causes include: incorrect component exports, missing return statements in components, or errors in useEffect hooks. Also ensure your main.jsx or index.jsx is properly importing and rendering the App component.",
      },
    ],
  },
  {
    id: "find",
    title: "Find a Section or Feature",
    description: "Help users find parts of the website or template.",
    icon: "🔍",
    questions: [
      {
        id: "find-templates-list",
        label: "Where can I see all available templates?",
        answer: "Navigate to the Templates page from the main navigation menu. You'll find it in the header of the website. The Templates page displays a grid or list of all available portfolio templates with preview images, descriptions, and tags to help you find what you need.",
      },
      {
        id: "find-downloads",
        label: "Where do I download the React ZIP files?",
        answer: "Each template has a dedicated detail page with a 'Download' or 'Get Template' button. Click on any template card from the Templates page to view its details, see a live preview, and find the download button. The ZIP file contains the complete React project ready to use.",
      },
      {
        id: "find-documentation",
        label: "Is there documentation on how to use the templates?",
        answer: "Yes! Each template ZIP file includes a README.md file with setup instructions, customization tips, and project structure overview. Additionally, check the Docs or Resources section on the Build-Folio website for general guides on working with React portfolio templates.",
      },
      {
        id: "find-examples",
        label: "Can I see live demos of the templates before downloading?",
        answer: "Absolutely! Each template on the Templates page has a 'Live Preview' or 'Demo' button. Click it to open the template in a new tab where you can interact with it fully, test responsiveness, and see all features in action before deciding to download.",
      },
      {
        id: "find-components",
        label: "Where can I find specific components like contact forms or project galleries?",
        answer: "Most templates organize components in a src/components folder. Look for files named ContactForm.jsx, ProjectCard.jsx, Gallery.jsx, etc. Each component is modular and can be reused or customized independently. The README file in each template lists all available components.",
      },
      {
        id: "find-pricing",
        label: "Is there a pricing page or are all templates free?",
        answer: "All templates on Build-Folio are completely free. There's no pricing page because you don't need to pay anything. Just browse, download, and use any template for your portfolio. We believe in helping developers showcase their work without financial barriers.",
      },
    ],
  },
  {
    id: "customization",
    title: "Customization & Editing",
    description: "Learn how to customize and personalize your template.",
    icon: "⚙️",
    questions: [
      {
        id: "custom-colors",
        label: "How do I change the color scheme of my template?",
        answer: "Open the main CSS file (usually src/index.css or src/App.css) and look for CSS custom properties (variables) at the top. They'll look like --primary-color: #3b82f6; Simply change these hex color values to your preferred colors. Changes will apply across the entire template automatically.",
      },
      {
        id: "custom-content",
        label: "How do I add my own projects and content?",
        answer: "Look for data files or arrays in the components (often in src/data or within component files). You'll find arrays of project objects with properties like title, description, image, etc. Replace the placeholder data with your own information. Some templates use separate JSON files for easier content management.",
      },
      {
        id: "custom-sections",
        label: "Can I add or remove sections from the template?",
        answer: "Yes! Open your main App.jsx file where all sections are imported and rendered. You can comment out sections you don't need or add new components by importing them and adding them to the JSX. Make sure to maintain proper component structure and props.",
      },
      {
        id: "custom-fonts",
        label: "How do I change fonts in the template?",
        answer: "Fonts are typically imported from Google Fonts in index.html or at the top of your CSS file. To change fonts: 1) Find a font on fonts.google.com, 2) Copy the import link, 3) Replace the existing font import, 4) Update the font-family CSS variable to use your new font name.",
      },
      {
        id: "custom-navbar",
        label: "How do I edit the navigation menu items?",
        answer: "Find the Navbar or Header component (usually in src/components/Navbar.jsx or Header.jsx). Inside, you'll see an array or list of navigation items. Edit the text and href/to attributes to change menu items. You can add new items by following the same structure as existing ones.",
      },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Hosting",
    description: "Get your portfolio live on the internet.",
    icon: "🚀",
    questions: [
      {
        id: "deploy-vercel",
        label: "How do I deploy to Vercel?",
        answer: "1) Push your project to GitHub, 2) Go to vercel.com and sign in with GitHub, 3) Click 'New Project' and import your repository, 4) Vercel auto-detects Vite settings, 5) Click Deploy. Your site will be live in minutes with a free vercel.app domain. You can also connect a custom domain.",
      },
      {
        id: "deploy-netlify",
        label: "How do I deploy to Netlify?",
        answer: "1) Push your code to GitHub, 2) Sign in to netlify.com, 3) Click 'Add new site' > 'Import from Git', 4) Connect GitHub and select your repo, 5) Build command: 'npm run build', Publish directory: 'dist', 6) Click Deploy. Netlify offers free hosting with SSL and custom domains.",
      },
      {
        id: "deploy-github-pages",
        label: "Can I use GitHub Pages for hosting?",
        answer: "Yes! Install gh-pages: 'npm install gh-pages --save-dev'. Add to package.json scripts: 'predeploy': 'npm run build' and 'deploy': 'gh-pages -d dist'. Also add 'homepage': 'https://yourusername.github.io/repo-name'. Run 'npm run deploy' to publish. Update vite.config.js with base: '/repo-name/'.",
      },
      {
        id: "deploy-custom-domain",
        label: "How do I connect a custom domain?",
        answer: "After deploying to Vercel/Netlify: 1) Go to your project settings, 2) Find 'Domains' section, 3) Add your custom domain, 4) You'll get DNS records to add, 5) Go to your domain registrar's DNS settings, 6) Add the provided A record or CNAME, 7) Wait for DNS propagation (can take up to 48 hours).",
      },
      {
        id: "deploy-build-errors",
        label: "My build fails during deployment. What should I check?",
        answer: "Common build issues: 1) Ensure all dependencies are in package.json (not just devDependencies), 2) Check for console.log errors or warnings, 3) Verify image paths and imports are correct, 4) Make sure all environment variables are set in hosting platform, 5) Test 'npm run build' locally first to catch errors.",
      },
      {
        id: "deploy-update",
        label: "How do I update my deployed site after making changes?",
        answer: "If using Vercel/Netlify with GitHub integration: Just push your changes to GitHub and deployment happens automatically. If using manual deployment or gh-pages: Re-run the deploy command ('npm run deploy' for gh-pages). Changes typically appear within 1-5 minutes.",
      },
    ],
  },
  {
    id: "other",
    title: "Other Questions",
    description: "General information and FAQs about Build-Folio.",
    icon: "💡",
    questions: [
      {
        id: "usage-free",
        label: "Are these portfolio templates free to use and modify?",
        answer: "Yes! All Build-Folio templates are free to use for personal and commercial projects. You can customize them however you like, add your own content, change colors, modify components, and deploy them as your portfolio. We only ask that you don't resell the templates as-is or claim them as your own original work.",
      },
      {
        id: "need-backend",
        label: "Do I need a backend or is everything frontend only?",
        answer: "These are frontend-only templates, meaning they're pure React applications without a backend server. They're perfect for static portfolios. If you need contact form functionality, you can integrate third-party services like Formspree, EmailJS, or Netlify Forms. For more complex features, you'd need to add your own backend.",
      },
      {
        id: "react-knowledge",
        label: "How much React knowledge do I need to use these templates?",
        answer: "Basic React knowledge is helpful but not required. If you can understand JSX, props, and simple state management, you're good to go. The templates are well-structured with clear component separation. For beginners, start by just changing text and images, then gradually explore component modifications as you learn more.",
      },
      {
        id: "mobile-responsive",
        label: "Are all templates mobile-responsive?",
        answer: "Yes, every template is fully responsive and tested on various screen sizes including mobile phones, tablets, and desktops. The templates use modern CSS techniques like Flexbox, Grid, and media queries to ensure your portfolio looks great on all devices.",
      },
      {
        id: "seo-optimized",
        label: "Are the templates SEO-friendly?",
        answer: "The templates include basic SEO structure with semantic HTML, proper heading hierarchy, and meta tag placeholders. For better SEO, consider using React Helmet for dynamic meta tags, add descriptive alt text to images, create a sitemap, and ensure fast loading times. Being deployed on platforms like Vercel/Netlify also helps with performance.",
      },
      {
        id: "browser-support",
        label: "Which browsers are supported?",
        answer: "Templates work on all modern browsers including Chrome, Firefox, Safari, and Edge. We support the last 2 versions of each major browser. Internet Explorer is not supported as it's deprecated. The templates use modern JavaScript and CSS features that these browsers handle well.",
      },
      {
        id: "support",
        label: "What if I need more help or want to report a bug?",
        answer: "You can reach out through the Contact page on the Build-Folio website. For bug reports, please include details about which template you're using, what error you're seeing, and steps to reproduce the issue. We also have a community Discord server linked in the footer where you can ask questions and get help from other users.",
      },
      {
        id: "updates",
        label: "Do templates receive updates?",
        answer: "Yes! We regularly update templates to fix bugs, improve performance, and add new features. When you download a template, you get the current version. Check the Build-Folio website or your download link for update notifications. Updates are always free for templates you've already downloaded.",
      },
    ],
  },
];

function HelpBot() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'welcome',
      type: 'bot',
      content: 'Hi! 👋 I\'m your Build-Folio assistant. I can help you with template selection, troubleshooting errors, customization tips, and deployment guidance. What would you like help with today?'
    }
  ]);
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [showTopics, setShowTopics] = useState(true);
  
  // Reference to the messages container for auto-scroll
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const selectedTopic = helpTopics.find(topic => topic.id === selectedTopicId);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, showTopics]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      // Add animation class for smooth scrolling
      if (messagesContainerRef.current) {
        messagesContainerRef.current.classList.add('bot-scroll-to-bottom');
      }
      
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'end'
        });
        
        // Remove animation class after scrolling
        if (messagesContainerRef.current) {
          setTimeout(() => {
            messagesContainerRef.current?.classList.remove('bot-scroll-to-bottom');
          }, 500);
        }
      }, 100);
    }
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopicId(topic.id);
    setShowTopics(false);
    
    const newMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: topic.title
    };
    
    const botResponse = {
      id: `bot-${Date.now()}`,
      type: 'bot',
      content: `Great! I can help you with ${topic.title}. ${topic.description} Here are some common questions:`,
      topicId: topic.id
    };
    
    setChatMessages(prev => [...prev, newMessage, botResponse]);
  };

  const handleQuestionSelect = (question) => {
    const userMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: question.label
    };
    
    const botAnswer = {
      id: `bot-${Date.now()}-answer`,
      type: 'bot',
      content: question.answer
    };
    
    const botFollowUp = {
      id: `bot-${Date.now()}-followup`,
      type: 'bot',
      content: 'Is there anything else I can help you with?',
      showActions: true
    };
    
    setChatMessages(prev => [...prev, userMessage, botAnswer, botFollowUp]);
  };

  const handleBackToTopics = () => {
    setSelectedTopicId(null);
    setShowTopics(true);
    
    const botMessage = {
      id: `bot-${Date.now()}`,
      type: 'bot',
      content: 'Sure! Here are all the help topics again. What would you like to explore?'
    };
    
    setChatMessages(prev => [...prev, botMessage]);
  };

  const handleStartOver = () => {
    setSelectedTopicId(null);
    setShowTopics(true);
    setChatMessages([
      {
        id: 'welcome-reset',
        type: 'bot',
        content: 'Let\'s start fresh! 🔄 What would you like help with today?'
      }
    ]);
  };

  const handleSameTopicQuestions = () => {
    setShowTopics(false);
    const botMessage = {
      id: `bot-${Date.now()}`,
      type: 'bot',
      content: `Here are more questions about ${selectedTopic.title}:`,
      topicId: selectedTopicId
    };
    setChatMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="bot-container">
      <div className="bot-header">
        <div className="bot-header-content">
          <div className="bot-avatar">🤖</div>
          <div className="bot-header-text">
            <h2 className="bot-title">Build-Folio Assistant</h2>
            <p className="bot-status">Online • Ready to help</p>
          </div>
        </div>
        <button className="bot-reset-button" onClick={handleStartOver}>
          ↺ Reset
        </button>
      </div>

      <div className="bot-messages-container">
        <div 
          className="bot-messages" 
          ref={messagesContainerRef}
        >
          {chatMessages.map((message) => (
            <div key={message.id} className={`bot-message-wrapper bot-message-${message.type}`}>
              {message.type === 'bot' && (
                <div className="bot-message-avatar">🤖</div>
              )}
              <div className="bot-message-content">
                <div className={`bot-message-bubble bot-bubble-${message.type}`}>
                  {message.content}
                </div>
                
                {message.topicId && selectedTopic && (
                  <div className="bot-questions-list">
                    {selectedTopic.questions.map((question) => (
                      <button
                        key={question.id}
                        className="bot-question-button"
                        onClick={() => handleQuestionSelect(question)}
                      >
                        <span className="bot-question-icon">❓</span>
                        <span className="bot-question-text">{question.label}</span>
                      </button>
                    ))}
                  </div>
                )}
                
                {message.showActions && (
                  <div className="bot-actions-inline">
                    <button className="bot-action-button" onClick={handleSameTopicQuestions}>
                      More from this topic
                    </button>
                    <button className="bot-action-button" onClick={handleBackToTopics}>
                      Browse all topics
                    </button>
                  </div>
                )}
              </div>
              {message.type === 'user' && (
                <div className="bot-message-avatar bot-user-avatar">👤</div>
              )}
            </div>
          ))}
          
          {showTopics && (
            <div className="bot-message-wrapper bot-message-bot">
              <div className="bot-message-avatar">🤖</div>
              <div className="bot-message-content">
                <div className="bot-topics-grid">
                  {helpTopics.map((topic) => (
                    <button
                      key={topic.id}
                      className="bot-topic-card"
                      onClick={() => handleTopicSelect(topic)}
                    >
                      <div className="bot-topic-icon">{topic.icon}</div>
                      <div className="bot-topic-info">
                        <h3 className="bot-topic-title">{topic.title}</h3>
                        <p className="bot-topic-description">{topic.description}</p>
                      </div>
                      <div className="bot-topic-arrow">→</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* This empty div is used as the scroll target */}
          <div ref={messagesEndRef} style={{ float: "left", clear: "both" }} />
        </div>
      </div>

      <div className="bot-footer">
        <div className="bot-quick-actions">
          <button className="bot-quick-action" onClick={handleBackToTopics}>
            📋 All Topics
          </button>
          <button className="bot-quick-action" onClick={handleStartOver}>
            🏠 Start Over
          </button>
        </div>
        <div className="bot-footer-info">
          <p className="bot-footer-text">Powered by Build-Folio • Static Help Bot</p>
        </div>
      </div>
    </div>
  );
}

export default HelpBot;