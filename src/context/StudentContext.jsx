import {
    createContext,
    useContext,
    useState
} from "react";

const StudentContext = createContext();

const initialStudents = [
    {
        id: 1,
        name: "Vikram",
        email: "vikram@gmail.com",
        phone: "9876543210",
        rollNo: "CSM001",
        course: "Computer Science & AI",
        year: 3,
        section: "A",
        cgpa: 8.7,
        attendance: 91,
        status: "Active",
        skills: [
            "React",
            "Python",
            "Machine Learning"
        ],
        projects: [
            "Smart Campus",
            "AI Attendance System"
        ],
        city: "Chittoor"
    },

    {
        id: 2,
        name: "Dasthagiri",
        email: "dasthagiri@gmail.com",
        phone: "9876543211",
        rollNo: "CSM002",
        course: "Computer Science & AI",
        year: 3,
        section: "A",
        cgpa: 9.1,
        attendance: 94,
        status: "Active",
        skills: [
            "Python",
            "Data Science",
            "SQL"
        ],
        projects: [
            "Student Analytics",
            "Disease Prediction"
        ],
        city: "Chittoor"
    },

    {
        id: 3,
        name: "Praveen",
        email: "praveen@gmail.com",
        phone: "9876543212",
        rollNo: "CSM003",
        course: "Computer Science & AI",
        year: 3,
        section: "A",
        cgpa: 8.3,
        attendance: 86,
        status: "Active",
        skills: [
            "Java",
            "React",
            "Node.js"
        ],
        projects: [
            "College Portal",
            "Library Management"
        ],
        city: "Chittoor"
    },

    {
        id: 4,
        name: "Yashwanth",
        email: "yashwanth@gmail.com",
        phone: "9876543213",
        rollNo: "CSM004",
        course: "Computer Science & AI",
        year: 3,
        section: "A",
        cgpa: 9.3,
        attendance: 96,
        status: "Active",
        skills: [
            "Python",
            "Machine Learning",
            "Power BI"
        ],
        projects: [
            "AI Healthcare",
            "Data Visualization"
        ],
        city: "Chittoor"
    },

    {
        id: 5,
        name: "Student 5",
        email: "student5@gmail.com",
        phone: "9876543214",
        rollNo: "CSM005",
        course: "Computer Science & AI",
        year: 3,
        section: "A",
        cgpa: 7.9,
        attendance: 82,
        status: "Active",
        skills: [
            "C++",
            "Java",
            "SQL"
        ],
        projects: [
            "Online Examination",
            "Banking System"
        ],
        city: "Chittoor"
    },

    {
        id: 6,
        name: "Student 6",
        email: "student6@gmail.com",
        phone: "9876543215",
        rollNo: "CSM006",
        course: "Computer Science & AI",
        year: 3,
        section: "A",
        cgpa: 8.5,
        attendance: 89,
        status: "Active",
        skills: [
            "Python",
            "HTML",
            "CSS"
        ],
        projects: [
            "Portfolio Website",
            "Weather Application"
        ],
        city: "Chittoor"
    }
];

export function StudentProvider({ children }) {

    const [students, setStudents] = useState(initialStudents);

    const addStudent = (student) => {

        const newStudent = {
            ...student,
            id: Date.now(),
            status: "Active"
        };

        setStudents((current) => [
            ...current,
            newStudent
        ]);
    };

    const deleteStudent = (id) => {

        setStudents((current) =>
            current.filter(
                (student) => student.id !== Number(id)
            )
        );
    };

    const updateStudent = (id, updatedStudent) => {

        setStudents((current) =>
            current.map((student) =>
                student.id === Number(id)
                    ? {
                        ...student,
                        ...updatedStudent
                    }
                    : student
            )
        );
    };

    const getStudent = (id) => {

        return students.find(
            (student) => student.id === Number(id)
        );
    };

    return (
        <StudentContext.Provider
            value={{
                students,
                addStudent,
                deleteStudent,
                updateStudent,
                getStudent
            }}
        >
            {children}
        </StudentContext.Provider>
    );
}

export function useStudents() {
    return useContext(StudentContext);
}