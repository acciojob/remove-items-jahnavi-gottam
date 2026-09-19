//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", function () {
    colorSelect.remove(colorSelect.selectedIndex);
});