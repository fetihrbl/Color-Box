
function Box({ color, changeColor }) {

    const handleChangeColor = () => {
        changeColor(color);
    }

    return (
        <div
            onClick={handleChangeColor}
            style={{ backgroundColor: color, width: '13em', height: '13em' }}
        />
    )
}

export default Box;