
<<<<<<< HEAD
=======
function colorAleatorio() {
    const colors = ["green", "blue", "red"]; //0,1,2
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


function cambioColor() { // cambio el color de todos los h5
    const h5Tags = document.querySelectorAll("h5");

    h5Tags.forEach((h5) => {
        const randomColor = colorAleatorio();
        h5.style.color = randomColor;
    });
}
>>>>>>> samu
