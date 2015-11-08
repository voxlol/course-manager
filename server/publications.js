Meteor.publish('courses', fetchAllCourses);

// Private

function fetchAllCourses() {
  return Courses.find({});  // return all the courses
}