import {JSDOM} from "jsdom";
import View from "../js/ex3/view";
import BmiController from "../js/ex3/controller";

describe("view", () => {
    let DOM, document,heightElm, weightElm, resultElm, btn, saveBtn, nameElm;

    beforeAll((done) => {
        JSDOM.fromFile('./bmi-list.html').then((DOM) => {
            document = DOM.window.document;
            nameElm = document.getElementById("name")
            heightElm = document.getElementById("bmi-height");
            weightElm = document.getElementById("bmi-weight");
            resultElm = document.querySelector(".bmi-value");
            btn = document.querySelector(".calculate");
            saveBtn = document.querySelector(".save");
            done()
        });
});

    it("should update the results when calculate is clicked", () => {
        heightElm.value = 1;
        weightElm.value = 2;
        resultElm.innerText = 0;

        const bmiView = new View(document.getElementById("bmi-view"));
        let bmiController = new BmiController(bmiView);
        btn.click();
        saveBtn.click();

        expect(resultElm.innerText).toBe(2);

    });

    it("should update the table with BMI details of person when save is clicked", () => {
        nameElm.value = "Nick";
        heightElm.value = 1;
        weightElm.value = 2;
        resultElm.innerText = 0;

        const bmiView = new View(document.getElementById("bmi-view"));
        let bmiController = new BmiController(bmiView);
        btn.click();
        saveBtn.click();

        let expectedName = document.querySelector("#Nick");
        console.log(expectedName.textContent);
        expect(expectedName.textContent).toBe("Nick");

    });
});