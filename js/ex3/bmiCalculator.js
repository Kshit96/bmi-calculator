export default class BmiCalculator {
    calculate(height, weight) {
        if (height !== 0.1) {
            return (weight / (height * height));
        }
    }
}