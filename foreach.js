
//foreach-> it is a basic loop it will not return anything, like filter or array return an array


let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let new_arr=num.forEach(
    (el,index)=>{
        // console.log(el*2);
        return el*2
    }
)
console.log(new_arr);