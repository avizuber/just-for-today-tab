    (function () {
    'use strict';

    const backgrounds = [
        'url(images/jason-blackeye-byqgHC0XFME-unsplash.jpg)',
        'url(images/cristian-giordano-qtqcSwzekFo-unsplash.jpg)',
        'url(images/lorenzo-lamonica-PJAXlV_H8-4-unsplash.jpg)'
    ];


    const quotes = [
        {text: `“Just believe in yourself. Even if you don’t, pretend that you do and, at some point, you will.”`,  source: `- Venus Williams`},
        {text: `“Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.”`, source: `- Christian D. Larson`},
        {text: `“Self-belief and hard work will always earn you success.”`, source: `- Virat Kohli`},
        {text: `“If you think you can do a thing or think you can’t do a thing, you’re right.”` , source: `- Henry Ford`},
        {text: `“Don’t let what you cannot do interfere with what you can do.”`, source: `- John Wooden`},
        {text: `“Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.”`, source: `- Chantal Sutherland`},
        {text: `“Keep your dreams alive. Understand to achieve anything requires faith and belief in yourself, vision, hard work, determination, and dedication. Remember all things are possible for those who believe.”`, source: `- Gail Devers`},
        {text: `“Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.”`, source: `- John Maxwell`},
        {text: `“If you don’t sacrifice for what you want, what you want becomes the sacrifice.”`, source: `- Unknown`},
        {text: `“Life is never made unbearable by circumstance, but only by lack of meaning and purpose.”`, source: `- Viktor Frankl`},
        {text:`“Forget all the reasons it won’t work and believe the one reason that it will.”`, source: `― Unknown`},
        {text:`“Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.”`, source: `- Unkown`},
        {text: `“Fear, inherently, is not meant to limit you. Fear is the brain’s way of saying that there is something important for you to overcome.”`, source: `- Unknown`},
        {text: `“I don’t measure a man’s success by how high he climbs, but how high he bounces when he hits the bottom.”`, source: `- General George S. Patton`}
    ]

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
