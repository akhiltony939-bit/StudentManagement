import { useState } from "react";
import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function Students() {
    const { students, deleteStudent } = useStudents();

    const [search, setSearch] = useState("");
    const [yearFilter, setYearFilter] = useState("All");

    const filteredStudents = students.filter((student) => {
        const searchText = search.toLowerCase();

        const matchesSearch =
            student.name?.toLowerCase().includes(searchText) ||
            student.email?.toLowerCase().includes(searchText) ||
            student.course?.toLowerCase().includes(searchText) ||
            student.rollNo?.toLowerCase().includes(searchText);

        const matchesYear =
            yearFilter === "All" ||
            String(student.year) === yearFilter;

        return matchesSearch && matchesYear;
    });

    const totalStudents = students.length;

    const activeStudents = students.filter(
        (student) => student.status === "Active"
    ).length;

    const thirdYearStudents = students.filter(
        (student) => Number(student.year) === 3
    ).length;

    const averageCGPA =
        students.length > 0
            ? (
                  students.reduce(
                      (total, student) =>
                          total + Number(student.cgpa || 0),
                      0
                  ) / students.length
              ).toFixed(2)
            : "0.00";

    const handleDelete = (id, name) => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete ${name}?`
        );

        if (confirmDelete) {
            deleteStudent(id);
        }
    };

    return (
        <div className="students-page">

            {/* HEADER */}
            <section className="students-header">

                <div className="students-title-area">

                    <div className="directory-label">
                        <span className="directory-live-dot"></span>
                        CSM-A / STUDENT DIRECTORY
                    </div>

                    <h1>
                        Student
                        <span> Directory</span>
                    </h1>

                    <p>
                        Manage, explore and monitor registered
                        CSM-A students from one centralized
                        academic workspace.
                    </p>

                </div>

                <Link
                    to="/add-student"
                    className="add-student-btn"
                >
                    <span>＋</span>
                    Add Student
                </Link>

            </section>


            {/* STATISTICS */}
            <section className="student-stats">

                <div className="student-stat-card">
                    <div className="stat-icon">◈</div>

                    <div>
                        <span className="stat-label">
                            TOTAL STUDENTS
                        </span>

                        <strong className="stat-number">
                            {totalStudents}
                        </strong>
                    </div>

                    <span className="stat-code">
                        01
                    </span>
                </div>


                <div className="student-stat-card">
                    <div className="stat-icon">●</div>

                    <div>
                        <span className="stat-label">
                            ACTIVE STUDENTS
                        </span>

                        <strong className="stat-number">
                            {activeStudents}
                        </strong>
                    </div>

                    <span className="stat-code">
                        02
                    </span>
                </div>


                <div className="student-stat-card">
                    <div className="stat-icon">◉</div>

                    <div>
                        <span className="stat-label">
                            THIRD YEAR
                        </span>

                        <strong className="stat-number">
                            {thirdYearStudents}
                        </strong>
                    </div>

                    <span className="stat-code">
                        03
                    </span>
                </div>


                <div className="student-stat-card">
                    <div className="stat-icon">★</div>

                    <div>
                        <span className="stat-label">
                            AVERAGE CGPA
                        </span>

                        <strong className="stat-number">
                            {averageCGPA}
                        </strong>
                    </div>

                    <span className="stat-code">
                        04
                    </span>
                </div>

            </section>


            {/* SEARCH + FILTER */}
            <section className="student-control-panel">

                <div className="search-box">

                    <span className="search-icon">
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search by name, roll number, email or course..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    {search && (
                        <button
                            type="button"
                            className="clear-search"
                            onClick={() => setSearch("")}
                        >
                            ×
                        </button>
                    )}

                </div>


                <div className="filter-area">

                    <span>
                        FILTER BY YEAR
                    </span>

                    <select
                        value={yearFilter}
                        onChange={(e) =>
                            setYearFilter(e.target.value)
                        }
                    >
                        <option value="All">
                            All Years
                        </option>

                        <option value="1">
                            First Year
                        </option>

                        <option value="2">
                            Second Year
                        </option>

                        <option value="3">
                            Third Year
                        </option>

                        <option value="4">
                            Fourth Year
                        </option>

                    </select>

                </div>

            </section>


            {/* DIRECTORY STATUS */}
            <div className="directory-info">

                <div>

                    <span className="directory-line"></span>

                    <strong>
                        REGISTERED STUDENTS
                    </strong>

                    <span>
                        {filteredStudents.length} records found
                    </span>

                </div>

                <div className="system-status">

                    <span></span>

                    SYSTEM DATABASE ACTIVE

                </div>

            </div>


            {/* STUDENT CARDS */}
            {filteredStudents.length > 0 ? (

                <section className="students-grid">

                    {filteredStudents.map(
                        (student, index) => (

                            <article
                                className="premium-student-card"
                                key={student.id}
                            >

                                {/* CARD HEADER */}
                                <div className="premium-card-top">

                                    <div>

                                        <span className="card-label">
                                            CSM-A / STUDENT
                                        </span>

                                        <span className="student-number">
                                            RECORD /{" "}
                                            {String(
                                                index + 1
                                            ).padStart(3, "0")}
                                        </span>

                                    </div>

                                    <div className="college-mark">
                                        C
                                    </div>

                                </div>


                                {/* PROFILE */}
                                <div className="student-profile">

                                    <div className="student-avatar">

                                        {student.name
                                            ?.charAt(0)
                                            .toUpperCase()}

                                    </div>


                                    <div className="student-main-info">

                                        <h2>
                                            {student.name}
                                        </h2>

                                        <p>
                                            {student.email}
                                        </p>

                                        <span className="active-badge">

                                            <span></span>

                                            {student.status ||
                                                "ACTIVE STUDENT"}

                                        </span>

                                    </div>

                                </div>


                                {/* ACADEMIC DETAILS */}
                                <div className="academic-info">

                                    <div>
                                        <span>
                                            ROLL NUMBER
                                        </span>

                                        <strong>
                                            {student.rollNo ||
                                                "CSM---"}
                                        </strong>
                                    </div>


                                    <div>
                                        <span>
                                            COURSE
                                        </span>

                                        <strong>
                                            {student.course ||
                                                "CSM"}
                                        </strong>
                                    </div>


                                    <div>
                                        <span>
                                            YEAR
                                        </span>

                                        <strong>
                                            YEAR {student.year}
                                        </strong>
                                    </div>

                                </div>


                                {/* PERFORMANCE */}
                                <div className="performance-row">

                                    <div>
                                        <span>
                                            CGPA
                                        </span>

                                        <strong>
                                            {student.cgpa ||
                                                "—"}
                                        </strong>
                                    </div>


                                    <div className="performance-bar">

                                        <div
                                            style={{
                                                width: `${Math.min(
                                                    Number(
                                                        student.attendance ||
                                                            0
                                                    ),
                                                    100
                                                )}%`,
                                            }}
                                        ></div>

                                    </div>


                                    <div>
                                        <span>
                                            ATTENDANCE
                                        </span>

                                        <strong>
                                            {student.attendance
                                                ? `${student.attendance}%`
                                                : "—"}
                                        </strong>
                                    </div>

                                </div>


                                {/* SKILLS */}
                                {student.skills?.length > 0 && (

                                    <div className="student-skills">

                                        {student.skills
                                            .slice(0, 3)
                                            .map(
                                                (
                                                    skill,
                                                    skillIndex
                                                ) => (

                                                    <span
                                                        key={
                                                            skillIndex
                                                        }
                                                    >
                                                        {skill}
                                                    </span>

                                                )
                                            )}

                                    </div>

                                )}


                                {/* ACTIONS */}
                                <div className="id-card-actions">

                                    <Link
                                        to={`/edit-student/${student.id}`}
                                        className="edit-student-btn"
                                    >
                                        Edit Profile
                                        <span>↗</span>
                                    </Link>


                                    <button
                                        type="button"
                                        className="delete-student-btn"
                                        onClick={() =>
                                            handleDelete(
                                                student.id,
                                                student.name
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>


                                {/* FOOTER */}
                                <div className="id-card-footer">

                                    <span>
                                        CSM-A STUDENT SYSTEM
                                    </span>

                                    <span>
                                        2026
                                    </span>

                                </div>

                            </article>

                        )
                    )}

                </section>

            ) : (

                /* EMPTY STATE */
                <section className="students-empty">

                    <div className="empty-icon">
                        ⌕
                    </div>

                    <h2>
                        No Students Found
                    </h2>

                    <p>
                        No student records match your
                        current search or filter.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            setSearch("");
                            setYearFilter("All");
                        }}
                    >
                        Reset Filters
                    </button>

                </section>

            )}

        </div>
    );
}

export default Students;