import bmiCalculator from "../js/ex2/bmiCalculator";
/*
import BmiCalculator from "../js/ex2/bmiCalculator";

describe("bmiCalculator", () => {
    const bmiCalculator = new BmiCalculator();
    describe("nested test",() => {
        expect(bmiCalculator.calculate(1,2)).toBe(2);
    });
    it("should do blah",()=>{
        expect(bmiCalculator.calculate(1,2)).toBe(2);
    })
});*/

describe("bmiCalculator", () => {
    describe("nested test",() => {
        expect(bmiCalculator(1,2)).toBe(2);
    });
    it("should do blah",()=>{
        expect(bmiCalculator(1,2)).toBe(2);
    })
});