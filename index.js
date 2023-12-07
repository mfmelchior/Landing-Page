var setaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo") /*define a variável Leonardo e chama define como o elemento com id leronardo no codumento*/ 
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")


function RolarParaDireita() {  /*cria uma função chamada RolarParaDireita*/
        Leonardo.style = "display:none" //diz que o Leonardo some quando ativar essa função
        Bruna.style = "display:flex" // diz que a Bruna aparece quando ativar essa função
        setaDireita.style = "display:none" //diz que a seta direita some
        SetaEsquerda.style="display:flex; margin-top:55px" // diz que a seta esquerda aparece
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top: 55px"
    SetaEsquerda.style = "display:none"
}


