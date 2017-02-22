'use strict';

angular.module('uthapizzaApp', [])

  .controller('menuController', ['$scope', function($scope){

      var dishes= [
                     {
                       name:'Uthapizza',
                       image: 'images/uthapizza.png',
                       category: 'mains',
                       label:'Hot',
                       price:'4.99',
                       description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                       comment: ''
                    },
                    {
                       name:'Zucchipakoda',
                       image: 'images/zucchipakoda.png',
                       category: 'appetizer',
                       label:'',
                       price:'1.99',
                       description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet‐tangy tamarind sauce',
                         comment: ''
                    },
                    {
                       name:'Vadonut',
                       image: 'images/vadonut.png',
                       category: 'appetizer',
                       label:'New',
                       price:'1.99',
                       description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                       comment: ''
                    },
                    {
                       name:'ElaiCheese Cake',
                       image: 'images/elaicheesecake.png',
                       category: 'dessert',
                       label:'',
                       price:'2.99',
                       description:'A delectable, semi‐sweet New York Style  Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                       comment: ''
                    }
      ];

    $scope.dishes = dishes;

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

  .controller('contactController', ['$scope', function($scope){

    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
    
    $scope.channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
    
    $scope.invalidChannelSelection = false;
  }])

  .controller('feedbackController',['$scope', function($scope){

      $scope.sendFeedback = function(){
        console.log($scope.feedback);
        if ($scope.feedback.agree && ( $scope.feedback.mychannel =="" && ( !$scope.feedback.mychannel))){

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
      }
  }]);


