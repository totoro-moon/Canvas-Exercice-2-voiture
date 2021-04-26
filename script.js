var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
width = window.innerWidth;
height = window.innerHeight;

canvas.width = width;
canvas.height = height;


function voiture() {
    // rectancle du bas de la voiture
    context.fillStyle = "#000";
    context.fillRect(300, 400, 400, 100);
    // rectancle du haut de la voiture
    context.fillStyle = "#000";
    context.fillRect(400, 330, 220, 70);
    // rectancle de gauche de la voiture
    context.fillStyle = "#ebf1f1";
    context.fillRect(420, 340, 95, 60);
    // rectancle de droite de la voiture
    context.fillStyle = "#ebf1f1";
    context.fillRect(530, 340, 70, 60);
    // rectancle de deco de la voiture
    context.fillStyle = "#ffff";
    context.fillRect(300, 460, 400, 10);
    context.fillStyle = "#ffff";
    context.fillRect(300, 475, 400, 5);
    context.fillStyle = "#ffff";
    context.fillRect(300, 450, 400, 5);
}
voiture();



// roue de gauche
context.beginPath();
context.arc(380, 500, 40, 0, 2 * Math.PI);
context.fillStyle = "#0f0501"
context.fill();
context.closePath();


// context.beginPath();
// context.arc(380, 500, 20, 0, 2 * Math.PI);
// context.fillStyle = "##868382"
// context.fill();
// context.closePath();



// roue de droite
context.beginPath();
context.arc(630, 500, 40, 0, 2 * Math.PI);
context.fillStyle = "#0f0501"
context.fill();
context.closePath();

