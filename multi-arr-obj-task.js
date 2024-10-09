////////  1st solution   ////////
let songs=[]
songs.push({song_name:"YDG", singer:"karanaujla", language:"punjabi"})
songs.push({song_name:"295", singer:"sidhumoosevala", language:"punjabi"})
songs.push({song_name:"taare", singer:"gurnaam bhullar", language:"punjabi"})
songs.push({song_name:"Rich flex", singer:"Saabi Bhinder", language:"punjabi"})
songs.push({song_name:"Attach", singer:"SidhuMooseVala", language:"punjabi"})
console.log(songs)

///method 1
// for (let  song of songs)
//     console.log("song is ", song["song_name"], "singer is ", song["singer"], "language is ", song["language"])
// }

////method 2 
for (let song of songs){
   for (let x in song){
    // console.log(x)
    console.log(x ,"is", song[x])

    }
}
console.log(songs[2]["song_name"])


////////     2nd solution    ////////
let name= [
    [
        ["kiran","meet","jasmeen","surbhi","avii"]
    ]
]

//////// 3rd solution    /////////////

let fooditems={
    veg : {
        w:"wheat",
        c:"cheese"
    },

    nonveg : {
        ck : "chickenkabab",
        ec : "egg curry"
    }
}

console.log(fooditems.veg.c);


///// 4th solution /////
let i_am_array=[]
for(var i=1;i<=20;i++){
    i_am_array.push(i)
}
console.log(i_am_array)

////to print each element of array or traverse
for (let x of i_am_array){
    console.log(x);
}

let teen_guna=[]
for (let x of i_am_array){
    teen_guna.push(x*3)
}
console.log(teen_guna);
 console.log(teen_guna.length);
 console.log("type of teen_guna is ", typeof[teen_guna]);
 console.log("type of i_am_array is ", typeof[i_am_array]);


///// 5th solution /////
let array_forty=[]
for ( var i=1;i<=40;i++){
    array_forty.push(i)
}
console.log(array_forty)
console.log(array_forty.length)

let chotu_array=[]
for (let x of array_forty){
    if(x%3==0){
        chotu_array.push(x)
    }

}
console.log(chotu_array)
console.log(chotu_array.length)


