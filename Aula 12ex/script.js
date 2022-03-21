function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()


if (hora >=0 && hora <12 ){
    msg.innerHTML = ` Agora são ${hora} horas. Bom dia!`
    img.src = 'fotomanha.png'
    document.body.style.background = 'red'
} else if (hora >=12 && hora <18){
    msg.innerHTML = ` Agora são ${hora} horas. Boa Tarde!`
    img.src = 'fototarde.png'
    document.body.style.background = 'gray'
} else{
    msg.innerHTML = ` Agora são ${hora} horas. Boa Noite!`
    img.src = 'fotonoite.png'
    document.body.style.background = '#194E78'
}

}



