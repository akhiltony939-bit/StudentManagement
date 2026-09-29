import { useState } from "react";
import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

function Students() {
    const { students, deleteStudent } = useStudents();

    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) => {
        const searchText = search.toLowerCase();

        return (
            student.name.toLowerCase().includes(searchText) ||
            student.email.toLowerCase().includes(searchText) ||
            student.course.toLowerCase().includes(searchText)
        );
    });

    const totalStudents = students.length;

    const thirdYearStudents = students.filter(
        (student) => Number(student.year) === 3
    ).length;

    const courses = [
        ...new Set(students.map((student) => student.course))
    ];

    return (
        <main className="students-dashboard">

            {/* =================================================
                DASHBOARD HERO
            ================================================= */}

            <section className="students-dashboard-hero">

                <div className="students-hero-content">

                    <span className="students-eyebrow">
                        CSM-A / STUDENT DIRECTORY
                    </span>

                    <h1>
                        Student
                        <span> Directory.</span>
                    </h1>

                    <p>
                        A centralized academic directory for managing,
                        discovering, and maintaining CSM-A student profiles.
                    </p>

                </div>

                <div className="students-hero-side">

                    <div className="students-live">
                        <span></span>
                        DIRECTORY ACTIVE
                    </div>

                    <strong>
                        {totalStudents.toString().padStart(2, "0")}
                    </strong>

                    <small>
                        Registered Students
                    </small>

                </div>

            </section>


            {/* =================================================
                STATISTICS
            ================================================= */}

            <section className="student-statistics">

                <div className="student-stat">

                    <span className="student-stat-number">
                        01
                    </span>

                    <div>
                        <small>TOTAL STUDENTS</small>
                        <strong>{totalStudents}</strong>
                        <p>Currently registered</p>
                    </div>

                </div>


                <div className="student-stat">

                    <span className="student-stat-number">
                        02
                    </span>

                    <div>
                        <small>THIRD YEAR</small>
                        <strong>{thirdYearStudents}</strong>
                        <p>Students in Year 3</p>
                    </div>

                </div>


                <div className="student-stat">

                    <span className="student-stat-number">
                        03
                    </span>

                    <div>
                        <small>COURSES</small>
                        <strong>{courses.length}</strong>
                        <p>Active course groups</p>
                    </div>

                </div>


                <div className="student-stat">

                    <span className="student-stat-number">
                        04
                    </span>

                    <div>
                        <small>DIRECTORY</small>
                        <strong>LIVE</strong>
                        <p>Student records active</p>
                    </div>

                </div>

            </section>


            {/* =================================================
                DIRECTORY TOOLBAR
            ================================================= */}

            <section className="students-directory">

                <div className="directory-heading">

                    <div>
                        <span>01 / DIRECTORY</span>

                        <h2>
                            Browse students
                        </h2>
                    </div>

                    <Link
                        to="/students/add"
                        className="add-student-button"
                    >
                        <span>+</span>
                        Add Student
                    </Link>

                </div>


                {/* SEARCH */}

                <div className="student-search">

                    <span className="search-icon">
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search by name, email or course..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    {search && (
                        <button
                            className="clear-search"
                            onClick={() => setSearch("")}
                        >
                            ×
                        </button>
                    )}

                </div>


                {/* RESULT INFO */}

                <div className="directory-result">

                    <span>
                        SHOWING
                    </span>

                    <strong>
                        {filteredStudents.length}
                    </strong>

                    <span>
                        OF {students.length} STUDENTS
                    </span>

                </div>


                {/* STUDENTS */}

                {filteredStudents.length === 0 ? (

                    <div className="empty-student-state">

                        <div className="empty-icon">
                            ?
                        </div>

                        <h3>
                            No students found
                        </h3>

                        <p>
                            Try searching with another name, email,
                            or course.
                        </p>

                        {search && (
                            <button
                                onClick={() => setSearch("")}
                            >
                                Clear Search
                            </button>
                        )}

                    </div>

                ) : (

                    <div className="students-grid">

                        {filteredStudents.map((student) => (

                            <StudentCard
                                key={student.id}
                                student={student}
                                onDelete={deleteStudent}
                            />

                        ))}

                    </div>

                )}

            </section>


            {/* =================================================
                DIRECTORY FOOTER
            ================================================= */}

            <section className="students-bottom">

                <div>
                    <span>CSM-A / ACADEMIC RECORDS</span>

                    <h2>
                        Every student.
                        <br />
                        One organized directory.
                    </h2>
                </div>

                <div className="students-bottom-mark">
                    CSM-A
                </div>

            </section>

        </main>
    );
}

export default Students;