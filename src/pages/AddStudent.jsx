import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function AddStudent() {
    const { addStudent } = useStudents();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        rollNo: "",
        course: "Computer Science & AI",
        year: "3",
        section: "A",
        cgpa: "",
        attendance: "",
        city: "",
        skills: "",
        projects: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addStudent({
            ...formData,
            cgpa: Number(formData.cgpa),
            attendance: Number(formData.attendance),
            year: Number(formData.year),
            skills: formData.skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean),
            projects: formData.projects
                .split(",")
                .map((project) => project.trim())
                .filter(Boolean),
        });

        navigate("/students");
    };

    return (
        <div className="add-student-page">

            {/* HEADER */}
            <section className="add-student-header">
                <div>
                    <div className="registration-label">
                        <span></span>
                        CSM-A / STUDENT REGISTRATION
                    </div>

                    <h1>
                        Add New <strong>Student</strong>
                    </h1>

                    <p>
                        Create a complete academic profile and add
                        a student to the CSM-A student directory.
                    </p>
                </div>

                <div className="registration-status">
                    <span></span>
                    DATABASE READY
                </div>
            </section>

            {/* FORM */}
            <form
                className="student-registration-form"
                onSubmit={handleSubmit}
            >

                {/* PERSONAL INFORMATION */}
                <section className="form-section">

                    <div className="form-section-heading">
                        <div className="section-number">01</div>

                        <div>
                            <h2>Personal Information</h2>
                            <p>Basic identification and contact details</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-field full-field">
                            <label>FULL NAME</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter student's full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label>EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="student@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-field">
                            <label>PHONE NUMBER</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 XXXXX XXXXX"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label>ROLL NUMBER</label>
                            <input
                                type="text"
                                name="rollNo"
                                placeholder="CSM24A001"
                                value={formData.rollNo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label>CITY</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </section>

                {/* ACADEMIC INFORMATION */}
                <section className="form-section">

                    <div className="form-section-heading">
                        <div className="section-number">02</div>

                        <div>
                            <h2>Academic Information</h2>
                            <p>Course, year and academic performance</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-field full-field">
                            <label>COURSE</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                            >
                                <option>
                                    Computer Science & AI
                                </option>
                                <option>
                                    Computer Science
                                </option>
                                <option>
                                    Artificial Intelligence & Machine Learning
                                </option>
                                <option>
                                    Information Technology
                                </option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>YEAR</label>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                            >
                                <option value="1">First Year</option>
                                <option value="2">Second Year</option>
                                <option value="3">Third Year</option>
                                <option value="4">Fourth Year</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>SECTION</label>
                            <select
                                name="section"
                                value={formData.section}
                                onChange={handleChange}
                            >
                                <option value="A">Section A</option>
                                <option value="B">Section B</option>
                                <option value="C">Section C</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label>CGPA</label>
                            <input
                                type="number"
                                name="cgpa"
                                placeholder="8.50"
                                step="0.01"
                                min="0"
                                max="10"
                                value={formData.cgpa}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label>ATTENDANCE %</label>
                            <input
                                type="number"
                                name="attendance"
                                placeholder="90"
                                min="0"
                                max="100"
                                value={formData.attendance}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </section>

                {/* SKILLS */}
                <section className="form-section">

                    <div className="form-section-heading">
                        <div className="section-number">03</div>

                        <div>
                            <h2>Skills & Projects</h2>
                            <p>Technical abilities and academic work</p>
                        </div>
                    </div>

                    <div className="form-grid">

                        <div className="form-field full-field">
                            <label>TECHNICAL SKILLS</label>
                            <input
                                type="text"
                                name="skills"
                                placeholder="React, Python, Machine Learning"
                                value={formData.skills}
                                onChange={handleChange}
                            />
                            <small>
                                Separate multiple skills using commas
                            </small>
                        </div>

                        <div className="form-field full-field">
                            <label>PROJECTS</label>
                            <textarea
                                name="projects"
                                placeholder="Smart Student Management System, AI Chatbot..."
                                value={formData.projects}
                                onChange={handleChange}
                                rows="4"
                            ></textarea>
                            <small>
                                Separate multiple projects using commas
                            </small>
                        </div>

                    </div>
                </section>

                {/* ACTIONS */}
                <section className="registration-actions">

                    <button
                        type="button"
                        className="cancel-registration"
                        onClick={() => navigate("/students")}
                    >
                        ← Cancel
                    </button>

                    <div className="registration-action-right">

                        <div className="secure-note">
                            <span>●</span>
                            Secure academic record
                        </div>

                        <button
                            type="submit"
                            className="save-student-btn"
                        >
                            <span>＋</span>
                            Register Student
                            <b>→</b>
                        </button>

                    </div>

                </section>

            </form>
        </div>
    );
}

export default AddStudent;