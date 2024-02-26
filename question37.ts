function make_shirt37(size: string = 'L', message: string = 'I love TS'): void {
    console.log(`Shirt size: ${size.toUpperCase()}`);
    console.log(`Message on the shirt: ${message}`);
}

make_shirt37();

make_shirt37('M');

make_shirt37('S', "Hello, It's Me");
