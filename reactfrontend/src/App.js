import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [students, setStudents] = useState([])
    useEffect(() => {
        async function getAllStudents() {
            try {
                const students = await axios.get("http://127.0.0.1:8000/api/student/")
                setStudents(students.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllStudents()
    }, [])

    return (
        <div className="App">
            <h1>Connect ReactJS to Django</h1>
            {students.map((student, index) => {
                return (
                    <p key={index}>{student.stuname} {student.email}</p>
                )
             })
            }
        </div>
    );
}

export default App;
