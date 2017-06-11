/**
 * Created by 42920 on 2017/6/11.
 */
var app = angular.module("footerDirectiveModule",[]);
app.directive("footerHtml",function () {
    return{
        restrict:"AE",
        replace:true,
        templateUrl:"footer.html"
    }

})
