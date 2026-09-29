function Contact() {
    return (
        <main className="contact-page">

            {/* HERO */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <span className="contact-eyebrow">
                        CSM-A / CONTACT CENTER
                    </span>

                    <h1>
                        Let’s stay
                        <span> connected.</span>
                    </h1>

                    <p>
                        Have a question about the CSM-A Student Management
                        System? Reach out to the project team for information,
                        support, or academic discussions.
                    </p>

                    <div className="contact-status">
                        <span className="contact-live-dot"></span>
                        <div>
                            <strong>SYSTEM SUPPORT ACTIVE</strong>
                            <small>Available for academic queries</small>
                        </div>
                    </div>
                </div>

                <div className="contact-hero-card">
                    <div className="contact-card-top">
                        <span>CSM-A</span>
                        <span>05 / CONTACT</span>
                    </div>

                    <div className="contact-big-symbol">@</div>

                    <h2>
                        Connect.
                        <br />
                        Ask.
                        <br />
                        Collaborate.
                    </h2>

                    <div className="contact-card-bottom">
                        <span>ACADEMIC PROJECT</span>
                        <span>● ONLINE</span>
                    </div>
                </div>
            </section>

            {/* CONTACT INFORMATION */}
            <section className="contact-information">

                <div className="contact-section-label">
                    01 / CONTACT INFORMATION
                </div>

                <div className="contact-info-grid">

                    <article className="contact-info-card">
                        <span className="contact-info-number">01</span>
                        <div className="contact-info-icon">@</div>
                        <h3>Email</h3>
                        <p>
                            Send your questions, suggestions, or academic
                            queries through email.
                        </p>
                        <a href="mailto:csma.students@gmail.com">
                            csma.students@gmail.com
                        </a>
                    </article>

                    <article className="contact-info-card">
                        <span className="contact-info-number">02</span>
                        <div className="contact-info-icon">C</div>
                        <h3>Department</h3>
                        <p>
                            Connect with the department for project-related
                            academic information.
                        </p>
                        <strong>CSM-A / AI & ML</strong>
                    </article>

                    <article className="contact-info-card">
                        <span className="contact-info-number">03</span>
                        <div className="contact-info-icon">?</div>
                        <h3>Support</h3>
                        <p>
                            Need help understanding the system or its
                            features? Contact the project team.
                        </p>
                        <strong>Project Support</strong>
                    </article>

                </div>
            </section>

            {/* MESSAGE AREA */}
            <section className="contact-message">

                <div className="contact-message-heading">
                    <span>02 / SEND A MESSAGE</span>

                    <h2>
                        Start a
                        <br />
                        conversation.
                    </h2>

                    <p>
                        Use the form to share your question or feedback with
                        the CSM-A project team.
                    </p>
                </div>

                <form
                    className="contact-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Thank you! Your message has been received.");
                    }}
                >
                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label>Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-field">
                        <label>Subject</label>
                        <input
                            type="text"
                            placeholder="What would you like to discuss?"
                            required
                        />
                    </div>

                    <div className="contact-field">
                        <label>Message</label>
                        <textarea
                            rows="6"
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="contact-submit">
                        <span>Send Message</span>
                        <strong>→</strong>
                    </button>
                </form>

            </section>

            {/* PROJECT IDENTITY */}
            <section className="contact-project">

                <div className="contact-project-number">
                    03
                </div>

                <div className="contact-project-content">
                    <span>CSM-A / PROJECT IDENTITY</span>

                    <h2>
                        Built as an
                        <br />
                        academic experience.
                    </h2>

                    <p>
                        CSM-A Student Management System demonstrates how
                        modern web technologies can be used to create a
                        practical and organized academic application.
                    </p>
                </div>

                <div className="contact-project-mark">
                    CSM-A
                </div>

            </section>

        </main>
    );
}

export default Contact;