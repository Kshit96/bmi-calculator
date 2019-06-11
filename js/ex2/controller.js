import BmiCalculator from "./bmiCalculator";

export default class BmiController {

  constructor (view) {
    this.setupView(view)
  }

  setupView (view) {
    view.onCalculate(() => {
      let value = new BmiCalculator().calculate(view.getBmiHeight(),
        view.getBmiWeight())
      view.setBmiValue(value)
    })
  }
}