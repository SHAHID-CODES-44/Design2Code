import './FeedbackForm.css';

const testimonials = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'CEO, TechCorp',
        content: 'Outstanding service! The team delivered beyond expectations with exceptional attention to detail.',
        avatar: 'AJ',
        rating: 5
    },
    {
        id: 2,
        name: 'Sarah Miller',
        role: 'Marketing Director',
        content: 'Transformed our digital presence completely. The results exceeded all our KPIs.',
        avatar: 'SM',
        rating: 5
    },
    {
        id: 3,
        name: 'David Chen',
        role: 'Startup Founder',
        content: 'Professional, creative, and incredibly efficient. Highly recommended for any web project.',
        avatar: 'DC',
        rating: 4
    },
    {
        id: 4,
        name: 'Maria Garcia',
        role: 'Product Manager',
        content: 'Exceptional UI/UX design that significantly improved our user engagement metrics.',
        avatar: 'MG',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <div className="page-container" id='testimonial-page'>
            <div className="page-header">
                <h1>Testimonials</h1>
                <p className="subtitle">What our clients say about us</p>


                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="avatar">{testimonial.avatar}</div>
                                <div className="testimonial-info">
                                    <h4>{testimonial.name}</h4>
                                    <p className="role">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="stars">
                                {'★'.repeat(testimonial.rating)}
                                {'☆'.repeat(5 - testimonial.rating)}
                            </div>

                            <p className="testimonial-content">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>

                <div className="stats-section">
                    <h2>Trusted by 500+ companies worldwide</h2>
                    <div className="logo-grid">
                        <div className="logo-item">TechCorp</div>
                        <div className="logo-item">InnovateCo</div>
                        <div className="logo-item">GlobalBiz</div>
                        <div className="logo-item">NextGen</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;