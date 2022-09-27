const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teacherSchema = new Schema({
title: {
	type:String
},
age: {
	type:Number
},

name: {
	type: String
},
email: {
	type: String
},
UrlPic: {
	type:String
},
rating: {
	type:Number
},
price: {
	type:Number
},

// 3 string SchemaTypes: 'name', 'nested.firstName', 'nested.lastName'
/*Address: {
	City:{type:String},
	StreetName:{type:Sting},
	NumberHome:{typpe:Number},
},*/

phone: {
	type:String
},

password: {
	type: String
},

aboutMe: {
	type: String
},
subjects: 
{
	type : Array , "default" : []	
},
services:
{
	type:Array, "default": []
},

/*availbalLseeons:
{
	id:{type:Number},
	date: { type: Date, default: Date.now }
}*/
}, {
	collection: 'teachers'
})

module.exports = mongoose.model('Teacher', teacherSchema)
