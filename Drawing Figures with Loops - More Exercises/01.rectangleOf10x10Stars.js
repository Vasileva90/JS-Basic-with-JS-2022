function rectangleOf10x10Stars() {
    for(let i = 1; i <= 10; i++) {
        let buff = "";
        for(let j = 1; j <= 10; j++) {
            buff += "*";
        }
        console.log(buff);
    } 
}

rectangleOf10x10Stars();