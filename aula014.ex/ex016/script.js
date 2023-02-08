function contar() {
    let fim = document.getElementById('textf')
    let passo = document.getElementById('textp')
    let ini = document.getElementById('texti')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Insira os dados faltantes")
    } else {
        res.innerHTML = 'Contando...'
        let f = Number(fim.value)
        let i = Number(ini.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo inválido')
        }
        if (i < f) {
        for(c = i; c <= f; c += p) {
            //Contagem crescente
            res.innerHTML += `${c} `
        }
    } else {
        for(c = i; c >= f; c -= p){
            //Contagem regressiva
            res.innerHTML += `${c} `
        }
    }
    }
}
