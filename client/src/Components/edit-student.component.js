// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";

// EditStudent Component
const EditStudent = (props) => {
	const { id } = useParams()
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	grade: "",
	password:"",
	phone:""
});

//eran change
//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		//"http://localhost:5000/students/update-student/" +
		"https://mathapp.onrender.com/students/update-student/" +
		//props.match.params.id,
		id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
		//props.history.push("/student-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

//eran change
// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		//"http://localhost:5000/students/update-student/"
		"https://mathapp.onrender.com/students/update-student/"
		//+ props.match.params.id
		+id
	)
	.then((res) => {
		const { name, email, grade, password, phone } = res.data;
		setFormValues({ name, email, grade, password, phone });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
