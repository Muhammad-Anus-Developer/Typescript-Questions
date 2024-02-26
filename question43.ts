function make_great43(magicians: string[]): string[] {
    return magicians.map(magician => "Great " + magician);
}

function show_magicians43(magicians: string[]): void {
    console.log(magicians.join(', '));
}
let originalMagicians: string[] = ["Dai Vernon", "Harry Houdini", "David Blaine"];
const greatMagiciansArray: string[] = make_great43(originalMagicians);
console.log("Original Magicians:");
show_magicians43(originalMagicians);
console.log("Great Magicians:");
show_magicians43(greatMagiciansArray);