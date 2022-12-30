function uniquePINCodes(input) {
    let firstNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);
 
    for(let a = 2; a <= firstNumMax; a+=2) {
        for(let b = 2; b <= secondNumMax; b++) {
            for(let c = 2; c <= thirdNumMax; c+=2) {
                if(b === 2 || b === 3 || b === 5 || b === 7) {
                    console.log(`${a} ${b} ${c}`);
                }
            }
        }
    }
}

uniquePINCodes([8,
    2,
    8
    ]);