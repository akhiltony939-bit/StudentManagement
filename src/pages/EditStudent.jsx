import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getStudent, updateStudent } = useStudents();

    const student = getStudent(id);

    const [formData, setFormData] = useState(
        student
            ? {
                  ...student,
                  skills: student.skills?.join(", ") || "",
                  projects: student.projects?.join(", ") || "",
              }
            : null
    );

    if (!student || !formData) {
        return (
            <div className="edit-student-page">
                <div className="edit-not-found">
                    <span>!</span>
                    <h2>Student Record Not Found</h2>
                    <p>
                        The requested student profile does not exist
                        in the current database.
                    </p>

                    <button onClick={() => navigate("/students")}>
                        ← Back to Students
                    </button>
                </div>
            </div>
        );
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updateStudent(id, {
            ...formData,
            year: Number(formData.year),
            cgpa: Number(formData.cgpa),
            attendance: Number(formData.attendance),
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
        <div className="edit-student-page">

            {/* HEADER */}
            <section className="edit-page-header">
                <div>
                    <div className="edit-record-label">
                        <span></span>
                        CSM-A / RECORD MANAGEMENT
                    </div>

                    <h1>
                        Edit <strong>Student Profile</strong>
                    </h1>

                    <p>
                        Update academic and personal information
                        stored in the CSM-A student database.
                    </p>
                </div>

                <div className="editing-record">
                    <span>RECORD</span>
                    <strong>
                        CSM{String(student.id).padStart(3, "0")}
                    </strong>
                </div>
            </section>

            {/* PROFILE SUMMARY */}
            <section className="edit-profile-banner">

                <div className="edit-profile-avatar">
                    {student.name?.charAt(0).toUpperCase()}
                </div>

                <div className="edit-profile-info">
                    <span>EDITING PROFILE</span>
                    <h2>{student.name}</h2>
                    <p>{student.email}</p>
                </div>

                <div className="profile-status">
                    <span></span>
                    ACTIVE RECORD
                </div>

            </section>

            {/* FORM */}
            <form
                className="edit-registration-form"
                onSubmit={handleSubmit}
            >

                {/* PERSONAL */}
                <section className="edit-form-section">

                    <div className="edit-section-heading">
                        <div className="edit-section-number">01</div>

                        <div>
                            <h2>Personal Information</h2>
                            <p>Student identity and contact details</p>
                        </div>
                    </div>

                    <div className="edit-form-grid">

                        <div className="edit-field edit-full">
                            <label>FULL NAME</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="edit-field">
                            <label>EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="edit-field">
                            <label>PHONE NUMBER</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone || ""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="edit-field">
                            <label>ROLL NUMBER</label>
                            <input
                                type="text"
                                name="rollNo"
                                value={formData.rollNo || ""}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="edit-field">
                            <label>CITY</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city || ""}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </section>

                {/* ACADEMIC */}
                <section className="edit-form-section">

                    <div className="edit-section-heading">
                        <div className="edit-section-number">02</div>

                        <div>
                            <h2>Academic Information</h2>
                            <p>Course and performance information</p>
                        </div>
                    </div>

                    <div className="edit-form-grid">

                        <div className="edit-field edit-full">
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

                        <div className="edit-field">
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

                        <div className="edit-field">
                            <label>SECTION</label>
                            <select
                                name="section"
                                value={formData.section || "A"}
                                onChange={handleChange}
                            >
                                <option value="A">Section A</option>
                                <option value="B">Section B</option>
                                <option value="C">Section C</option>
                            </select>
                        </div>

                        <div className="edit-field">
                            <label>CGPA</label>
                            <input
                                type="number"
                                name="cgpa"
                                min="0"
                                max="10"
                                step="0.01"
                                value={formData.cgpa}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="edit-field">
                            <label>ATTENDANCE %</label>
                            <input
                                type="number"
                                name="attendance"
                                min="0"
                                max="100"
                                value={formData.attendance}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </section>

                {/* SKILLS */}
                <section className="edit-form-section">

                    <div className="edit-section-heading">
                        <div className="edit-section-number">03</div>

                        <div>
                            <h2>Skills & Projects</h2>
                            <p>Technical profile and academic work</p>
                        </div>
                    </div>

                    <div className="edit-form-grid">

                        <div className="edit-field edit-full">
                            <label>TECHNICAL SKILLS</label>
                            <input
                                type="text"
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                            />
                            <small>
                                Separate skills using commas
                            </small>
                        </div>

                        <div className="edit-field edit-full">
                            <label>PROJECTS</label>
                            <textarea
                                name="projects"
                                rows="4"
                                value={formData.projects}
                                onChange={handleChange}
                            ></textarea>
                            <small>
                                Separate projects using commas
                            </small>
                        </div>

                    </div>
                </section>

                {/* ACTIONS */}
                <div className="edit-actions">

                    <button
                        type="button"
                        className="edit-cancel-btn"
                        onClick={() => navigate("/students")}
                    >
                        ← Cancel
                    </button>

                    <div className="edit-actions-right">

                        <span className="update-status">
                            <span></span>
                            READY TO UPDATE
                        </span>

                        <button
                            type="submit"
                            className="update-student-btn"
                        >
                            Save Changes
                            <span>✓</span>
                        </button>

                    </div>
                </div>

            </form>
        </div>
    );
}

export default EditStudent;