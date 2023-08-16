const convertBtn = document.getElementById("convert-btn");
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", function () {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = parseFloat(fahrenheitInput.value);
  
  if (!isNaN(celsiusValue)) {
    const fahrenheitConverted = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitConverted.toFixed(2);
  }
  
  if (!isNaN(fahrenheitValue)) {
    const celsiusConverted = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = celsiusConverted.toFixed(2);
  }
  
  resultDiv.textContent = "Conversion successful!";
});
