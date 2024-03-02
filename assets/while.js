// const cats = ["Lion","Zebra","Bufallo"]

// let myFavoriteCats = "My favorite wild animals are ";

// let i = 0;
// while ( i < cats.length){
//     if (i === cats.length - 1){
//         myFavoriteCats += ` and ${cats[i]}.`;
//     }
//     else{
//         myFavoriteCats += `${cats[i]},`;
//     }

//     i++
// }
 
const cats = ["Lion","Zebra","Bufallo"]

let myFavoriteCats = "My favorite wild animals are ";

let i = 0;
  do{
    if (i === cats.length - 1){
        myFavoriteCats += ` and ${cats[i]}.`;
    }
    else{
        myFavoriteCats += `${cats[i]},`;
    }

    i++
}while ( i < cats.length)