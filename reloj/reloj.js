setInterval(()=> {
   let reloj= document.getElementsByClassName("reloj")[0];
   let tiempoActual = new Date();
   let hora = tiempoActual.getHours();
    let minutos = tiempoActual.getMinutes();
    let segundos = tiempoActual.getSeconds();
    if(segundos < 10){
        segundos = "0" + segundos;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    if(hora < 10){
        hora = "0" + hora;
    }
    reloj.innerHTML = `${hora}:${minutos}:${segundos}`;

},1000);