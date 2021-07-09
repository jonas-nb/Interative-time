function info() {

    const data = new Date();
    let dataDia = data.toLocaleDateString();
    let datas = document.querySelector("#datas");
    datas.innerHTML = dataDia;

    let day = data.getDay();
    if (day === 0) {
        day = "Domingo"
    } else if (day === 1) {
        day = "Segunda"
    } else if (day === 2) {
        day = "Terça"
    } else if (day === 3) {
        day = "Quarta"
    } else if (day === 4) {
        day = "Quinta"
    } else if (day === 5) {
        day = "Sexta"
    } else {
        day = "Sábado"
    }
    let diaSemana = document.querySelector("#dia-semana").innerHTML = day;

    let sauda = data.getHours();
    if (sauda >= 4 && sauda < 12) {
        sauda = "Bom dia!"
    } else if (sauda >= 12 && sauda < 18) {
        sauda = "Boa tarde!"
    } else {
        sauda = "Boa noite!"
    }

    let saudação = document.querySelector("#saudação").innerHTML = sauda
}
setInterval(info, 1000)

function mostraHora() {
    const data = new Date();
    let hora = data.getHours();
    if (hora < 10) {
        hora = `0${hora}`
    }
    let minuto = data.getMinutes();
    if (minuto < 10) {
        minuto = `0${minuto}`
    }

    let horas = document.querySelector("#horas").innerHTML = `${hora}:${minuto}`

}
setInterval(mostraHora, 1000)

function background() {
   let largura = innerWidth;
    if (largura > 922) {
        const data = new Date();
        let hora = data.getHours();
        //seleção do main onde a imagem irá mudar
        let muda = document.querySelector("main");
        //seleção das  fontes relacionado as informações
        let datas = document.querySelector("#datas");
        let sauda = document.querySelector("#saudação");
        let dia = document.querySelector("#dia-semana");
        //seleção do arco do relogio
        let borda = document.querySelector("#relogio");

        
            if (hora >= 4 && hora < 6) {
                muda.style.backgroundImage = `url(assets/img/manhã1.jpg)`;
            } else if (hora >= 6 && hora < 9) {
                muda.style.backgroundImage = `url(assets/img/manhã2.jpg)`;
            } else if (hora >= 9 && hora < 10) {
                muda.style.backgroundImage = `url(assets/img/manhã3.jpg)`;
                borda.style.border = "#adb5bd solid 5px"
            } else if (hora >= 10 && hora < 12) {
                muda.style.backgroundImage = `url(assets/img/manhã4.jpg)`;
                datas.style.color = "#212529";
                sauda.style.color = "#212529";
                dia.style.color = "#212529";
                datas.style.textShadow = "none";
                sauda.style.textShadow = "none";
                dia.style.textShadow = "none";
            } else if (hora >= 12 && hora < 14) {
                muda.style.backgroundImage = `url(assets/img/tarde1.jpg)`;
            } else if (hora >= 14 && hora < 16) {
                muda.style.backgroundImage = `url(assets/img/tarde2.jpg)`;
                datas.style.color = "#212529";
                sauda.style.color = "#212529";
                dia.style.color = "#212529";
            } else if (hora >= 16 && hora < 18) {
                muda.style.backgroundImage = `url(assets/img/tarde3.jpg)`;
            } else if (hora >= 18 && hora < 21) {
                muda.style.backgroundImage = `url(assets/img/noite1.jpg)`;
            } else if (hora >= 21 && hora < 23) {
                muda.style.backgroundImage = `url(assets/img/noite2.jpeg)`;
            } else {
                muda.style.backgroundImage = `url(assets/img/madrugada1.jpg)`;
            }
        
   } else{
       //nada
   }
        
       

       
    } 

setInterval(background, 1000)
