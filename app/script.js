var langSwitch = document.querySelector('.langSwitch');
var monster = document.querySelector('.templateMonster');
var balloon = document.querySelector('.balloon');

var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};

langSwitch.addEventListener("click", function () {
    var dateToChange = document.querySelectorAll('h1, h3, p');
    for (var i = 0; i < dateToChange.length; i++) {
        dateToChange[i].classList.toggle('hide');
    }
    langSwitch.classList.toggle('invis');
    monster.classList.toggle('eng')
});

var balloonFly = function () {
    var coordinateX = getRandomInt(80);
    var coordinateY = getRandomInt(80);
    balloon.style.transition = '20s';
    balloon.style.transform = 'scale(1)';
    balloon.style.top = (coordinateY) + '%';
    balloon.style.left = (coordinateX) + '%';
};

setTimeout('balloonFly()', 5000);
setInterval('balloonFly()', 20000);

var balloonCounter = 0;

balloon.addEventListener('click', function () {
    if (balloonCounter === 2) {
        balloon.style.transition = '.4s';
        balloon.style.transform = 'scale(0)';
        balloonCounter = 0;
        setTimeout('balloonFly()', 5000);
    } else {
        balloonCounter++;
        balloon.style.transition = '.4s';
        balloonFly();
    }
});