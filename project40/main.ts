function make_album(artist_name:string,album_title:string,tracks?:number){
    // now make object in which we use "let",  ":" and "{}" and "=" 
    // in first section we write "properties " and in rest section we write the "values" of above given properties

    let album : {artist:string,album:string,tracks?:number}={
        artist:artist_name,
        album:album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;//return mean tha you must save the values of this object in above function 
}
// now we call the function
let Album1 = make_album("majid Gohar","Naatain");

let Album2 = make_album("eesa khailvi","seraiki album",);


let Album3 =make_album("Allah ditta loonat wala","Love songs",100)

console.log(Album1)
console.log(Album2)
console.log(Album3)