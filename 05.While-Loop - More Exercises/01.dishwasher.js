function dishwasher(input) {
    let index = 0;
    let bottles = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let preparation = bottles * 750;
    let charging = 0;
    let plates = 0;
    let countPlates = 0;
    let pots = 0;
    let countPots = 0;
    let isHavePreparation = true;

    while (command !== "End") {
        let dishes = Number(command);
        charging++;

        if (charging % 3 === 0) {
            countPots += dishes;
            pots = dishes * 15;
            preparation -= pots;
        } else {
            countPlates += dishes;
            plates = dishes * 5;
            preparation -= plates;
        }
        if (preparation < 0) {
            console.log(`Not enough detergent, ${Math.abs(preparation)} ml. more necessary!`);
            isHavePreparation = false;
            break;
        }

        command = input[index];
        index++;
    }
    if (isHavePreparation) {
        console.log("Detergent was enough!");
        console.log(`${countPlates} dishes and ${countPots} pots were washed.`);
        console.log(`Leftover detergent ${preparation} ml.`);
    }
}

dishwasher(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30",]);