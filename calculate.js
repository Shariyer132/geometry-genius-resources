function setNewTotalValue(elementId, newValue) {
    const finalvalue = document.getElementById(elementId);
    finalvalue.innerText = newValue;
    return finalvalue;
}    

function calculateTriangleValue() {
    const baseInputField = document.getElementById('base-input-field');
    const baseInputFieldValueString = baseInputField.value;
    const baseInputFieldValue = parseFloat(baseInputFieldValueString);

    const heightField = document.getElementById('height-field');
    const heightFieldValueString = heightField.value;
    const heightFieldValue = parseFloat(heightFieldValueString);

    const totalValue = 0.5 * baseInputFieldValue * heightFieldValue;
    const AreaTotalValue = setNewTotalValue('triangle-value', totalValue);
}