import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	grade: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Required"),
	password:  Yup.string().required("Required"),
	phone:  Yup.string().required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<lable>full name</lable>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<lable>password</lable>
			<Field name="password" type="text"
				className="form-control" />
			<ErrorMessage
			name="password"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<lable>email</lable>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<lable>phone</lable>
			<Field name="phone" type="text"
				className="form-control" />
			<ErrorMessage
			name="phone"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<lable>grade</lable>
			<Field name="grade" type="number"
				className="form-control" />
			<ErrorMessage
			name="grade"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;
