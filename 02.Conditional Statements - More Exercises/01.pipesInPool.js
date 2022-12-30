function pipesInPool(input) {
    let volume = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let hours = Number(input[3]);

    let waterP1 = P1 * hours;
    let waterP2 = P2 * hours;
    let totalWater = waterP1 + waterP2;
    let percentPool = (totalWater / volume) * 100;
    let percentP1 = (waterP1 / totalWater) * 100;
    let percentP2 = (waterP2 / totalWater) * 100;

    if (volume >= totalWater) {
        console.log(`The pool is ${percentPool}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${(totalWater - volume).toFixed(2)} liters.`);
    }
}

pipesInPool([100,
100,
100,
2.5]);