function describeCity(city: string, country: string = 'PK'): void {
    console.log(`${city} is in ${country}.`);
}
describeCity('Karachi', 'Pakistan');
describeCity('New York');
describeCity('Tokyo', 'Japan');