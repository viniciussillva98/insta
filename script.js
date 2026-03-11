

let imagem = document.querySelector(".tocaimagem")

function functiontrocaimagem() {

    /*se*/
    if (imagem.style.opacity == 0) { imagem.style.opacity = 1 }

    /*se não*/
    else { imagem.style.opacity = 0 }


}

setInterval(functiontrocaimagem, 2500)