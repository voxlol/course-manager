/*
**  Courses 

**  @name - string
**  @subject - string
**  @workload - hours
**  @students 
      - time worked
      - join Date
**  @createdAt - string
**  @deletedAt - string
*/  

Courses = new Mongo.Collection('courses');

Courses.allow({
  insert: function(userId, doc){
    return doc.userId === userId;
  }
});

Courses.latest = function(){
  return Courses.find({}, {sort: {date: -1}, limit: 1});
}

Meteor.methods({
  createCourse: createCourse;
});

// Private Methods 

(function(){
  function createCourse(name, subject, workload){
    check(name, String);
    check(subject, String);
    check(workload, Number);

    var course = {
      name: name,
      subject: subject,
      workload: workload,
      createdAt: Date.now(),
      deletedAt: null
    }

    return Courses.insert(course);
  }
})();

// Seed Data

Meteor.startup(function(){
  if(Meteor.isServer && Courses.find().count() === 0) {
    Courses.insert({
      name: 'Javascript Design Patterns',
      subject: 'programming',
      workload: 20,
      createdAt: Date.now(),
      deletedAt: null
    });
  }
});