function ellipseArea(){
    const getMajorValue = ellipseSemiMajor();
    const getMinorValue = ellipseSemiMinor();

    const area = 3.14*getMajorValue*getMinorValue;
    //console.log("area of the triangle is:",area);
    const areaDislplay = document.getElementById("ellipse-area");
    areaDislplay.innerText = area.toFixed(2); 
}

function ellipseSemiMajor(){
    const MajorInput = document.getElementById("ellipse-semi-major-axis");
    const major = MajorInput.value;
    const majorValue = parseFloat(major);
    return majorValue;
}

function ellipseSemiMinor(){
    const MinorInput = document.getElementById("ellipse-semi-minor-axis");
    const minor = MinorInput.value;
    const minorValue = parseFloat(minor);
    return minorValue;
}