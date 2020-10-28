let loadNinja = document.querySelector('#ninja');
window.onload = function trophy() {
    loadNinja.style.transition = "all .5s ease-in-out";
    loadNinja.style.paddingTop = "67rem";
    loadNinja.style.display = "flex";
    loadNinja.style.paddingBottom = "0rem";

}


function playSound(){
    let soundEffect ;////Querys for sound effects
         soundEffect = new Audio("./sounds/happyCrowd2.wav"), soundEffect.load();
         soundEffect.play();
}
document.addEventListener('mousemove', playSound())
