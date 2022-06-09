function atualizar(){
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    
    mensagem.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if(hora >= 6 && hora < 12){
        imagem.src = './estilo/manha.png'
        document.body.style.background = '#75A3BF'
        document.querySelector('footer').style.color = 'white'
        // document.querySelector('body').style.backgroundImage  = 'url(./estilo/manha-background.png)'
    } else if(hora >= 0 && hora < 6){
        imagem.src = './estilo/madrugada.png'
        // document.body.style.background = '#222426'
        document.querySelector('body').style.backgroundImage = 'url(./estilo/madrugada-background.png)'
        document.querySelector('footer').style.color = 'white'
    } else if(hora >= 12 && hora <= 18){
        imagem.src = './estilo/tarde.png'
        document.body.style.background  = '#A65858'
    } else {
        imagem.src = './estilo/noite.png'
        document.body.style.background = '#024059'
        document.querySelector('footer').style.color = 'white'
        // document.querySelector('body').style.backgroundImage = 'url(./estilo/noite-background.png)' 
    }

}



