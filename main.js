import { backgrounds } from "./backgrounds";
import { quotes } from "./quotes";
    
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
        if (minutesLeft === 60) {
            minutesLeft = 0;
            hoursLeft += hoursLeft;
        }
        if (minutesLeft < 10) {
            minutesLeft = "0" + minutesLeft;
        }
        minutesDiv.innerText = minutesLeft;

        const secondsDiv = getElement("seconds");
        let secondsLeft = 60 - date.getSeconds();
        if (secondsLeft === 60) {
            secondsLeft = 0;
            minutesLeft += minutesLeft;
        }
        if (secondsLeft < 10) {
            secondsLeft = "0" + secondsLeft;
        }
        secondsDiv.innerText = secondsLeft;
    }

    const setBackground = () => {

        let date = new Date;
        let currentHour = date.getHours();
        
        if (currentHour < 7) {
            document.body.style.background = backgrounds[2];
        }
        else if (currentHour < 8) {
            document.body.style.background = backgrounds[0];
        }
        else if (currentHour < 18) {
            document.body.style.background = backgrounds[1];
        }
        else if (currentHour < 19) {
            document.body.style.background = backgrounds[0];
        }
        else {
            document.body.style.background = backgrounds[2];
        }
    }

    const setQuote = () => {

        const quoteDiv = getElement("quote");
        const quoteSourceDiv = getElement("quoteSource");

        let quoteIndex = Math.floor(Math.random() * quotes.length);

        quoteDiv.innerText = quotes[quoteIndex].text;
        quoteSourceDiv.innerText = quotes[quoteIndex].source;
    }

    setBackground();
    setQuote();

    const timer = setInterval(function () {
        countdown();
    }, 1000);

})();
