import "./About.css";

const About = () => {
    return (
        <div className="page-container" id='about-page'>
            <div className="page-header">
                <h1>About Us</h1>
                <p className="subtitle">Crafting digital experiences with passion</p>

                <div className="content-grid">
                    <div className="card">
                        <div className="icon">🌟</div>
                        <h3>Our Mission</h3>
                        <p>We strive to create beautiful, functional web solutions that make a difference. Our team is dedicated to innovation and excellence.</p>
                    </div>

                    <div className="card">
                        <div className="icon">🚀</div>
                        <h3>Our Vision</h3>
                        <p>To be pioneers in digital transformation, helping businesses thrive through cutting-edge technology and design.</p>
                    </div>

                    <div className="card">
                        <div className="icon">❤</div>
                        <h3>Our Values</h3>
                        <p>Integrity, creativity, and collaboration are at the heart of everything we do. We believe in building lasting relationships.</p>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stat">
                        <h2>150+</h2>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat">
                        <h2>98%</h2>
                        <p>Client Satisfaction</p>
                    </div>
                    <div className="stat">
                        <h2>5+</h2>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;