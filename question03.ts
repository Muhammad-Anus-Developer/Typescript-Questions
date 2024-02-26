let person: string = "Muhammad Anus";

// LOWERCASE
console.log("LOWERCASE:", person.toLowerCase());

// UPPERCASE
console.log("UPPERCASE:", person.toUpperCase());

// titlecase
console.log("titlecase:", person.replace(/\b\w/g,c=> c.toUpperCase()));