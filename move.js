function move() {
    var carrusel = document.getElementById('carrusel');
    var images = carrusel.getElementsByTagName('img');
    var imageWidth = images[0].clientWidth;
    setInterval(function() {
        carrusel.scrollLeft += 1; // Reduce la cantidad de desplazamiento
        if (carrusel.scrollLeft >= imageWidth) {
            carrusel.appendChild(images[0]);
            carrusel.scrollLeft = 0;
        }
    }, 30); // Aumenta el intervalo de tiempo
}
document.getElementById('efectivo').addEventListener('mouseover', function() {
    confetti.start();

    setTimeout(function() {
        confetti.stop();
    }, 8000);
}); 
window.onload = function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        alert("Lo sentimos, esta página solo está disponible para PC.");
    }
};
