<?php
/**冒泡排序*/
function swap(&$a,&$b) {
    $tmp = $a;
    $a = $b;
    $b = $tmp;
}

function bubble_sort(&$arr){
    for($i = 0; $i < count($arr) -1; $i++){
        echo $i;
        for($j = 0;$j < count($arr) -1 - $i ;$j++){
            echo $j;
            if ($arr[$j] > $arr[$j + 1]){
                swap($arr[$j],$arr[$j + 1]);
            }
        }
    }
}

/**冒泡排序结束*/