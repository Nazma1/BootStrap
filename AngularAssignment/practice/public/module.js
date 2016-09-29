var app=angular.module("crudModule",[]);
app.controller("crudController",function($scope,$http)
								{
									var page=1;
									$scope.searchDetails=function(txtSearch){										
										$http.get("http://localhost:8090/users?id=" + txtSearch)
										.then(function(response)
										{
											$scope.data=response.data;												
										});
										
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
								
                    
