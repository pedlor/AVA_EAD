const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const CourseSchema = new Schema({
  title       : { type: String, required: true  },
  description : { type: String, required: true  },
  slug        : { type: String, required: true  },
  shareId     : { type: String, required: true  },
  enrolledStudents : [{
    type: ObjectId,
    ref: "users"
  }],
  instructor  : {
    type: ObjectId,
    ref: "users",
    required: true
  },
  tutor       : {
    type: ObjectId,
    ref: "users"
  },
  tutorName   : { type: String },
  tutorEmail  : { type: String },
  modules     : [{
      type: ObjectId, 
      ref: 'modules',
  }]
});

var Course = mongoose.model('courses', CourseSchema);

//module.exports = Course;