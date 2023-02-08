let lista = []
function adicionar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('listn')
    let n = Number(num.value)
    if (num.value.length == 0 || n > 100 || n < 1 && !inLista(num.value)) {
        window.alert('Insira um número válido')
    } else {
        let item = document.createElement('option')
        lista.push(n)
        item.text = `Valor ${n} adicionado.`
        tab.appendChild(item)
        
    }
}

function finalizar() {
    let num = document.getElementById('txtn')
    if(num.value.length == 0) {
        window.alert('Insira um valor antes de finalizar')
    } else{
        var maior = Math.max.apply(null, lista)
        var menor = Math.min.apply(null, lista)
        var soma = 0
        var media = 0
        for( var i = 0; i < lista.length; i++) {
        soma += lista[i]
        }

        res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados <br> <br>
        O maior valor informado foi ${maior} <br> <br>
        O menor valor informado foi ${menor} <br> <br> 
        Somando todos os valores temos ${soma} <br> <br>`
    }
    


}
