const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const weekdays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const ofertaFecha = document.querySelector('.oferta-fecha');
const countdown = document.querySelector('.countdown');
const items = document.querySelectorAll('.countdown-format h4');
//console.log(items);

/** GETTING DATE **/
let futureDate = new Date(2022,6,25,18,00,00);
//console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

ofertaFecha.textContent = `La oferta termina el día ${date} de ${month} de ${year} a las ${hours}pm`;

//FUTURE TIME IN MS
const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const todayDate = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1h = 60min
    // 1d = 24h

    //Values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    //calc all values
    let days = todayDate / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((todayDate % oneDay) / oneHour);
    let minutes = Math.floor((todayDate % oneHour) / oneMinute);
    let seconds = Math.floor((todayDate % oneMinute) / 1000); 

    //save values in an array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return (item = `0${item}`);
        } else {
            return item;
        }
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });
}

// interval
let interval = setInterval(getRemainingTime, 1000);

getRemainingTime();