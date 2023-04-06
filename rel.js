

function relogio(){

    var img = document.getElementById("imagem");

    const espacoRelogio = document.querySelector(".relogio");

    const horaAgora = new Date();

    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();

    //const formatoHora = horas.toString().padStart(2, "0");
    const formatoHora = 7

    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");


    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;
    
    const frase = document.querySelector(".frase")
//Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.
    dia = new Array ('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-Feira', 'Sexta-feira', 'Sábado');

    mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio' ,'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro','Novembro', 'Dezembro');

    hoje = new Date ()

//usa se crase para se usar cifrão/ coringas
    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate(). toString().padStart(2,0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`


    if(formatoHora >= 00 && formatoHora <= 12 ){ 

        document.body.style.backgroundImage = 'url(https://c.wallhere.com/photos/3f/19/futuristic_cityscape_science_fiction-1590161.jpg!d)'


        img.src = "https://static.vecteezy.com/system/resources/previews/010/856/650/original/a-cup-of-coffee-with-coffee-beans-free-png.png"

        document.body.style.backgroundSize = 'cover' ;

         
       
    }

    else if( formatoHora >= 12 && formatoHora <=18){
        document.body.style.backgroundImage = 'url(https://static.vecteezy.com/system/resources/previews/011/914/859/original/tropical-beach-with-palm-trees-and-ocean-with-sun-reflection-summer-vacation-or-resort-at-sunset-island-with-plants-illustration-vector.jpg)'

        document.body.style.backgroundSize = 'cover' ;

        img.src = "https://static.vecteezy.com/system/resources/previews/009/344/707/non_2x/sun-transparent-background-free-png.png"

        
    }

    else {
        document.body.style.backgroundImage = 'url(https://c.wallhere.com/photos/ec/07/artwork_futuristic_city_night-101490.jpg!d)'

        document.body.style.backgroundSize = 'cover' ;

        document.body.style.color = 'rgb(240, 248, 255)';

        img.src = "https://static.vecteezy.com/system/resources/previews/001/189/147/original/moon-crescent-png.png"

    
    }

}

setInterval(relogio, 1000)


    let tituloDinamico = document.title;
    window.addEventListener("blur", () => {
      document.title = "  EI VOLTA AQUI :D"
    })

    window.addEventListener("focus", () => {
      document.title = tituloDinamico
    })
