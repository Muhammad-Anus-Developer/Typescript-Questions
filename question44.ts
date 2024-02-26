function make_sandwich(items: string[]): void {
    console.log("Sandwich Making:");
    if(items.length == 0){
        console.log("Choose Items!")
    } else {
    console.log("Items:", items.join(', '));
}
}
make_sandwich(["Beef", "Tomato", "Cheese"]);
make_sandwich(["Cucumber", "Zinger"]);
make_sandwich([]); 