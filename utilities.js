function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue;
}
function getStringValueById(id){
    const text = document.getElementById(id).innerText;
    const convertText = parseFloat(text);
    return convertText;
}

function setInnertextIdAndValue(id,value){
    document.getElementById(id).innerText = value;
}