function city_country(city:string, country:string) : string{
    return `${city}, ${country}`;
}
let location1 = city_country('Karachi', 'Pakistan');
let location2 = city_country('Istanbul', 'Turkey');
let location3 = city_country('Tokyo', 'Japan');
console.log(location1);
console.log(location2);
console.log(location3);