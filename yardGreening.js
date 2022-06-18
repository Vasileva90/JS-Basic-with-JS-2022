function yardGreening(input) {
    let pricePerMeter = 7.61;
    let yardGreeningPerMeter = Number(input[0]);
    let priceYardGreening = pricePerMeter * yardGreeningPerMeter;
    let discount = priceYardGreening * 0.18;
    let totalPrice = priceYardGreening - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);