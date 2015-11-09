//triggersEnter, triggersExit

FlowRouter.route('/', {
  subscriptions: function(){
    this.register('courses', Meteor.subscribe('courses'));
    console.log('Subscribing to all courses');
  },
  action: function(){
    BlazeLayout.render('layout', { main: 'courseList' });
    console.log("Rendering Course Layout");
  }
})

FlowRouter.route('/course/:courseId', {
  subscriptions: function(params){
    this.register('course', Meteor.subscribe('courseById', params.courseId));
    console.log("Subscribing to courseId: " + params.courseId);
  },
  action: function(){
    BlazeLayout.render('layout', { main: 'course' });
    console.log("Rendering Course Layout");
  }
})