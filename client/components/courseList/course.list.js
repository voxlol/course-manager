(function(){
  Template.courseList.onRendered(function (){
    console.log('Course List Template Rendered!');
    Session.set('courseListIx', 1);
  });

  Template.courseList.helpers({
    isReady: isReady,
    courses: getAllCourses,
  });

  // Helpers

  function isReady(sub){
    return sub ? FlowRouter.subsReady(sub) : FlowRouter.subsReady();
  }

  function getAllCourses(){
    return Courses.find();
  }
})();