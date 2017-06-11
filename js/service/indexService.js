/**
 * Created by 42920 on 2017/6/8.
 */
var app = angular.module("indexServiceModule",[]) ;
app.factory("indexService",function ($http) {
    return{
        getCuisineMenu:function(){//请求本地的json文件
            return $http.get("js/cuisine_area.json");
        },
        sendRequest:function (sendUrl,params) { //用于发送请求的方法
           return $http({
                method:"jsonp",
                url:sendUrl,
                params:params
            })

        }
    }

})
