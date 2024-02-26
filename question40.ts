function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Argit Singh", "Animal");
let album2 = make_album("Jagjit Singh", "Saher", 14); 
let album3 = make_album("Rahat Fateh Ali Khan", "O re Piya");
console.log(album1);
console.log(album2);
console.log(album3);