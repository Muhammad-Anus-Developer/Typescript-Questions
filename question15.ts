let guestArr15 : string [] = ["Anus", "Asad", "Raza", "Salman","Noman"];
let canNotAttend : string = "Raza"

console.log (canNotAttend = "Can Not Attend The dinner")

let newGuest : string = "Usama"

guestArr15[guestArr15.indexOf(canNotAttend)] = newGuest;

console.log(guestArr15)

guestArr15.map((items) =>
console.log(`Dear ${items}, You're Invited To The Dinner.`)
);

