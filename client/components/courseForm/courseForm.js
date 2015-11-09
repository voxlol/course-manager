Template.courseForm.events({
  'click button': function(e){
    e.preventDefault();
    var name = $("#name").val();
    var subject = $("#subject").val();
    var workload = parseInt($("#workload").val());

    Meteor.call('createCourse', name, subject, workload, function(err, result){
      if(!err){
        console.log("Course created successfully!")
      }else
        console.log("There was an error...");
    });
  }
});