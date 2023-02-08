function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10 ) {
                //criança
                img.setAttribute('src', 'homemcriança.png')
            } else if (idade > 10 && idade <=12) {
                //adolescente
                img.setAttribute('src', 'homemadoleçente.png')
            } else if (idade > 12 && idade <= 18) {
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade > 18 && idade <= 60) {
                //adulto
                img.setAttribute('src','homemadulto.png')
            } else {
                //velho
                img.setAttribute('src', 'homemvelho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 30) {
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade > 30 && idade <= 60) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //velho
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)


    }
}
