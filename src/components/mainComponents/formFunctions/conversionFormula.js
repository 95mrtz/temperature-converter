
import resultText from "./resultText";

function conversionFormula(ingressValue, typeTemp) {

    let resultValue = 0;
    if (typeTemp === "celsius") {
        resultValue = (ingressValue * 1.8) + 32;
    }

    if (typeTemp === "fahrenheit") {
        resultValue = (ingressValue - 32) / 1.8;
    }

    resultValue = Number.isInteger(resultValue) ? resultValue : resultValue.toFixed(1);

    let data = resultText(ingressValue, typeTemp, resultValue);

    return data;
}

  export default conversionFormula;