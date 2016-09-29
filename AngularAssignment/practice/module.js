var app=angular.module("crudModule",[]);
app.controller("crudController",function($scope,myService) 
								{


									var page=1;
									$scope.searchDetails=function(){

									getpple();										
										//$http.get("http://localhost:8090/users?id=" + txtSearch)
										function getpple() {
										myService.getPeople($scope.txtSearch)
										.success(function(response){
											$scope.data=response.data;
										})
										.error(function (error)
										{
											$scope.data=error.statusText;

										});
									}; //getpple ends
										/*.then(function(response)
										{
											$scope.data=response.data;												
										});*/
										
									}  // end of searcDetails

									$scope.loadAllDetails=function(){
										$http.get("http://localhost:8090/users?&_start=" + page + "&_limit=10")
										.then(function(response)
										{
											$scope.data=response.data;
										});
									}

									$scope.mdlSave=function(){										
										$http.post("http://localhost:8090/users",$scope.order)
										.then(function(response)
										{
											$scope.data=[response.data];
											alert("inserted");
										});

									}

									$scope.RemoveDetails=function(id){

										console.log(id);
										$http.delete("http://localhost:8090/users/"+id)
										.then(function(response)
										{
											$scope.data=response.data;
											alert("deleted");
										});
									}

									$scope.mdlEdit=function(id){
										console.log(id);
										$http.get("http://localhost:8090/users/"+id)
										.then(function(response){
											$scope.order=response.data;
											
										});
									}

									$scope.mdlUpdate=function(){
										//console.log($scope.order.id);
										$http.put("http://localhost:8090/users/"+ $scope.order.id, $scope.order)
										.then(function(response){
											$scope.data=[response.data];
											alert("Updated successfully");

										});
									}


								
								});
								
                    
app.factory('myService',function($http)
{
 	var myService={};
 	myService.getPeople=function(txtSearch){
 		return $http.get("http://localhost:8090/users?id=" + txtSearch);

 	};
 	return myService;


});