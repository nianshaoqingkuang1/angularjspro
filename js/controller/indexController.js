/**
 * Created by 42920 on 2017/6/8.
 */
//定义模块
var app = angular.module("indexControllerModule",["indexServiceModule","siyfion.sfTypeahead","footerDirectiveModule"]);
//定义控制器
app.controller("indexController",["$scope","indexService",function ($scope,indexService) {
    $scope.isLogin = false; //如果未登录，显示false
    $scope.cuisines = []; //菜系的下拉条件
    $scope.searchFrom = {
        searchKey : null,//查询关键字
        cuisine : null//查询下拉条件
    }

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
    //实现自动补全功能
    //创建引擎对象
    var resName = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,// 对查询关键字进行切词的分词器
        prefetch: 'http://iservice.itshsxt.com/restaurant/load_all_names?callback=?', // 初始化原创数据的url
    })
    //创建datasets
    $scope.datasets={
        source:resName,
    }

    //搜索
    $scope.search = function () {
        //将条件放入 sessionStorage
        sessionStorage.setItem("params",JSON.stringify( $scope.searchFrom));
        //跳转到list.html
        window.location.href = "list.html";

    }


}])


