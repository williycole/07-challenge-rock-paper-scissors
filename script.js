//////////////////////Dont Touch this code- this is the safe playground section
console.log(`----------------safe playground code, don't touch`);
//-----------------------------------------CHOICE ARRAY
//array for both user and cpu choices
let choiceArray = ['Boom','Rock', 'Paper', 'Scissors'];
//  console.log(choiceArray[0]); // boom check
//-----------------------------------------------------

////------------------------------------CPU CHOICE CODE
let cpuChoice = (Math.ceil(Math.random(1)*3));
	console.log(cpuChoice);

////cpu choice helper function-- MAYBE MAKE HELPER FUNCTION
console.log(choiceArray[cpuChoice]);
////---------------------------------------------------
console.log(`--------------------------------------------------`);
////
////
////
////
////------------------------------------character movement proto type
//// let golemBtn = document.querySelector('.golem-attack-button');
//
//// golemBtn.addEventListener('click', () => {
////     let golemMove = document.querySelector('.golem-img');
////     console.log(`--------------------------------------------------`);
////     console.log('it works');
////     golemMove.style.paddingBottom = '20rem';
////     console.log(`--------------------------------------------------`);
//// });
//////////////////////Dont Touch this code- this is the safe playground section

// function userChoice(){
// }
// function gameMechanics(){
// }








////-----------------------------------I am currently working below here



// let golemBtn = document.querySelector('.golem-attack-button');
// golemBtn.addEventListener('click', () => {

//     let golemMove = document.querySelector('.golem-img');



//         if( golemMove.style.paddingBottom = '0rem') {
//             golemMove.style.paddingBottom = '20rem';
//              console.log('attack, it works')
//         }

//         else {
//             golemMove.style.paddingBottom = '0rem'
//               console.log('retreat, it works')
//         }
// });


let golemBtn = document.querySelector('.golem-attack-button');

golemBtn.addEventListener('mousedown', () => {
    let golemMove = document.querySelector('.golem-img');
    golemMove.style.paddingBottom = '20rem';
    ////make computers choice pic in here as well and move
    console.log(choiceArray[cpuChoice]);
});

golemBtn.addEventListener('mouseup', () => {
    let golemMove = document.querySelector('.golem-img');
    golemMove.style.paddingBottom = '0rem';
    ////decide in here who won and update, and make computer choice move back
});