
    let numero = window.document.getElementById('txtadnum')
    let lista = document.querySelector('select#numsel')
    let res = document.querySelector('div#res')
    let valores = []

    function isNumero(n){
        if (Number (n) >= 1 && Number(n) <= 300){
            return true
        }
        else {
            return false
        }
        
    }
    function insLista (n, l){
        if (l.indexOf(Number(n)) != -1){
            return true         
        }
        else {
            return false
        }
    }
    function adicionar (){
    if (isNumero(numero.value) && !insLista(numero.value, valores )){

        valores.push(Number(numero.value))
        let n = Number (numero.value)
        let item = document.createElement('option')
        item.text = ` O valor ${n} foi adicionado a lista `
        item.value =  ` lista ${n} `
        lista.appendChild(item)
        res.innerHTML = ''
       
        }
    else {
        window.alert('Valor invalido ou ja encontrado na lista!')
        }

        numero.value = ""
        numero.focus()
    }

    function analizar(){
        if (valores.length ==0){
            window.alert('Adione valores')
        }
        else {

            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0

            for (let pos in valores){
                soma += valores[pos]
                if (valores [pos] > maior)
                maior = valores[pos]
               if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot

        



            res.innerHTML = ""
            res.innerHTML += ` <p> Ao todo, temos <strong>${tot}</strong> números cadastrados</P> `
            res.innerHTML += `<p> O maior valor informado foi <strong>${maior}</strong></p>`
            res.innerHTML += `<p> O menor valor informado foi <strong>${menor}</strong></p> `
            res.innerHTML += ` <p> Somando tods os valores , temos <strong>${soma}</strong> `
            res.innerHTML += ` <p> A media de todos os valores é <strong>${media}</strong>  `
            
        }


    }





