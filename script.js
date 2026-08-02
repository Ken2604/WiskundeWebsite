// Interactive Formule-Check voor VWO 6 Wiskunde B Examen
function checkFormule() {
    const select = document.getElementById("formuleSelect");
    const uitslag = document.getElementById("formuleUitslag");
    const val = select.value;

    if (val === "1") {
        uitslag.innerHTML = "✅ Correct! \\(\\sin^2(\\theta) + \\cos^2(\\theta) = 1\\) (Cirkelvergelijking op de eenheidscirkel).";
    } else if (val === "2") {
        uitslag.innerHTML = "✅ Correct! \\(I = \\pi \\int_{a}^{b} (f(x))^2 \\, dx\\) (Inhoud omwentelingslichaam om de x-as).";
    } else if (val === "3") {
        uitslag.innerHTML = "✅ Correct! \\(v = \\sqrt{(x'(t))^2 + (y'(t))^2}\\) (Grootte van de snelheidsvector).";
    }

    // Herlaad MathJax zodat de LaTeX formule direct netjes getoond wordt
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

console.log("Wiskunde B Examen-checker script geladen!");