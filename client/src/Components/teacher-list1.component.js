import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TeacherTableRow from "./TeacherTableRow";

const TeacherList = () => {
const [teachers, setTeachers] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:5000/teachers/")
	.then(({ data }) => {
		setTeachers(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return teachers.map((res, i) => {
	return <TeacherTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>title</th>
			<th>full Name</th>
			<th>Email</th>
			<th>about me</th>
			<th>PassWord</th>
			<th>Phone</th>
			<th>Subjects</th>
            <th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default TeacherList;
