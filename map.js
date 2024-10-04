let arr=[1,2,3,4,5,6,7,8,9,10]
let one=arr.map(
    (el,index)=>{
        console.log(index,arr)
        return el*2
    }
)
console.log(one)


// let arr2=[1,2,3,4,5,6,7,8,9,10]
// let two = arr2.map(
//     (el,index)=>{
//         console.log(index,arr)
//             if(el%2==0)
//                 return el
//     }
// )
// console.log(two)