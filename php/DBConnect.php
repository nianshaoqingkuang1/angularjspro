<?php
/**
 * Created by PhpStorm.
 * User: chenyachao
 * Date: 17/6/12
 * Time: 20:32
 * DESC: 数据库连接
 */
    //连接数据库
    function ConnectSQL(){

        $mysql_server_name='localhost'; //改成自己的mysql数据库服务器

        $mysql_username='root'; //改成自己的mysql数据库用户名

        $mysql_password='cyc'; //改成自己的mysql数据库密码

        $mysql_database='angularjspro'; //改成自己的mysql数据库名

        $conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库

        mysql_query("set names 'utf8'"); //数据库输出编码

        mysql_select_db($mysql_database); //打开数据库

        //$sql ="select * from news "; //SQL语句

        //$result = mysql_query($sql,$conn); //查询

        /*
         * $sql = "insert into messageboard (Topic,Content,Enabled,Date) values ('$Topic','$Content','1','2011-01-12')";

            mysql_query($sql);

            mysql_close(); //关闭MySQL连接
         */
    }

    function CloseSQL(){

        mysql_close(); //关闭MySQL连接

    }

    //创建新用户
    function CreateNewUser($username,$email,$passwd,$phone){

        ConnectSQL();
        //0 创建成功 1账户已存在 2数据库错误
        $state =0;

        if (CheckUseIsEixt($username)){

            $state = 1;

        }

        if ($state != 1) {

            $sql = "insert into user(username,email,passwd,phone) values($username,$email,$passwd,$phone)";

            if (!mysql_query($sql)) {

                die('Error: ' . mysql_error());

                $state = 2;

            }
            else{

                $state = 0;

            }

        }
        CloseSQL();

    }

    //检查用户名是否存在
    function CheckUseIsEixt($username){

        $sql = "select * from user where username == $username";

        $row=mysql_query($sql);

        if ($row > 0 ){

            return true;

        }
        else{

            return false;
        }

    }

?>