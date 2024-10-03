 ///// object is a collection of key &   and keys must  be unique


 let obj={
    name:"kiran",
    class:12,
    course:"javascript"

 }

 console.log(obj)
 console.log(obj.name)
 console.log(obj.class)
 console.log(obj.course)

 //// to add new key /////
 obj.regno = 122121
 console.log(obj);

 //// to delete a key /////

 delete obj.regno 
 console.log(obj);

 //// to replace ////

 obj.course="javascript"
 console.log(obj);