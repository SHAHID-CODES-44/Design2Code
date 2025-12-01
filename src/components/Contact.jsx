import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page-container" id='contact-page'>
            <div className="page-header">
                <h1>Contact Us</h1>
                <p className="subtitle">We'd love to hear from you</p>


                <div className="content-grid">
                    <div className="card contact-info">
                        <h3>Get in Touch</h3>
                        <p><strong>📧 Email:</strong> hello@modernsite.com</p>
                        <p><strong>📞 Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>📍 Address:</strong> 123 Design Street, Creative City</p>
                        <div className="social-links">
                            <button className="social-btn">Twitter</button>
                            <button className="social-btn">LinkedIn</button>
                            <button className="social-btn">Instagram</button>
                        </div>
                    </div>

                    <div className="card form-card">
                        <h3>Send Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;