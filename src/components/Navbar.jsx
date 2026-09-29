import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="unique-navbar">

            {/* Logo */}
            <NavLink to="/" className="navbar-brand">
                <div className="brand-mark">
                    C
                </div>

                <div className="brand-text">
                    <strong>CSM-A</strong>
                    <span>SMART STUDENT SYSTEM</span>
                </div>
            </NavLink>

            {/* Navigation */}
            <div className="navbar-links">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <span className="nav-icon">⌂</span>
                    Dashboard
                </NavLink>

                <NavLink
                    to="/students"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <span className="nav-icon">♙</span>
                    Students
                </NavLink>

                <NavLink
                    to="/add-student"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <span className="nav-icon">＋</span>
                    Add Student
                </NavLink>

                {/* ABOUT */}
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <span className="nav-icon">ⓘ</span>
                    About
                </NavLink>

                {/* CONTACT */}
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <span className="nav-icon">✉</span>
                    Contact
                </NavLink>

            </div>

            {/* System Status */}
            <div className="navbar-status">
                <span className="status-dot"></span>

                <div>
                    <strong>System Online</strong>
                    <small>Academic Portal</small>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;