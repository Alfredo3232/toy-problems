function checkCashRegister(price, cash, cid) {
    const prices = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];
    let change = {
        status : "",
        change : []
    };
    let changeDue = cash - price;


    if (changeDue === 0) {
        change.status = "open";

        return change;
    }
    if (changeDue >= 1) {
        let ind = (changeDue.toString()).length;

        if (ind > 1) {

        } else {

        }
    } else {
        for (let i = 5; i < prices.length; i++) {
            const el = prices[i];

            const res = changeDue / el[1];

            console.log(res);
        }
    }

    return change;
}

checkCashRegister(
    19.5,
    20,
    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]
);