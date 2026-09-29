import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";

import { StudentProvider } from "./context/StudentContext";

function About() {
    return (
        <div className="info-page">
            <div className="info-page-badge">
                CSM-A / ABOUT
            </div>

            <h1>
                About <span>CSM-A</span>
            </h1>

            <p className="info-page-intro">
                CSM-A Smart Student Management System is a modern
                academic platform designed to organize student
                information and make academic management simpler.
            </p>

            <div className="info-page-grid">

                <div className="info-card">
                    <span>01</span>
                    <h2>Student Management</h2>
                    <p>
                        Manage student profiles, academic information,
                        skills, projects and performance records from
                        one centralized system.
                    </p>
                </div>

                <div className="info-card">
                    <span>02</span>
                    <h2>Academic Tracking</h2>
                    <p>
                        Track important academic information such as
                        CGPA, attendance, course, year and section.
                    </p>
                </div>

                <div className="info-card">
                    <span>03</span>
                    <h2>Simple Interface</h2>
                    <p>
                        A clean and responsive interface makes student
                        information easier to view, update and manage.
                    </p>
                </div>

                <div className="info-card">
                    <span>04</span>
                    <h2>Future Ready</h2>
                    <p>
                        The system can be extended with authentication,
                        analytics, notifications and database services.
                    </p>
                </div>

            </div>

            <div className="info-highlight">
                <strong>CSM-A STUDENT SYSTEM</strong>
                <span>
                    Manage. Understand. Improve.
                </span>
            </div>
        </div>
    );
}


function Contact() {
    return (
        <div className="info-page">

            <div className="info-page-badge">
                CSM-A / CONTACT
            </div>

            <h1>
                Contact <span>CSM-A</span>
            </h1>

            <p className="info-page-intro">
                Have a question about the student management system?
                Use the information below to connect with the
                academic administration team.
            </p>

            <div className="contact-grid">

                <div className="contact-card">
                    <div className="contact-icon">✉</div>

                    <span>EMAIL</span>

                    <h2>Academic Support</h2>

                    <p>
                        Contact the academic administration team
                        for system-related assistance.
                    </p>

                    <a href="mailto:admin@csma.edu">
                        admin@csma.edu
                    </a>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">⌂</div>

                    <span>OFFICE</span>

                    <h2>CSM-A Administration</h2>

                    <p>
                        Visit the academic administration office
                        during working hours for assistance.
                    </p>

                    <strong>
                        CSM-A Academic Office
                    </strong>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">◷</div>

                    <span>WORKING HOURS</span>

                    <h2>Academic Support</h2>

                    <p>
                        Monday to Friday
                    </p>

                    <strong>
                        09:00 AM — 05:00 PM
                    </strong>
                </div>

            </div>

            <div className="contact-note">
                <span>●</span>
                CSM-A Student Management System is currently online.
            </div>

        </div>
    );
}


function App() {
    return (
        <StudentProvider>
            <BrowserRouter>

                <div className="app-container">

                    <Navbar />

                    <main className="main-content">

                        <Routes>

                            <Route
                                path="/"
                                element={<Home />}
                            />

                            <Route
                                path="/students"
                                element={<Students />}
                            />

                            <Route
                                path="/add-student"
                                element={<AddStudent />}
                            />

                            <Route
                                path="/edit-student/:id"
                                element={<EditStudent />}
                            />

                            <Route
                                path="/about"
                                element={<About />}
                            />

                            <Route
                                path="/contact"
                                element={<Contact />}
                            />

                        </Routes>

                    </main>

                    <Footer />

                </div>

            </BrowserRouter>
        </StudentProvider>
    );
}

export default App;