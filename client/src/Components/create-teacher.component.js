// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import TeacherForm from "./TeacherForm";

// CreateTeacher Component
const CreateTeacher = () => {
const [formValues, setFormValues] =
	useState({title:'',  name: '', age:'', price:'', email: '' , aboutMe:'',  phone:'' ,password:'',  subjects:[] })
// onSubmit handler
const onSubmit = teacherObject => {
	axios.post(
//'http://localhost:5000/teachers/create-teacher',
'https://mathapp.onrender.com/teachers/create-teacher',

teacherObject)
	.then(res => {
		if (res.status === 200)
		alert('Teacher successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return student form
return(
	<TeacherForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Teacher
	</TeacherForm>
)
}

// Export CreateStudent Component
export default CreateTeacher
