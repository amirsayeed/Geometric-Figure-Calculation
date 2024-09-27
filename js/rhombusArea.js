function rhombusArea(){
    const getDia1Value = rhombusDiagonal1();
    const getDia2Value = rhombusDiagonal2();

    const area = 0.5*getDia1Value*getDia2Value;
    //console.log("area of the triangle is:",area);
    const areaDislplay = document.getElementById("rhombus-area");
    areaDislplay.innerText = area; 
}

function rhombusDiagonal1(){
    const Dia1Input = document.getElementById("rhombus-diagonal1");
    const dia1 = Dia1Input.value;
    const dia1Value = parseFloat(dia1);
    return dia1Value;
}

function rhombusDiagonal2(){
    const Dia2Input = document.getElementById("rhombus-diagonal2");
    const dia2 = Dia2Input.value;
    const dia2Value = parseFloat(dia2);
    return dia2Value;
}