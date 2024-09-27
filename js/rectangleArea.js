function rectangleArea(){
    const getWidthValue = rectangleWidth();
    const getLengthValue = rectangleLength();

    const area = getWidthValue*getLengthValue;
    //console.log("area of the triangle is:",area);
    const areaDislplay = document.getElementById("rectangle-area");
    areaDislplay.innerText = area; 
}

function rectangleWidth(){
    const widthInput = document.getElementById("rectangle-width");
    const width = widthInput.value;
    const widthValue = parseFloat(width);
    return widthValue;
}

function rectangleLength(){
    const lengthInput = document.getElementById("rectangle-length");
    const length = lengthInput.value;
    const lengthValue = parseFloat(length);
    return lengthValue;
}