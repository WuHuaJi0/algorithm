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
    var length = arr.length
    for(var i = 0;i< length;i++){
        var min_index = i;
        for(var j = i + 1 ;j< length;j++){
            if(arr[j] < arr[min_index]){
                min_index = j;
            }
        }
        if (min_index !== i){
            var tmp = arr[i]
            arr[i] = arr[min_index]
            arr[min_index] = tmp;
        }
    }
    return arr;
}



module.exports = {
    bubble_sort:bubble_sort,
    select_sort:select_sort,
    insert_sort:insert_sort
}