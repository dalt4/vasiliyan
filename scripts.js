var langSwitch = document.querySelector('.langSwitch');

langSwitch.addEventListener("click", function () {
    var dateToChange = document.querySelectorAll('h1, h3, p');
    for (var i = 0; i < dateToChange.length; i++) {
        dateToChange[i].classList.toggle('hide');
    }
    langSwitch.classList.toggle('invis')
});