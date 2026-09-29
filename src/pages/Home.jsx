import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="unique-home">

            {/* ================= HERO ================= */}

            <section className="unique-hero">

                <div className="hero-grid-bg"></div>

                <div className="hero-left">

                    <div className="system-tag">
                        <span className="live-dot"></span>
                        CSM-A ACADEMIC INTELLIGENCE
                    </div>

                    <h1>
                        Manage.
                        <br />
                        <span>Understand.</span>
                        <br />
                        Improve.
                    </h1>

                    <p className="hero-description">
                        A modern student management platform that
                        brings academic records, attendance, skills
                        and student information into one intelligent
                        workspace.
                    </p>

                    <div className="hero-actions">

                        <Link
                            to="/students"
                            className="unique-primary-btn"
                        >
                            Explore Students
                            <span>↗</span>
                        </Link>

                        <Link
                            to="/add-student"
                            className="unique-secondary-btn"
                        >
                            + Register Student
                        </Link>

                    </div>

                    <div className="hero-mini-info">

                        <div>
                            <strong>01</strong>
                            <span>Centralized Records</span>
                        </div>

                        <div>
                            <strong>02</strong>
                            <span>Academic Tracking</span>
                        </div>

                        <div>
                            <strong>03</strong>
                            <span>Student Insights</span>
                        </div>

                    </div>

                </div>


                {/* ================= DIGITAL ID CARD ================= */}

                <div className="hero-right">

                    <div className="floating-label label-one">
                        <span>●</span>
                        LIVE DATA
                    </div>

                    <div className="floating-label label-two">
                        ACADEMIC
                        <strong>PORTAL</strong>
                    </div>

                    <div className="student-id-card">

                        <div className="id-card-top">

                            <div>
                                <small>INSTITUTIONAL SYSTEM</small>
                                <strong>CSM-A</strong>
                            </div>

                            <div className="id-chip">
                                C
                            </div>

                        </div>

                        <div className="id-profile">

                            <div className="profile-circle">
                                C
                            </div>

                            <div>
                                <span>STUDENT MANAGEMENT</span>
                                <h3>Academic Portal</h3>
                                <p>Computer Science & AI</p>
                            </div>

                        </div>

                        <div className="id-data">

                            <div>
                                <span>STUDENTS</span>
                                <strong>120+</strong>
                            </div>

                            <div>
                                <span>CGPA</span>
                                <strong>8.42</strong>
                            </div>

                            <div>
                                <span>ATTENDANCE</span>
                                <strong>87%</strong>
                            </div>

                        </div>

                        <div className="id-line"></div>

                        <div className="id-footer">
                            <span>CSM-A / 2026</span>
                            <span>● VERIFIED SYSTEM</span>
                        </div>

                    </div>

                    <div className="orbit orbit-one"></div>
                    <div className="orbit orbit-two"></div>

                </div>

            </section>


            {/* ================= LIVE METRICS ================= */}

            <section className="metric-strip">

                <div className="metric-title">
                    <span>SYSTEM OVERVIEW</span>
                    <h2>Live Academic Metrics</h2>
                </div>

                <div className="metric-card">
                    <span className="metric-number">120</span>
                    <span>Registered Students</span>
                    <small>↑ Active database</small>
                </div>

                <div className="metric-card">
                    <span className="metric-number">8.42</span>
                    <span>Average CGPA</span>
                    <small>Academic performance</small>
                </div>

                <div className="metric-card">
                    <span className="metric-number">87%</span>
                    <span>Attendance</span>
                    <small>Current average</small>
                </div>

            </section>


            {/* ================= WHY CSM-A ================= */}

            <section className="intelligence-section">

                <div className="unique-section-heading">

                    <span>WHY CSM-A?</span>

                    <h2>
                        More than a student
                        <br />
                        <em>database.</em>
                    </h2>

                    <p>
                        CSM-A connects student information with
                        meaningful academic insights, making
                        everyday student management simpler.
                    </p>

                </div>


                <div className="feature-grid">

                    <div className="feature-card feature-large">

                        <div className="feature-number">
                            01
                        </div>

                        <div className="feature-icon">
                            ◈
                        </div>

                        <h3>
                            One Academic Identity
                        </h3>

                        <p>
                            Keep student identity, academic details,
                            contact information, skills and projects
                            organized in one place.
                        </p>

                        <div className="feature-line"></div>

                        <span>
                            CENTRALIZED DATA
                        </span>

                    </div>


                    <div className="feature-card">

                        <div className="feature-number">
                            02
                        </div>

                        <div className="feature-icon">
                            ◉
                        </div>

                        <h3>
                            Performance Visibility
                        </h3>

                        <p>
                            Quickly understand CGPA and attendance
                            information through clear academic metrics.
                        </p>

                        <span>
                            SMART INSIGHTS
                        </span>

                    </div>


                    <div className="feature-card">

                        <div className="feature-number">
                            03
                        </div>

                        <div className="feature-icon">
                            ◎
                        </div>

                        <h3>
                            Student Portfolio
                        </h3>

                        <p>
                            Store technical skills and projects so
                            every student has a meaningful digital
                            academic profile.
                        </p>

                        <span>
                            DIGITAL PROFILE
                        </span>

                    </div>

                </div>

            </section>


            {/* ================= WORKFLOW ================= */}

            <section className="workflow-section">

                <div className="workflow-heading">
                    <span>HOW IT WORKS</span>
                    <h2>
                        From record
                        <br />
                        <span>to insight.</span>
                    </h2>
                </div>

                <div className="workflow">

                    <div className="workflow-step">

                        <div className="step-circle">
                            01
                        </div>

                        <h3>
                            Register
                        </h3>

                        <p>
                            Add student information
                            to the academic system.
                        </p>

                    </div>


                    <div className="workflow-connector"></div>


                    <div className="workflow-step">

                        <div className="step-circle">
                            02
                        </div>

                        <h3>
                            Organize
                        </h3>

                        <p>
                            Maintain academic,
                            attendance and skill data.
                        </p>

                    </div>


                    <div className="workflow-connector"></div>


                    <div className="workflow-step">

                        <div className="step-circle">
                            03
                        </div>

                        <h3>
                            Understand
                        </h3>

                        <p>
                            View meaningful information
                            through student records.
                        </p>

                    </div>


                    <div className="workflow-connector"></div>


                    <div className="workflow-step">

                        <div className="step-circle">
                            04
                        </div>

                        <h3>
                            Improve
                        </h3>

                        <p>
                            Use organized information
                            for better academic management.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="unique-cta">

                <div className="cta-glow"></div>

                <div>

                    <span>
                        CSM-A • SMART ACADEMIC SYSTEM
                    </span>

                    <h2>
                        Everything about a student.
                        <br />
                        <strong>One intelligent platform.</strong>
                    </h2>

                </div>

                <Link
                    to="/students"
                    className="cta-button"
                >
                    Open Student Directory →
                </Link>

            </section>

        </div>
    );
}

export default Home;