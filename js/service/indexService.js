/**
 * Created by 42920 on 2017/6/8.
 */
var app = angular.module("indexServiceModule",[]) ;
app.factory("indexService",function ($http) {
    return{
        getCuisineMenu:function(){
            return $http.get("js/cuisine_area.json");

        }
    }

})
