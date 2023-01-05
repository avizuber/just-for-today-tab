(function () {
    'use strict';

    const getElement = id => {
        return document.getElementById(id);
    }

    const countdown = () => {

        let date = new Date();

        const hoursDiv = getElement("hours");
        let hoursLeft = 23 - date.getHours();
        if (hoursLeft < 10) {
            hoursLeft = "0" + hoursLeft;
        }
        hoursDiv.innerText = hoursLeft;

        const minutesDiv = getElement("minutes");
        let minutesLeft = 60 - date.getMinutes();
        if (minutesLeft < 10) {
            minutesLeft = "0" + minutesLeft;
        }
        if (minutesLeft === 60) {
            hoursLeft += hoursLeft;
        }
        minutesDiv.innerText = minutesLeft;

        const secondsDiv = getElement("seconds");
        let secondsLeft = 60 - date.getSeconds();
        if (secondsLeft < 10) {
            secondsLeft = "0" + secondsLeft;
        }
        if (secondsLeft === 60) {
            minutesLeft += minutesLeft;
        }
        secondsDiv.innerText = secondsLeft;
    }

    const timer = setInterval(function () {
        countdown();
    }, 1000);

})();
