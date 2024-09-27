function pentagonArea(){
    const getPenValue = pentagonPen();
    const getBaseValue = pentagonBase();

    const area = 0.5*getPenValue*getBaseValue;
    //console.log("area of the triangle is:",area);
    const areaDislplay = document.getElementById("pentagon-area");
    areaDislplay.innerText = area; 
}

function pentagonPen(){
    const PenInput = document.getElementById("pentagon-pen");
    const pen = PenInput.value;
    const penValue = parseFloat(pen);
    return penValue;
}

function pentagonBase(){
    const BaseInput = document.getElementById("pentagon-base");
    const base = BaseInput.value;
    const baseValue = parseFloat(base);
    return baseValue;
}