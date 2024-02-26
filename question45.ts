function store_car(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any } } {
    const carInfo = {
        manufacturer,
        model,
        extras: {}
    };

    for (const extra of extras) {
        for (const key in extra) {
            if (extra.hasOwnProperty(key)) {
                carInfo.extras[key] = extra[key];
            }
        }
    }

    return carInfo;
}

const carInfo = store_car('Toyota', 'Grande', { color: 'Grey' }, { features: ['navigation'] });

console.log(carInfo);