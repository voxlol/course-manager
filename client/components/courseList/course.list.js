(function(){
  Template.courseList.onRendered(init);

  Template.courseList.helpers({
    isReady: isReady,
    courses: getAllCourses,
  });

  // OnRendered

  function init(){
    console.log('Course List Template Rendered!');
    Session.set('courseListIx', 1);
  }

  // Helpers

  function isReady(sub){
    return sub ? FlowRouter.subsReady(sub) : FlowRouter.subsReady();
  }

  function getAllCourses(){
    return Courses.find();
  }
})();