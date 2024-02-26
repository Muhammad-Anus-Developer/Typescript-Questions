function city_country42(city: string, country: string): string {
    return `${city}, ${country}`;
}

function show_magicians42(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicianNames: string[] = ['Harry Houdini', 'David Blaine', 'Doug Henning', 'Dai Vernon'];

let location_1 = city_country42('Karachi', 'Pakistan');
let location_2 = city_country42('Istanbul', 'Turkey');
let location_3 = city_country42('Tokyo', 'Japan');

console.log(location_1);
console.log(location_2);
console.log(location_3);

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
    return magicians;
}

magicianNames = make_great(magicianNames);
show_magicians42(magicianNames);