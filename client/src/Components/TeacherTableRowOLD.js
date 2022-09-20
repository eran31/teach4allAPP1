import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherTableRow = (props) => {
const { _id, name, email,  password, phone, aboutMe, subjects} = props.obj;

console.log(subjects);
const deleteTeacher = () => {
	axios
	.delete(
"http://localhost:5000/teachers/delete-teacher/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Teacher successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
    
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{aboutMe}</td>
	<td>{password}</td>
	<td>{phone}</td>
    <td>{subjects}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-teacher/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteTeacher}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default TeacherTableRow;
