import React, { useState } from "react";


function StudentState() {
    // const [students, setStudents] = useState(["Phú", "Phụng", "Huy"]);
    // const [studentName, setStudentName] = useState();
    const [state, setState] = useState({
        students: ["Phú", "Phụng", "Huy"],
        studentName: ''
    })
    const { students, studentName } = state;

    const handleAddStudent = (e) => {
        e.preventDefault()
        // setState((prev) => {
        //     let newStudents = [...prev, studentName];
        //     return newStudents;
        // })
        // setStudentName("");
        setState({
            ...state,
            students: [...students, studentName],
            studentName: ""
         
        })
    }

    const handleInput = (e) => {
        setState({
            ...state,
            studentName : e.target.value
        })
    }

    const handleRemove = (student) => {
        // setStudents((prev) => {
        //     let newStudents = prev.filter(item => item != student);
        //     return newStudents;
        // })   
        setState({
            ...students,
            students: students.filter(item => item != student)
        })
    }
    return (
        <div className="container">
            <h1 className="text-white">List Students</h1>
            <div className="">
                <form onSubmit={handleAddStudent} className="form-group d-flex">
                    <input type="text" className="form-control w-25 me-2"
                        value={studentName}
                        // onInput={(e) => setState(e.target.value)}
                        onInput={handleInput}
                    />
                    <button type="submit" className="btn btn-dark btn-sm">
                        <i className="fa fa-plus me-2"></i>
                        Add
                    </button>
                </form>
            </div>
            <div className="mt-2">
                <ul className="list-group w-25">
                    {
                        students.map((student, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                {student}
                                <i role="button" className="fa fa-times text-danger fw-bolder"
                                    onClick={() => handleRemove(student)}
                                ></i>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default StudentState;