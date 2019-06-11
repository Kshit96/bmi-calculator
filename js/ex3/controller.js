import BmiCalculator from './bmiCalculator'

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


    view.onSave(() => {
      const person = {
        name: view.getName(),
        height: view.getBmiHeight(),
        weight: view.getBmiWeight(),
        bmi: view.getBmiValue(),
      }
      view.addPerson(person)
    })
  }

}