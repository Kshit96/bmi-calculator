export default class BmiView {

    constructor(viewElement) {
        this.nameInputElm = viewElement.querySelector("#name");
        this.heightInputElm = viewElement.querySelector("#bmi-height");
        this.weightInputElm = viewElement.querySelector("#bmi-weight");
        this.resultElm = viewElement.querySelector(".bmi-value");
        this.saveBtn = viewElement.querySelector(".save");
        this.bmiTable = viewElement.querySelector("#bmi-table");
    }

    getBmiHeight() {
        return parseFloat(this.heightInputElm.value);
    }

    getBmiWeight() {
        return parseFloat(this.weightInputElm.value);
    }

    getName(){
        return this.nameInputElm.value;
    }


    setBmiValue(value) {
        this.resultElm.innerText = value;
    }

    getBmiValue() {
        return this.resultElm.innerText;
    }


    addPerson(person) {
        this.bmiTable.body.appendChild(this.createTableRow(person))
    }

    createTableRow(person) {
        const tableRow = document.createElement('tr');
        let nameCell = this.createElmWithVal('td',person.name);
        let heightCell = this.createElmWithVal('td',person.height);
        let widthCell = this.createElmWithVal('td',person.weight);
        let bmiCell = this.createElmWithVal('td',person.bmi);
        tableRow.appendChild(nameCell);
        tableRow.appendChild(heightCell);
        tableRow.appendChild(widthCell);
        tableRow.appendChild(bmiCell);
        return tableRow;
    }

    createElmWithVal(elm,val) {
        const newElm = document.createElement(elm);
        newElm.innerText = val;
        return newElm;
    }


    onCalculate(calculateBmi) {
        this.weightInputElm.oninput = calculateBmi;
        this.heightInputElm.oninput = calculateBmi;
    }

    onSave(addPersonCallback) {
        this.saveBtn.onclick = addPersonCallback
    }

}
