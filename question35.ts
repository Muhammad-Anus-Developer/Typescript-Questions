const animals: string[] = ['dog', 'cat', 'rabbit'];

console.log("Animal names:");
for (const animal of animals) {
    console.log(animal);
}

console.log("\nAnimal statements:");
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");