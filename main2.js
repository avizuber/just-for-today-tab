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

    const backgrounds = new Array(
        'url(images2/rocio-guillen-bmVs4mDwI3k-unsplash-edited.jpg)',
        'url(images2/cristian-giordano-qtqcSwzekFo-unsplash.jpg)',
        'url(images2/lorenzo-lamonica-PJAXlV_H8-4-unsplash.jpg)'
    );

    const setBackground = () => {
        let date = new Date;
        let currentHour = date.getHours();

        if (currentHour < 7) {
            document.body.style.backgroundImage = backgrounds[2];
        }
        else if (currentHour < 8) {
            document.body.style.backgroundImage = backgrounds[0];
        }
        else if (currentHour < 18) {
            document.body.style.backgroundImage = backgrounds[1];
        }
        else if (currentHour < 19) {
            document.body.style.backgroundImage = backgrounds[0];
        }
        else {
            document.body.style.backgroundImage = backgrounds[2];
        }
    }

    setBackground();

    const timer = setInterval(function () {
        countdown();
    }, 1000);

})();
