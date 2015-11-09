Meteor.publish('courses', getAllCourses);
Meteor.publish('courseById', getCourseById);

// Private

function getAllCourses(){
  return Courses.find({});  // return all the courses
}

function getCourseById(courseId){
  return Courses.find({_id: courseId});
}