/**
 * Created by 42920 on 2017/6/11.
 */
var app = angular.module("registerControllerModule",["indexServiceModule","footerDirectiveModule"]);
app.controller("registerController",["$scope","$interval","indexService",function ($scope,$interval,indexService) {
    $scope.signupForm = {
        firstname:null,
        email:null,
        password:null,
        phone:null,
        verifyCode:null
    }
    $scope.title = "发送验证码";//存放按钮上显示的数据
    $scope.clicked = false;//false 时不禁用，true禁用
    $scope.verifyCodeUrl = "http://iservice.itshsxt.com/sms/send?callback=JSON_CALLBACK";
    $scope.signupUrl = "http://iservice.itshsxt.com/diner/signup?callback=JSON_CALLBACK";

    //点击按钮实现倒计时功能
    $scope.sendVerifyCode =function () {
        var obj = {mobile:$scope.signupForm.phone};
        //发送请求
        indexService.sendRequest($scope.verifyCodeUrl,obj)
            .then(
                function (res) {
                    console.log(res);
                    if(res.data.resultCode ==1){
                        $scope.countDown();
                    }else{
                        alert(res.data.message);
                    }
                    
                }
            )

    }
    //倒计时
    $scope.countDown =function () {
        $scope.clicked = true;
        var times=11;
        var id = $interval(function () {
            times--;
            $scope.title = times +"s";
            if(times ==0){
                $scope.title = "发送验证码";
                times =11;
                //取消执行
                $interval.cancel(id) ;
                $scope.clicked = false;
            }
        },1000)

    }
    //注册
    $scope.signup = function () {
        //发送请求
        indexService.sendRequest($scope.signupUrl,$scope.signupForm)
            .then(
                function (res) {
                    console.log(res);
                    if(res.data.resultCode==1){
                        localStorage.setItem("dinerInfo",JSON.stringify(res.data.result));
                        window.location.href = "../../../网站首页/index.html";
                    }else{
                        alert(res.data.message);
                    }
                }
            )

    }
    $scope.lost = function (){
        var input=document.getElementsByName("firstname")[0];
        var input_value=input.value;
        if(input_value==""){
            /*input.value="请输入用户名";
             input.style.color="gray";*/
            //document.write("<p>请输入用户名</p>");
        }else{
            //ajax
            var xhr;
            //兼容问题
            if(window.XMLHttpRequest){
                xhr = new window.XMLHttpRequest();
            }
            else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.open("POST","php/Register.php",true);
            xhr.send(input_value);
            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4 && xhr.readyState == 200){

                    var resultCode = xhr.responseText;
                    //服务器返回0证明没有重复 返回1证明重复
                    if (resultCode == 1){

                        //在这里显示用户名重复
                        //document.write()
                    }

                }

            }
        }
    }

    $scope.get = function (){
        var input=document.getElementsByName("firstname")[0];
        input.value="";
        input.style.color="black";
    }

}])