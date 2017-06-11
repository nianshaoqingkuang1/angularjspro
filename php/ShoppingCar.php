<?php
/**
 * Created by PhpStorm.
 * User: chenyachao
 * Date: 17/6/11
 * Time: 22:03
 * DES:购物车
 * 对应的数据库结构
 * orderform
 * +----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | int(11)      | NO   | PRI | NULL    | auto_increment |
| username | varchar(50)  | YES  |     | NULL    |                |
| goodsids | varchar(100) | YES  |     | NULL    |                |
| state    | tinyint(1)   | YES  |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
 */