<?php
/**
 * Created by PhpStorm.
 * User: chenyachao
 * Date: 17/6/11
 * Time: 22:03
 * DES:用户的订单
 * 对应的数据库结构
 * orderform
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | int(11)      | NO   | PRI | NULL    | auto_increment |   订单id
| username | varchar(50)  | YES  |     | NULL    |                |   用户账号
| goodsids | varchar(100) | YES  |     | NULL    |                |   订单内物品
| state    | tinyint(1)   | YES  |     | NULL    |                |   订单状态
+----------+--------------+------+-----+---------+----------------+
 */
?>