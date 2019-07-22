// 6 sided dice

describe("dice", () => {
    it("should make a six sided die", () => {
        let dicefactory = new DiceFactory();
        dicefactory.makeDie();
        expect(dicefactory.sixSidedDice.length).toEqual(6);
    });

    it("should return true if dice is fair", () => {
        let dicetester = new DiceTester();
        expect(dicetester.testDie()).toBeTruthy();
    });
});