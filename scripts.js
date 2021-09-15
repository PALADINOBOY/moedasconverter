function Converter() {
    var valorElemento= document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    
    var valorEmReal = valorEmRealNumerico / 5
    console.log(valorEmReal);

    var ElementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Dolar é $" + valorEmReal
    ElementoValorConvertido.innerHTML = valorConvertido

}

function ConverterBT() {
    var valorElemento= document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    
    var valorEmBTC = valorEmRealNumerico / 10
    var valorEmReal = valorEmRealNumerico / 5
    console.log(valorEmReal);

    var ElementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Dolar é $" + valorEmReal

    var ElementoBTC = document.getElementById("valorBTC")
    var valorBTC = "O resultado em BTC é $" + valorEmBTC
    ElementoBTC.innerHTML = valorBTC
}

