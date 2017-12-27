<?php
/**
 * Created by PhpStorm.
 * User: wuhuaji
 * Date: 19/12/2017
 * Time: 11:03 AM
 */

require_once 'sort.php';

/**一个简单测试函数，用于测试排序后结果是否相等*/
function testEqual($origin,$sorted,$sortfunc){
    $sort_result = call_user_func($sortfunc,$origin);
    if ($sorted == $sort_result){
        echo $sortfunc." 成功\n";
    }else{
        echo $sortfunc." 失败\n";
    }
}

/**冒泡排序测试*/
$origin = [2,3,5,1,0,6,-9];
$sorted = [-9,0,1,2,3,5,6];
testEqual($origin,$sorted,"bubble_sort");
testEqual($origin,$sorted,"select_sort");
testEqual($origin,$sorted,"insert_sort");