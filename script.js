const colorSelect = document.getElementById("colorSelect");

const button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
    colorSelect.removeChild(colorSelect.selectedOptions[0]);
});