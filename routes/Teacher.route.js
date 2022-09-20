let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Teacher Model
let teacherSchema = require("../models/Teacher");

// CREATE Teacher
router.post("/create-teacher", (req, res, next) => {
    teacherSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});
//JSON teachers

router.get("/api/teachers", (req, res) => {
    teacherSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.send(data);
	}
});
});


// READ Teacher
router.get("/", (req, res) => {
    teacherSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE Teacher
router
.route("/update-teacher/:id")
// Get Single Student
.get((req, res) => {
	teacherSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		
		return next(error);
	} else {
		
		console.log(data);
		res.json(data);
	}
	});
})

// Update Teacher Data
.put((req, res, next) => {
	teacherSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Teacher updated successfully !");
		}
	}
	);
});

// Delete Teacher
router.delete("/delete-teacher/:id",
(req, res, next) => {
	teacherSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
