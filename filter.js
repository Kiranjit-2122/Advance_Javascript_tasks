let num=[1,2,3,4,5,6,7,8,9,10]
let new_num=num.filter(
    (el)=>{
        if(el%2==0){
       return el
        }
    }
)
console.log(new_num)

let second=num.filter(
    (el,index)=>{
        console.log(el*3);  
    }
)