app.service('crudService',function($http){
this.get=function(empNo)
{
	return  $http.get("http://localhost:8090/users?id=" + empNo);
}
});