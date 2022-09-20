import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const TeacherForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Required"),
	/*grade: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Required"),*/
	password:  Yup.string().required("Required"),
	phone:  Yup.string().required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<lable>title</lable>
			<Field name="title" type="text"
				className="form-control" />
			<ErrorMessage
			name="title"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
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
			<lable>age</lable>
			<Field name="age" type="text"
				className="form-control" />
			<ErrorMessage
			name="age"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<lable>price</lable>
			<Field name="price" type="text"
				className="form-control" />
			<ErrorMessage
			name="price"
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
			<lable>about me</lable>
			<Field as="textarea"  name="aboutMe" ></Field>
		</FormGroup>
        <FormGroup>
		  <label>Subjects:</label>
		  <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="subjects" value="Math" />
              Math
            </label>
            <label>
              <Field type="checkbox" name="subjects" value="English" />
              English
            </label>
            <label>
              <Field type="checkbox" name="subjects" value="Computers" />
              Computers
            </label>
          </div>

</FormGroup>
<FormGroup>
		  <label>Services:</label>
		  <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="services" value="שיעור ראשון חינם" />
              שיעור ראשון חינם
            </label>
            <label>
              <Field type="checkbox" name="services" value="שיעורי אונליין" />
              שיעורי אונליין
            </label>
            <label>
              <Field type="checkbox" name="services" value="Computers" />
              Computers
            </label>
          </div>

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

export default TeacherForm;
