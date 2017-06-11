/**
 * Created by 42920 on 2017/6/11.
 */
var app  = angular.module("loginControllerModule",["indexServiceModule","footerDirectiveModule"]);
app.controller ("loginController",["$scope","indexService",function ($scope,indexService) {
    $scope.loginFrom = { //登录表单对象
        email:null,
        password:null
    }

    //在浏览器中直接访问login.html页面时，如果用户已登录，则直接跳转index.html页面
    //从localStorage中读取用户信息
    var dinerInfoStr = localStorage.getItem("dinerInfo");
    if(dinerInfoStr !="" && dinerInfoStr !=null){
        //将JSON串转为JSON对象
        try{
            var dinerInfoObj= JSON.parse(dinerInfoStr) ;
            if(dinerInfoObj.dinerId>0 && !isNaN(dinerInfoObj.dinerId)){
                window.location.href = "index.html";
            }
        }catch(e){
            console.log(e);

        }


    }
    $scope.loginUrl ="http://iservice.itshsxt.com/diner/login?callback=JSON_CALLBACK";
    //登录
    $scope.login =function () {
        indexService.sendRequest($scope.loginUrl,$scope.loginFrom)
            .then(
                function (res) {
                    console.log(res);
                    if(res.data.resultCode==1){
                        localStorage.setItem("dinerInfo",JSON.stringify(res.data.result));
                        window.location.href="index.html";
                    } else{
                        alert(res.data.message);
                    }

                }
            );
    }


    

}])
