import BmiCalculator from "./bmiCalculator";

export default class BmiView {

    constructor(viewElement) {
        this.heightInputElm = viewElement.querySelector("#bmi-height");
        this.weightInputElm = viewElement.querySelector("#bmi-weight");
        this.resultElm = viewElement.querySelector(".bmi-value");
        this.calculateBtn = viewElement.querySelector(".calculate");
    }

    getBmiHeight() {
        return parseFloat(this.heightInputElm.value);
    }

    getBmiWeight() {
        return parseFloat(this.weightInputElm.value);
    }

    setBmiValue(value) {
        this.resultElm.innerText = value;
    }

    onCalculate(calculateBmi) {
        this.calculateBtn.onclick = calculateBmi;
        this.weightInputElm.oninput = calculateBmi;
        this.heightInputElm.oninput = calculateBmi;
    }
}