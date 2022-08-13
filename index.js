/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById("convert-el");
const convertBtn = document.getElementById('convert-btn');
const lengthEl = document.getElementById('length-el');
const volumeEl = document.getElementById('volume-el');
const massEl = document.getElementById('mass-el');

const zeroValue = 0

lengthEl.textContent = `${zeroValue} meters = ${zeroValue} feets | ${zeroValue} feets = ${zeroValue} meters`;
volumeEl.textContent = `${zeroValue} liters = ${zeroValue} gallons | ${zeroValue} gallons = ${zeroValue} liters`;
massEl.textContent = `${zeroValue} kilogramss = ${zeroValue} pounds | ${zeroValue} pounds = ${zeroValue} kilograms`;

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

convertBtn.addEventListener('click', () => {
    console.log('convert');
    let baseValue = convertEl.value;

    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feets | ${baseValue} feets = ${(baseValue / meterToFeet).toFixed(3)} meters`;
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`;
    massEl.textContent = `${baseValue} kilogramss = ${(baseValue * kilogramToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kilogramToPound).toFixed(3)} kilograms`;

} );