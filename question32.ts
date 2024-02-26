let currentUsers:string[] = [`admin`, `anasafzal779`, `anu779`, `anus779`,`adminboy`];
let newUsers:string[] = ["anasafzal779", "asad324", "johndoe", "aliTaj", "hamzaAyub"];
for(let i = 0; i<newUsers.length; i++){
    if(currentUsers.includes(newUsers[i])){
        console.log(`Sorry, '${newUsers[i]}' is already in use. Please choose another username.`);
    } 
}