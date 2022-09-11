// const btn = document.querySelector('#btn');        
// const radioButtons = document.querySelectorAll('input[name="group"]');
// btn.addEventListener("click", () => {
//     let selectedSize;
//     for (const radioButton of radioButtons) {
//         if (radioButton.checked) {
//             selectedSize = radioButton.value;
//             break;
//         }
//     }
//     // show the output:
//     output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
// });

function verificarRadio() {
    var decimal = document.getElementById("iptDecimal").checked;
    var binario = document.getElementById("iptBinario").checked;
    var octal = document.getElementById("iptOctal").checked;
    var hexadecimal = document.getElementById("iptHexadecimal").checked;

    var valor = Number(iptValor.value);

    
    if (decimal == true) {
        let baseOct = valor.toString(8);
        let baseHexa = valor.toString(16);
        let baseBin = valor.toString(2);

        output.innerHTML = `Valor base (decimal) = ${valor}<br>Binário = ${baseBin}<br>Octal = ${baseOct}<br>Hexadecimal = ${baseHexa}`
        
    }else if (binario == true) {
        // valor1 = Number(parseInt(valor, 2));
        let baseOct = valor1.toString(8);
        let baseHexa = valor1.toString(16);
        let baseDec = valor1.toString(10);

        output.innerHTML = `Valor base (binário) = ${valor}<br>Decimal = ${baseDec}<br>Octal = ${baseOct}<br>Hexadecimal = ${baseHexa}`
    }


}