(function(){
  Template.courseList.helpers({
    isReady: isReady
  });

  function isReady(sub){
    return sub ? FlowRouter.subsReady(sub) : FlowRouter.subsReady();
  }
})();
