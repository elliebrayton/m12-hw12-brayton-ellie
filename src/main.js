const myButton = document.getElementById('randomizer');

myButton.addEventListener('click', () => {
    

const doggos = ['Bread Boi', 'Cloud Boi', 'Smol Bean'];

let shuffle = (i, j, k) => {
    for (i = doggos.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = doggos[i]
        doggos[i] = doggos[j]
        doggos[j] = k
        document.getElementById('doggo-type').innerHTML = doggos[0];



if (doggos[0] == 'Bread Boi') {
    document.getElementById('image').src = 'img/bread-boi.jpg';
}   

else if (doggos[0] == 'Cloud Boi') {
    document.getElementById('image').src = 'img/cloud-boi.jpg';
}   
else if (doggos[0] == 'Smol Bean') {
    document.getElementById('image').src = 'img/smol-bean.jpg';
}                                            
};
}; 


shuffle(doggos);
});