// //////////////////////Dont Touch this code- this is the safe playground section
// console.log(`----------------safe playground code, don't touch`);
// //-----------------------------------------CHOICE ARRAY
// //array for both user and cpu choices
// let choiceArray = ['Boom','Rock', 'Paper', 'Scissors'];
// //  console.log(choiceArray[0]); // boom check
// //-----------------------------------------------------

// ////------------------------------------CPU CHOICE CODE
// let cpuChoice = (Math.ceil(Math.random(1)*3));
// 	console.log(cpuChoice);

// ////cpu choice helper function-- MAYBE MAKE HELPER FUNCTION
// console.log(choiceArray[cpuChoice]);
// ////---------------------------------------------------
// ////
// ////
// ////
// ////
// ////------------------------------------character movement prototype

// let choiceArray = ['Boom','Rock', 'Paper', 'Scissors'];
// let golemBtn = document.querySelector('.golem-attack-button');

// golemBtn.addEventListener('mousedown', () => {
//     let golemMove = document.querySelector('.golem-img');
//     golemMove.style.paddingBottom = '20rem';
//     ////make computers choice pic in here as well and move
//     let cpuChoice = (Math.ceil(Math.random(1)*3));
// 	console.log(choiceArray[cpuChoice]);
// });

// golemBtn.addEventListener('mouseup', () => {
//     let golemMove = document.querySelector('.golem-img');
//     golemMove.style.paddingBottom = '0rem';
//     ////decide in here who won and update, and make computer choice move back
// });
// ////---------------------------------------------------
// console.log(`--------------------------------------------------`);
// ////
// ////
// ////
// ////
// // //////////////////////Dont Touch this code- this is the safe playground section

// function userChoice(){
// }
// function gameMechanics(){
// }

////-----------------------------------I am currently working below here


function gameSet(){
let choiceArray = ['Boom','Rock', 'Paper', 'Scissors'];

var isMousedown = false;

let golemBtn = document.querySelector('.golem-attack-button');
let archerBtn = document.querySelector('.archer-attack-button');
let knightBtn = document.querySelector('.knight-attack-button');
let ninjaBtn = document.querySelector('.ninja-attack-button');

let golemImg = document.querySelector('.golem-img');
let archerImg = document.querySelector('.archer-img');
let knightImg = document.querySelector('.knight-img');
let ninjaImg = document.querySelector('.ninja-img');

        golemBtn.addEventListener('mousedown', () => golemImg.style.paddingBottom = '20rem', isMousedown = true)
        golemBtn.addEventListener('mouseup', () => golemImg.style.paddingBottom = '0rem', isMousedown = false)




        archerBtn.addEventListener('mousedown', () => archerImg.style.paddingBottom = '20rem', isMousedown = true)
        archerBtn.addEventListener('mouseup', () => archerImg.style.paddingBottom = '0rem', isMousedown = false)




        knightBtn.addEventListener('mousedown', () => knightImg.style.paddingBottom = '20rem', isMousedown = true)
        knightBtn.addEventListener('mouseup', () => knightImg.style.paddingBottom = '0rem', isMousedown = false)




        ninjaBtn.addEventListener('mousedown', () => ninjaImg.style.paddingBottom = '20rem', isMousedown = true)
        ninjaBtn.addEventListener('mouseup', () => ninjaImg.style.paddingBottom = '0rem', isMousedown = false)
}
gameSet();



















////-----------------------------------copy for testing

/////function gameSet(){
/////    let choiceArray = ['Boom','Rock', 'Paper', 'Scissors'];
/////    let golemBtn = document.querySelector('.golem-attack-button');
/////    let archerBtn = document.querySelector('.archer-attack-button');
/////    let knightBtn = document.querySelector('.knight-attack-button');
/////    let ninjaBtn = document.querySelector('.ninja-attack-button');
/////
/////
/////        let golemImg = document.querySelector('.golem-img');
/////        golemBtn.addEventListener('mousedown', () => golemImg.style.paddingBottom = '20rem')
/////        golemBtn.addEventListener('mouseup', () => golemImg.style.paddingBottom = '0rem')
/////
/////
/////
/////         let archerImg = document.querySelector('.archer-img');
/////        archerBtn.addEventListener('mousedown', () => archerImg.style.paddingBottom = '20rem')
/////        archerBtn.addEventListener('mouseup', () => archerImg.style.paddingBottom = '0rem')
/////
/////
/////
/////        let knightImg = document.querySelector('.knight-img');
/////        knightBtn.addEventListener('mousedown', () => knightImg.style.paddingBottom = '20rem')
/////        knightBtn.addEventListener('mouseup', () => knightImg.style.paddingBottom = '0rem')
/////
/////
/////
/////        let ninjaImg = document.querySelector('.ninja-img');
/////        ninjaBtn.addEventListener('mousedown', () => ninjaImg.style.paddingBottom = '20rem')
/////        ninjaBtn.addEventListener('mouseup', () => ninjaImg.style.paddingBottom = '0rem')
/////}
/////gameSet();