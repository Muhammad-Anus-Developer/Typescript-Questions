let guestArr16 : string [] = ["Anus", "Asad", "Raza", "Noman"];
let canNotAttend16 : string = "Raza"

console.log (canNotAttend16 = "Can Not Attend The dinner")

//replace
let newMember:number = guestArr16.indexOf(canNotAttend16);
//Exercise 16 Start
console.log(`I found a bigger dinner table So I invited more guests.`);
//more new guest
let newGuestBeginning: string = "Usman";
guestArr16.unshift(newGuestBeginning);
//middle
let newGuestMiddle: string = "muzammil";
let middleGuest: number = (guestArr16.length/2);
guestArr16.splice(middleGuest,0, newGuestMiddle);
//end 
let newGuestEnd: string = "Ali";
guestArr16.push(newGuestEnd);
//print message
for(let i = 0; i < guestArr16.length; i++){
    console.log(`Hello ${guestArr16[i]}, you are invited to my place for dinner.`);
}