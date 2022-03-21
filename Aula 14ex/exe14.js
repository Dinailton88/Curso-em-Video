
function contar(){
    let res = window.document.getElementById('res')
    let inicio = window.document.getElementById('txtini')
    let fim = window.document.getElementById('txtfim')
    let passos = window.document.getElementById('txtpas')
    if (inicio.value.length == 0 || fim.value.length == 0 ||passos.value.length == 0){
        window.alert('[ERRO]Caixa vazia impossivel contar')
       
    }
      
    
    else {
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        let c = i
        if (p <=0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }

        if (i<f){
            //contagem crescente
        while(c <= f){

            res.innerHTML += ` ${c} \u{1F449} `  
            c += p
        }
        }  else {
            //COntagem regressiva
            for(let c = i;c >= f; c -=p){

            res.innerHTML += ` ${c} \u{1F449} `

            }                  
                
        
        }
       
         res.innerHTML +=` \u{1F3C1} `
        
    }
    
    
}

