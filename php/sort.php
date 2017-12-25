<?php

function swap(&$a,&$b) {
    $tmp = $a;
    $a = $b;
    $b = $tmp;
}


/**冒泡排序*/
function bubble_sort($arr){
    for($i = 0; $i < count($arr) -1; $i++){
        for($j = 0;$j < count($arr) -1 - $i ;$j++){
            if ($arr[$j] > $arr[$j + 1]){
                swap($arr[$j],$arr[$j + 1]);
            }
        }
    }
    return $arr;
}
/**冒泡排序结束*/

/**选择排序*/
function select_sort($arr){
    for($i = 0;$i< count($arr);$i++){
        $min = $i;
        for ($j = $i + 1;$j<count($arr);$j++){
            if ($arr[$j] < $arr[$min]){
                $min = $j;
            }
        }
        swap($arr[$min],$arr[$i]);
    }
    return $arr;
}