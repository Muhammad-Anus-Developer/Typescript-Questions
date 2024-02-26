let guestArr17 : string [] = ["Anus", "Asad", "Raza", "Noman"];

console.log(`I'm sorry to say that, but the new dinner table won't arrive in time, and I can only invite two people for dinner.`);

// Remove guests
while (guestArr17.length > 2) {
    let removedGuest = guestArr17.pop();
    console.log(`I'm so sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print messages to the two people still on the list
for (let i = 0; i < guestArr17.length; i++) {
    console.log(`Hello ${guestArr17[i]}, You are still invited to my place for dinner.`);
}

// Print the remaining guests at the end
console.log(`Guests who are still coming:`, guestArr17);

guestArr17.pop();
guestArr17.pop();

// Printing The Final List To Confirm It's Empty
console.log("Final Guests List:", guestArr17);