function cinema(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;
    let places = rows * columns;

    if(typeProjection == "Premiere"){
       price = 12.00;
    } else if(typeProjection == "Normal"){
        price = 7.50;
    } else if(typeProjection == "Discount") {
        price = 5.00;
    }
    let totalPrice = places * price;
    console.log(`${totalPrice.toFixed(2)} leva`);
}

cinema(["Discount",
"12",
"30"]);