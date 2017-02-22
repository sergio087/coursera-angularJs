'use strict';

angular.module('uthapizzaApp')

  .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory){

    $scope.dishes = menuFactory.getDishes();

    $scope.tab = 1;

    $scope.select = function(index){
      $scope.tab = index;

      if (index === 2)
        {$scope.filterCategory = 'appetizer';}
      else if (index === 3)
        {$scope.filterCategory = 'mains';}
      else if (index === 4)
        {$scope.filterCategory = 'dessert';}
      else
        {$scope.filterCategory = '';}
    };

    $scope.isSelected = function(index){
      return $scope.tab === index;
    };

  }])


  .controller('DishDetailController', ['$scope', '$stateParams','menuFactory', function($scope, $stateParams, menuFactory) {

      $scope.dish = menuFactory.getDish(parseInt($stateParams.id,10));
      
  }])

  .controller('DishCommentController', ['$scope', function($scope) {
            
      //Step 1: Create a JavaScript object to hold the comment from the form

      $scope.comment = {rating: 5};
      
      $scope.submitComment = function () {
          
          //Step 2: This is how you record the date
          $scope.comment.date = new Date().toISOString();
          
          // Step 3: Push your comment into the dish's comment array
          $scope.dish.comments.push($scope.comment);
          
          //Step 4: reset your form to pristine

          $scope.commentForm.$setPristine();
          
          //Step 5: reset your JavaScript object that holds your comment

          $scope.comment = { author: "", rating: 5, comment: "", date: null};
      };
  }]) 

  .controller('ContactController', ['$scope', function($scope){

    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
    
    $scope.channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
    
    $scope.invalidChannelSelection = false;
  }])

  .controller('FeedbackController',['$scope', function($scope){

      $scope.sendFeedback = function(){
        console.log($scope.feedback);
        if ($scope.feedback.agree && ( $scope.feedback.mychannel === "" && ( !$scope.feedback.mychannel))){

          $scope.invalidChannelSelection = true;
          console.log('incorrect');
        }
        else
        {
          //simulo ir al servidor
          $scope.invalidChannelSelection = false;

          $scope.feedback = {mychannel:"", firstName:"", lastName:"",agree:false, email:"" };
          $scope.feedback.mychannel="";

          $scope.feedbackForm.$setPristine();
          console.log($scope.feedback);
        }
      };
  }]);


