Template.course.helpers({
  isReady: function(sub){
    return sub ? FlowRouter.subsReady(sub) : FlowRouter.subsReady();
  },
  course: function(){
    return Courses.findOne({_id: FlowRouter.current().params.courseId });
  }
});
