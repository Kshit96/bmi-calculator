export default class BmiModel {
    constructor() {
        this.bmiList = [];
        this.subscribers = [];
    }

    addBmi(bmiData) {
        bmiList.push(bmiData);
        this.notify();
    }

    register(subscriber) {
        subscribers.push(subscriber)
    }

    notify() {
        subscribers.forEach((subs) => {
            subs.notify(this)
        })
    }
}