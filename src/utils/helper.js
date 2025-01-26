
const rgbValue = () => {
    return Math.floor(Math.random() * 256);
}

const generateColors = (num) => {
    let colors = [];
    for (let index = 0; index < num; index++) {
        const red = rgbValue();
        const blue = rgbValue();
        const green = rgbValue();
        colors.push(`rgb(${red},${blue},${green})`);
    }
    return colors;
}

export { rgbValue, generateColors } 