/**
 * Created by 42920 on 2017/6/11.
 */
var app = angular.module("registerControllerModule",[]);
app.controller("registerController",["$scope",function ($scope) {
    $scope.signupForm = {
        firstname:null,
        email:null,
        password:null,
        phone:null,
        verifyCode:null
    }


}])