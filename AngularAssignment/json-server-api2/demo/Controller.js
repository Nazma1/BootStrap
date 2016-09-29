var app=angular.controller('crudController', function ($scope, crudService) {
 
       $scope.get = function (Emp) 
       {
              var promiseGetSingle = crudService.get(Emp.EmpNo);
       
              promiseGetSingle.then(function (pl) 
              {
                  var res = pl.data;
                  $scope.EmpNo = res.EmpNo;
                  /*$scope.EmpName = res.EmpName;
                  $scope.Salary = res.Salary;
                  $scope.DeptName = res.DeptName;
                  $scope.Designation = res.Designation;*/
       
                 //scope.IsNewRecord = 0;
              },
                        function (errorPl) {
                             console.log('failure loading Employee', errorPl);
                        });
          }
        });

/*"id": 6,
      "age": 34,
      "name": "Baird Hudson",
      "gender": "male",
      "company": "INSURETY",
      "email": "bairdhudson@insurety.com"*/