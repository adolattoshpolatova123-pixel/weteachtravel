document.getElementById("lang-uz").onclick = function () {
  alert("UZ ishladi");
};

document.getElementById("lang-en").onclick = function () {
  alert("EN ishladi");
};
document.getElementById("lang-uz").addEventListener("click", () => applyLanguage("uz"));
document.getElementById("lang-en").addEventListener("click", () => applyLanguage("en"));

