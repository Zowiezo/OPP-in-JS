// 6 sided dice
class DiceFactory {
    constructor() {
        this.sixSidedDice = [];
    };
    makeDie() {
        for (let ds = 1; ds < 7; ds++) { // ds stands for dice/die sides
            this.sixSidedDice.push(ds);
        };
        let dice = this.sixSidedDice;
        return dice;
    };
};

class DiceTester {
    testDie() {
        let dicefactory = new DiceFactory();
        dicefactory.makeDie();
        dicefactory.sixSidedDice.push(9)
        for (let ds = 1; ds < dicefactory.sixSidedDice.length; ds++) {
            if (dicefactory.sixSidedDice[ds - 1] != ds) {
                throw new Error("dice is not fair")
            };
        };
        return true;
    };
};
let dicetester = new DiceTester();
dicetester.testDie();