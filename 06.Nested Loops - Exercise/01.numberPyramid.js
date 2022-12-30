function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;

    for (let i = 1; i <= n; i++) {
        let prinCurrentLine = "";
        for (let j = 1; j <= i; j++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            prinCurrentLine = prinCurrentLine + current + " ";
            current++;
        }
        console.log(prinCurrentLine);
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["15"]);