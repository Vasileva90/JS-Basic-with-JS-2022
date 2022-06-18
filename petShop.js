function petShop(input) {
    let dogFood = 2.50;
    let catFood = 4;

    let dogFoodCount = input[0];
    let catFoodCount = input[1];
    let totalSum = (dogFood * dogFoodCount) + (catFood * catFoodCount);
    console.log(`${totalSum} lv.`);
}

petShop(
    ["5 ",
        "4 "]
);