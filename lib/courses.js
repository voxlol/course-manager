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

(function(){
  Courses.allow({
    insert: function(userId, doc){ return doc.userId === userId; }
  });

  Courses.latest = function(){
    return Courses.find({}, {sort: {date: -1}, limit: 1});
  }
  
  Meteor.methods({
    createCourse: createCourse
  });

  // Private

  function createCourse(name, subject, workload){
    if(typeof name != "string" || typeof subject != "string" || typeof workload != "number" ){
      throw new Meteor.Error('TypeError', 'Check the parameter types');
      return null;
    }

    var course = {
      name: name,
      subject: subject,
      workload: workload,
      createdAt: Date.now(),
      deletedAt: null,
      students: []
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
      deletedAt: null,
      students: []
    });
  }
});