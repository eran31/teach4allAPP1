// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import TeacherForm from "./TeacherForm";

// CreateStudent Component
const CreateTeacher = () => {
const [formValues, setFormValues] =
	useState({ name: '', password:'', email: '', phone:'',  aboutMe: '', subjects:[] })
// onSubmit handler
const onSubmit = teacherObject => {
	axios.post(
'http://localhost:5000/teachers/create-teacher',
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
