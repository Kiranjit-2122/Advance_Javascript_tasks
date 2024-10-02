///////////////////////// ARRAYS //////////////////////

////////   Array is  a collection of multiple data   /////////////

let x = [10,20,30,40,50,"string"]
console.log(x);
console.log(x[2]);
console.log(x[5])

///// push -->  add value at end

x.push("kiran","meet")
console.log(x)

///// pop --> delete value from last

x.pop()
console.log(x)

///// shift --> delete first value and shift the value 

x.shift()
console.log(x)

///// unshift --> add value at starting 
x.unshift("hi")
x.unshift(5)
console.log(x)


////// to replace the value 
x[3]=0
console.log(x)