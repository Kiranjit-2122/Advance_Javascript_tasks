///////////////////////// ARRAYS //////////////////////

////////   Array is  a collection of multiple data   /////////////

let x = [10,20,30,40,50,"string"]
console.log(x);
console.log(x[2]);
console.log(x[5])

///// push -->  Add values at the end

x.push("kiran","meet")
console.log(x)

///// pop --> Remove the last value

x.pop()
console.log(x)

///// shift --> Remove the first value and shift the array

x.shift()
console.log(x)

///// unshift --> Add values at the beginning
x.unshift("hi")
x.unshift(5)
console.log(x)


////// to replace the value 
x[3]=0
console.log(x)
