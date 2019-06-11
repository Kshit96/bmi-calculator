import BmiView from "./view";
import BmiController from '../ex3/controller'

window.onload = () => {
    const bmiView = new BmiView(document.getElementById("bmi-view"))
    new BmiController(bmiView)
};
