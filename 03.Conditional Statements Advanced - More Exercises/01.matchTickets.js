function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numberOfPeople = Number(input[2]);

    let priceVIP = 499.99;
    let priceNormal = 249.99;
    let moneyForTransport = 0;

    if (numberOfPeople >= 1 && numberOfPeople <= 4) {
        moneyForTransport = budget * 0.75;
    } else if (numberOfPeople >= 5 && numberOfPeople <= 9) {
        moneyForTransport = budget * 0.60;
    } else if (numberOfPeople >= 10 && numberOfPeople <= 24) {
        moneyForTransport = budget * 0.50;
    } else if (numberOfPeople >= 25 && numberOfPeople <= 49) {
        moneyForTransport = budget * 0.40;
    } else if (numberOfPeople >= 50) {
        moneyForTransport = budget * 0.25;
    }

    let remainingMoney = budget - moneyForTransport;
    let ticketsPrice = 0;

    if (category == "VIP") {
        ticketsPrice = numberOfPeople * priceVIP;
    } else if (category == "Normal") {
        ticketsPrice = numberOfPeople * priceNormal;
    }

    let diff = Math.abs(remainingMoney - ticketsPrice);
    if (remainingMoney >= ticketsPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else if(remainingMoney < ticketsPrice) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}

matchTickets([30000,
    "VIP",
    49]);