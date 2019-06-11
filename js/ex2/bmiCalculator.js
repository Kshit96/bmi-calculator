export default class BmiCalculator {
    calculate(height, weight) {
        if (height !== 0.0) {
            return (weight / (height * height));
        }
    }
}
