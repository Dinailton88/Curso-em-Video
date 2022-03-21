function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Verique os dados e tente novamente!')
        }
        else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                gênero = 'Homen'
                if (idade >=0 && idade <10){
                    //Criança
                img.setAttribute('src', 'fotomenino.png' )
                } else if (idade <21){
                    //Jovem
                }
                else if (idade <60){
                    //Adulto
                }
                else if (idade >=60){
                    //Idoso
                }

            }
            else if (fsex[1].checked){
                gênero = 'Mulher'
                if (idade >=0 && idade <10){
                    //Criança
                } else if (idade <21){
                    //Jovem
                }
                else if (idade <60){
                    //Adulto
                }
                else if (idade >=60){
                    //Idoso
                }
            }
            res.style.textAlign = 'center' //alinhar texto pelo js
            res.innerHTML = ` Detectamos um ${gênero} de ${idade} anos.`
            res.appendChild(img)//pedir pra imagem aparecer

        }
        
        

}






