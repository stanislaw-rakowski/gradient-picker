const btn = document.querySelector("button");
const valueOutputDiv = document.querySelector("div");

const backgroundChangeHandler = () => {
    const gradient = `linear-gradient(${getRgbValue()},${getRgbValue()})`;
    document.body.style.background = gradient;
    valueOutputDiv.textContent = gradient;
}

btn.addEventListener('click', backgroundChangeHandler);

const getRgbValue = () => {
    let redColorValue = getRandomNumber();
    let greenColorValue = getRandomNumber();
    let blueColorValue = getRandomNumber();

    let rgbValue = `rgb(${redColorValue},${greenColorValue},${blueColorValue})`;

    return rgbValue;
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 256);
}

backgroundChangeHandler();