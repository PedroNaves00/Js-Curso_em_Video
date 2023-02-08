function gerar() {
    let num = document.getElementById('textn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Dados inválidos')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ``
        for(c = 1; c <= 10; c += 1){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = `tab${c}`
        }
    }
}
