
window.onload = () => {
    const arrayImage = ['minero.jpg', 'perro.jpg', 'boya.jpg'];
    document.getElementById('image').src = arrayImage[Math.floor(Math.random()*3)]; 
};

