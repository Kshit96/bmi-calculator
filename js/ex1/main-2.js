const btn = document.querySelector(".calculate")

btn.onclick = () => {
    const height = parseFloat(document.getElementById("bmi-height").value);
    const weight = parseFloat(document.getElementById("bmi-weight").value);

    const resultElm = document.querySelector(".bmi-value");
    resultElm.innerText = weight / (height * height);
};