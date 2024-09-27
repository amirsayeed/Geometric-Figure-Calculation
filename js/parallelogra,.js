function triangleArea(){
    const getBaseValue = triangleBase();
    const getTriangleValue = triangleHeight();

    const area = 0.5*getBaseValue*getTriangleValue;
    console.log("area of the triangle is:",area);
    const areaDislplay = document.getElementById("triangle-area");
    areaDislplay.innerText = area;
    
}

function triangleBase(){
    const baseInput = document.getElementById("triangle-base");
    const base = baseInput.value;
    const baseValue = parseFloat(base);
    return baseValue;
}

function triangleHeight(){
    const heightInput = document.getElementById("triangle-height");
    const height = heightInput.value;
    const heightValue = parseFloat(height);
    return heightValue;
}