/**
 * Created by 42920 on 2017/6/8.
 */
//定义模块
var app = angular.module("indexControllerModule",["indexServiceModule"]);
//定义控制器
app.controller("indexController",["$scope","indexService",function ($scope,indexService) {
    $scope.isLogin = false; //如果未登录，显示false
    $scope.cuisines = [];

    //获取下拉菜单
    indexService.getCuisineMenu()
        .then(
            function (res) {
                console.log(res);
                $scope.cuisines = res.data.cuisines;
            },
            function (errRes) {
                console.log(errRes.data);

            }
        )

}])


