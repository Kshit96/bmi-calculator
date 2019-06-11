import BmiView from "./view";
import BmiController from './controller'

window.onload = () => {
    let bmiView = new BmiView(document.getElementById("bmi-view"))
    new BmiController(bmiView);
};
