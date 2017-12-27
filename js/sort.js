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

/**插入排序*/
function insert_sort(arr) {
    var length = arr.length
    for(var i = 0;i<length;i++){
        var value = arr[i];
        for(var j = i - 1; arr[j] > value ;j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1 ] = value
    }
    return arr;
}

/**归并排序*/
function merge(left,right){
    var result  = [],
        il      = 0,
        ir      = 0;
    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
}
function merge_sort(arr){
    if(arr.length < 2){
        return arr;
    }
    var middle = Math.floor(arr.length/2);
    var left = arr.slice(0,middle)
    var right = arr.slice(middle)
    return merge(merge_sort(left),merge_sort(right))
}

/**快速排序*/
function fast_sort(arr) {
    if (arr.length <= 1){
        return arr;
    }
    var middle = arr[0];
    var left = [];
    var right = [];
    for(var i = 1; i < arr.length;i++){
        if (arr[i] >= middle){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return fast_sort(left).concat(middle).concat(fast_sort(right));
}




module.exports = {
    bubble_sort:bubble_sort,
    select_sort:select_sort,
    insert_sort:insert_sort,
    merge_sort:merge_sort,
    fast_sort:fast_sort,
}