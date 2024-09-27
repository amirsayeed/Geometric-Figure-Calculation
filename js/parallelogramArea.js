function parallelogramArea(){
    const getBaseValue = parallelogramBase();
    const getHeightValue = parallelogramHeight();

    const area = getBaseValue*getHeightValue;
    //console.log("area of the triangle is:",area);
    const areaDislplay = document.getElementById("parallelogram-area");
    areaDislplay.innerText = area;
    
}

function parallelogramBase(){
    const baseInput = document.getElementById("parallelogram-base");
    const base = baseInput.value;
    const baseValue = parseFloat(base);
    return baseValue;
}

function parallelogramHeight(){
    const heightInput = document.getElementById("parallelogram-height");
    const height = heightInput.value;
    const heightValue = parseFloat(height);
    return heightValue;
}