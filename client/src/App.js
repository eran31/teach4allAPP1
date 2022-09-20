// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,
	Route, Link, Routes } from "react-router-dom";

// Import other React Component
//students
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";

//teachers

import CreateTeacher from
	"./Components/create-teacher.component";
import EditTeacher from
	"./Components/edit-teacher.component";
import TeacherList from
	"./Components/teacher-list.component";


// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/"}
				className="nav-link">
				teach4all APP
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Create Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Students List
				</Link>
				</Nav>
				<Nav>
				<Link to={"/create-teacher"}
					className="nav-link">
					Create Teacher
				</Link>
				</Nav>
				<Nav>
				<Link to={"/teacher-list"}
					className="nav-link">
					teachers List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes>
       				 <Route path="/" element={<TeacherList />} />
        			<Route path="create-student/*" element={<CreateStudent />} />
        			<Route path="edit-student/:id*" element={<EditStudent />} />
        			<Route path="student-list/*" element={<StudentList />} />
					<Route path="create-teacher/*" element={<CreateTeacher />} />
        			<Route path="edit-teacher/:id*" element={<EditTeacher />} />
        			<Route path="teacher-list/*" element={<TeacherList />} />
				
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
