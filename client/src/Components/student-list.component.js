import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:5000/students/")
	//.get("https://mathapp-2len.onrender.com/api/students")
	//.get("https://mathapp-2len.onrender.com/api/students")
	//.get("http://localhost:5000/students/")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return students.map((res, i) => {
	return <StudentTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>full Name</th>
			<th>Email</th>
			<th>grade</th>
			<th>PassWord</th>
			<th>Phone</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default StudentList;
