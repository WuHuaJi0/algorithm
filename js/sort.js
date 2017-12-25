/**常用排序算法*/

/**冒泡排序*/
function bubble_sort(arr){
    for(var i = 0 ;i<arr.length - 1;i++){
        for(var j = 0;j<arr.length - 1 - i ;j++){
            if (arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}


/**选择排序*/
function select_sort(arr){
    for(var i = 0;i< arr.length;i++){
        var min = i;
        for(var j = i + 1 ;j< arr.length;j++){
            if(arr[j] < arr[i]){
                min = j;
            }
        }
        var tmp = arr[i]
        arr[i] = arr[min]
        arr[min] = tmp;
    }
    return arr;
}


module.exports = {
    bubble_sort:bubble_sort,
    select_sort:select_sort
}