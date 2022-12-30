function backToThePast(input) {
    let moneyHeritage = Number(input[0]);
    let year = Number(input[1]);

    let age = 18;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            moneyHeritage -= 12000;
            age++;
        } else {
            moneyHeritage -= (12000 + (50 * age));
            age++;
        }
    }

    if (moneyHeritage >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${moneyHeritage.toFixed(2)} dollars left.`);
    } else if (moneyHeritage < 0) {
        console.log(`He will need ${Math.abs(moneyHeritage).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["100000.15",
    "1808"]);