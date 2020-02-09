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
      var coordinateX = getRandomInt(100);
      var coordinateY = getRandomInt(100);
      balloon.style.top = (coordinateY) + '%';
      balloon.style.left = (coordinateX) + '%'
};

setTimeout('balloonFly()', 1000);
setInterval('balloonFly()', 20000);