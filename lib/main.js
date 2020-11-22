'use strict';

var myButton = document.getElementById('randomizer');

myButton.addEventListener('click', function () {

    var doggos = ['', 'Bread Boi', 'Cloud Boi', 'Smol Bean', 'Heckin Concerned Doggo', 'Thicc Boi', 'Pupperina', 'Long Boi', 'Shibe', 'Woofer', 'Wrinkly Boi'];

    var shuffle = function shuffle(i, j, k) {
        for (i = doggos.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * i);
            k = doggos[i];
            doggos[i] = doggos[j];
            doggos[j] = k;
            document.getElementById('doggo-type').innerHTML = doggos[0];

            if (doggos[0] == 'Bread Boi') {
                document.getElementById('image').src = 'img/bread-boi.jpg';
            } else if (doggos[0] == 'Cloud Boi') {
                document.getElementById('image').src = 'img/cloud-boi.jpg';
            } else if (doggos[0] == 'Smol Bean') {
                document.getElementById('image').src = 'img/smol-bean.jpg';
            } else if (doggos[0] == 'Long Boi') {
                document.getElementById('image').src = 'img/long-boi.jpg';
            } else if (doggos[0] == 'Heckin Concerned Doggo') {
                document.getElementById('image').src = 'img/heckin-concerned.jpg';
            } else if (doggos[0] == 'Thicc Boi') {
                document.getElementById('image').src = 'img/thicc-boi.jpg';
            } else if (doggos[0] == 'Pupperina') {
                document.getElementById('image').src = 'img/pupperina.jpg';
            } else if (doggos[0] == 'Long Boi') {
                document.getElementById('image').src = 'img/long-boi.jpeg';
            } else if (doggos[0] == 'Shibe') {
                document.getElementById('image').src = 'img/shibe.jpg';
            } else if (doggos[0] == 'Woofer') {
                document.getElementById('image').src = 'img/woofer.jpg';
            } else if (doggos[0] == 'Wrinkly Boi') {
                document.getElementById('image').src = 'img/wrinkly-boi.jpg';
            }
        };
    };

    shuffle(doggos);
});