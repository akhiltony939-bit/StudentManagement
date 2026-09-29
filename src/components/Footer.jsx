function Footer() {
    return (
        <footer className="premium-footer">

            <div className="footer-main">

                {/* BRAND */}
                <div className="footer-brand">

                    <div className="footer-logo">
                        C
                    </div>

                    <div>
                        <strong>CSM-A</strong>
                        <span>
                            STUDENT MANAGEMENT SYSTEM
                        </span>
                    </div>

                    <p>
                        A modern academic platform designed to
                        organize, manage and simplify student
                        information.
                    </p>

                </div>


                {/* SYSTEM */}
                <div className="footer-column">

                    <span className="footer-label">
                        SYSTEM
                    </span>

                    <a href="/">Home</a>
                    <a href="/students">Students</a>
                    <a href="/students/add">Add Student</a>

                </div>


                {/* INFORMATION */}
                <div className="footer-column">

                    <span className="footer-label">
                        INFORMATION
                    </span>

                    <a href="/about">About CSM-A</a>
                    <a href="/contact">Contact</a>
                    <a href="/students">Student Directory</a>

                </div>


                {/* STATUS */}
                <div className="footer-status">

                    <span className="footer-label">
                        PLATFORM STATUS
                    </span>

                    <div className="status-box">

                        <span className="status-light"></span>

                        <div>
                            <strong>
                                SYSTEM ONLINE
                            </strong>

                            <small>
                                CSM-A PLATFORM
                            </small>
                        </div>

                    </div>

                    <p>
                        Built for a smarter academic
                        management experience.
                    </p>

                </div>

            </div>


            {/* BOTTOM BAR */}
            <div className="footer-bottom">

                <span>
                    © 2026 CSM-A Student Management System
                </span>

                <div className="footer-meta">
                    <span>ACADEMIC PLATFORM</span>
                    <span>•</span>
                    <span>VERSION 1.0</span>
                </div>

            </div>

        </footer>
    );
}

export default Footer;