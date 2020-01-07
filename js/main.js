//DOM Elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

const showAmPm = true;

//Mostrar hora
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //Setar AM e PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //Formato 12h
    hour = hour % 12 || 12;

    //Saída das horas
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1);
}

//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Setar background e saudação
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes();

    if (hour <= 5) {
        //madrugada
        document.body.style.backgroundImage = "url('/imgs/dawn.gif')"
        greeting.innerHTML = `Estão todos dormindo,`
    } else if (hour < 7) {
        //amanhecendo
        document.body.style.backgroundImage = "url('/imgs/dawning.gif')";
        greeting.innerHTML = `O sol está nascendo,`
    } else if (hour < 9) {
        //manhãzinha
        document.body.style = "color: white;";
        document.getElementById('h1').style = "text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;";
        document.getElementById('h2').style = "text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4d68ff, 0 0 40px #4d68ff, 0 0 50px #4d68ff, 0 0 60px #4d68ff, 0 0 70px #4d68ff; opacity: 1;";
        document.getElementById('focus').style = "text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4d68ff, 0 0 40px #4d68ff, 0 0 50px #4d68ff, 0 0 60px #4d68ff, 0 0 70px #4d68ff; opacity: 1;";
        document.getElementById('time').style = "text-shadow: 0 0 20px #fff, 0 0 30px #4dffa6, 0 0 40px #4dffa6, 0 0 50px #4dffa6, 0 0 60px #4dffa6, 0 0 70px #4dffa6, 0 0 80px #4dffa6;";
        document.body.style.backgroundImage = "url('/imgs/day.gif')";
        greeting.innerHTML = `Uma ótima manhã,`
    } else if (hour < 12) {
        //meio-dia
        document.body.style = "color: black;";
        document.body.style.backgroundImage = "url('/imgs/sunny.gif')";
        greeting.innerHTML = `Lindo dia,`
    } else if (hour < 15) {
        //caindo a tarde
        document.body.style.backgroundImage = "url('/imgs/tarde1.gif')";
        greeting.innerHTML = `Esta caindo a tarde,`
    } else if (hour < 17) {
        //caindo a tarde 2
        document.body.style.backgroundImage = "url('/imgs/afternoon.gif')";
        greeting.innerHTML = `Tudo muito calmo,`
    } else if (hour < 19) {
        //anoitecendo
        document.body.style.backgroundImage = "url('/imgs/tarde2.gif')";
        greeting.innerHTML = `Hora de ir pra casa,`
    } else if (hour < 21) {
        //anoitecendo 2
        document.body.style.backgroundImage = "url('/imgs/amanhecendo.gif')";
        greeting.innerHTML = `Boa noite,`
    } else if (hour < 23) {
        //noite (gametime)
        document.body.style.backgroundImage = "url('/imgs/dia.gif')";
        greeting.innerHTML = `Hora de dormir,`
    } else {
        //noite
        document.body.style.backgroundImage = "url('/imgs/anoitecendo.gif')";
        greeting.innerHTML = `Ninguém acordado,`
    }
}

//Rodando
showTime();
setBgGreet();