/**
 * Created by wuhuaji on 19/12/2017.
 */
var sort = require('./sort')

function testEqual(origin,sorted,func){
    var result = func(origin);
    for(var i = 0;i<result.length;i++){
        if (result[i] !== sorted[i]){
            console.log("排序失败");
            return false;
        }
    }
    console.log("排序成功")
}

var origin = [2,3,5,1,0,6,-9];
var sorted = [-9,0,1,2,3,5,6];
testEqual(origin,sorted,sort.bubble_sort);

origin = [2,3,5,1,0,6,-9];
testEqual(origin,sorted,sort.select_sort);

origin = [2,3,5,1,0,6,-9];
testEqual(origin,sorted,sort.insert_sort);

origin = [2,3,5,1,0,6,-9];
testEqual(origin,sorted,sort.fast_sort);

origin = [2,3,5,1,0,6,-9];
testEqual(origin,sorted,sort.merge_sort);