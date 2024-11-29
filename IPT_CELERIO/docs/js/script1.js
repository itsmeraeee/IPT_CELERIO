function calculateMDAS() {
    const expression = document.getElementById("expression").value;

    try {
        const result = new Function("return " + expression)();
        if (isNaN(result)) throw new Error("Invalid Expression");
        
        document.getElementById("calculateResult").textContent = "Result: " + result;
    } catch (error) {
        document.getElementById("calculateResult").textContent = "Invalid Expression";
    }
}

function increaseFontSize() {
    const paragraph = document.getElementById("result");
    let currentSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseFloat(currentSize) + 2) + "px";
}

function decreaseFontSize() {
    const paragraph = document.getElementById("result");
    let currentSize = window.getComputedStyle(paragraph).fontSize;
    paragraph.style.fontSize = (parseFloat(currentSize) - 2) + "px";
}