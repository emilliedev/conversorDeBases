function verificarRadio() {
    var valor = Number(iptValor.value);

        let baseOct = valor.toString(8);
        let baseHexa = valor.toString(16);
        let baseBin = valor.toString(2);

        output1.innerHTML = `<span class="bold whiteText bigTinyText">Binário</span> <br><span class="bold blackText bigTinyText">${baseBin}</span>`

        output2.innerHTML = `<span class="bold whiteText bigTinyText">Octal</span> <br><span class="bold blackText bigTinyText">${baseOct}</span>`

        output3.innerHTML = `<span class="bold whiteText bigTinyText">Hexadecimal</span><br><span class="bold blackText bigTinyText">${baseHexa}</span>`

}