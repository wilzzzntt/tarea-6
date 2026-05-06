function calcular() {
    // 1. Obtener valores [cite: 177]
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;

    // 2. Validar entrada (La raíz solo necesita el primer número) [cite: 181]
    if (isNaN(num1) && operacion !== "raiz") {
        document.getElementById("resultado").innerHTML = "✘ Ingresa números válidos";
        return;
    }

    // 3. Calcular según operación [cite: 184]
    let resultado;

    switch(operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                document.getElementById("resultado").innerHTML = "✘ No se puede dividir por cero";
                return;
            }
            resultado = num1 / num2;
            break;
        case "potencia":
            // Eleva num1 a la potencia de num2 
            resultado = Math.pow(num1, num2);
            break;
        case "raiz":
            // Calcula la raíz cuadrada de num1 
            if (num1 < 0) {
                document.getElementById("resultado").innerHTML = "✘ Raíz negativa no permitida";
                return;
            }
            resultado = Math.sqrt(num1);
            break;
        default:
            resultado = "Operación inválida";
    }

    // 4. Mostrar resultado [cite: 202]
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado.toFixed(2)}`;
}