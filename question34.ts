let myFavPizza:string[] = ["Cheese", "Afghani", "Fajita"];
for(let i=0; i<myFavPizza.length; i++){
    console.log(myFavPizza[i]);
}
for (const pizza of myFavPizza){
    console.log(`I like ${pizza} Pizza.`);
}
console.log("I really love pizza!");
