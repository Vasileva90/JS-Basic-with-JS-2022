function readText(input) {
    let index = 0;
    let text = input[index];

    while (text !== "Stop") {
        text = input[index];
        index++;
        if (text === "Stop") {
            break;
        }
        console.log(text);
    }
}

readText(["Sofia",
    "Berlin",
    "Moscow",
    "Athens",
    "Madrid",
    "London",
    "Paris",
    "Stop",
    "AfterStop"]);