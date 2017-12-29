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
    $length = count($arr);
    for($i = 0;$i< $length;$i++){
        $min = $i;
        for ($j = $i + 1;$j<$length;$j++){
            if ($arr[$j] < $arr[$min]){
                $min = $j;
            }
        }
        if ($min != $i){
            swap($arr[$min],$arr[$i]);
        }
    }
    return $arr;
}

/**插入排序*/
function insert_sort($arr){
    $length = count($arr);
    for($i = 1;$i < $length ;$i++){
        $value = $arr[$i];
        for ($j = $i-1;$j >= 0 && $arr[$j] > $value ; $j-- ){
            $arr[$j+1] = $arr[$j];
        }
        $arr[$j+1] = $value;
    }
    return $arr;
}


/**快速排序*/
function fast_sort($arr){
    if (count($arr) <= 1){
        return $arr;
    }
    $left = array();
    $right = array();
    $middle = $arr[0];
    for($i = 1;$i<count($arr);$i++){
        if ($arr[$i] > $middle){
            $right[] = $arr[$i];
        }else{
            $left[] = $arr[$i];
        }
    }
    return array_merge(fast_sort($left),array($middle),fast_sort($right));
}