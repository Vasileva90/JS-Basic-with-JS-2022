function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;

    let command = input[index];
    let bookCounter = 0;
    let isBookFound = false;

    while (command !== "No More Books") {
        let book = command;
        index++;

        if (book === favouriteBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            isBookFound = true;
            break;
        }
        bookCounter++;
        command = input[index];
    }
    if (!isBookFound) {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
;