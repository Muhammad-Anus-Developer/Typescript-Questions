let users: string[] = [];

let ages: number = 18;

if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    if (ages < 2) {
        console.log("The Person is a Baby.");
    } else if (ages >= 2 && ages < 4) {
        console.log("The Person is a Toddler.");
    } else if (ages >= 4 && ages < 13) {
        console.log("The Person is a Kid.");
    } else if (ages >= 13 && ages < 20) {
        console.log("The Person is a Teenager.");
    } else if (ages >= 20 && ages < 65) {
        console.log("The Person is an Adult.");
    } else {
        console.log("The Person is an Elder.");
    }
}