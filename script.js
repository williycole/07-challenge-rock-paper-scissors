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
//     golemMove.style.paddingBottom = '5rem';
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
//// let choiceArray = ['Boom','Rock', 'Paper', 'Scissors'];
let characterArray = ['ninja','golem', 'archer', 'knight'];

////User querySelectors
let golemBtn = document.querySelector('.golem-attack-button');
let archerBtn = document.querySelector('.archer-attack-button');
let knightBtn = document.querySelector('.knight-attack-button');
let ninjaBtn = document.querySelector('.ninja-attack-button');

let golemImg = document.querySelector('.golem-img');
let archerImg = document.querySelector('.archer-img');
let knightImg = document.querySelector('.knight-img');
let ninjaImg = document.querySelector('.ninja-img');

////User Character movement Controls
golemBtn.addEventListener('mousedown', () =>  golemImg.style.paddingBottom = '5rem');
golemBtn.addEventListener('mouseup', () => golemImg.style.paddingBottom = '0rem');

archerBtn.addEventListener('mousedown', () => archerImg.style.paddingBottom = '5rem');
archerBtn.addEventListener('mouseup', () => archerImg.style.paddingBottom = '0rem');

knightBtn.addEventListener('mousedown', () => knightImg.style.paddingBottom = '5rem');
knightBtn.addEventListener('mouseup', () => knightImg.style.paddingBottom = '0rem');

ninjaBtn.addEventListener('mousedown', () => ninjaImg.style.paddingBottom = '5rem');
ninjaBtn.addEventListener('mouseup', () => ninjaImg.style.paddingBottom = '0rem');

    function moveCpuCharacter(){
        //Computer movement Controls
        let cpuChoiceCtrl = (Math.ceil(Math.random(1)*3));
        let cpuChoice = characterArray[cpuChoiceCtrl];

        ////Computer querySelectors
        let cpuGolemImg = document.querySelector('.cpu-golem-img');
        let cpuArcherImg = document.querySelector('.cpu-archer-img');
        let cpuKnightImg = document.querySelector('.cpu-knight-img');

        // gets choices and moves images for computer
        if(cpuChoiceCtrl == 1){
            console.log(characterArray[1]);
            console.log(cpuChoice);
            cpuGolemImg.style.paddingTop = '5rem';
            golemBtn.addEventListener('mouseup', () =>   cpuGolemImg.style.paddingTop = '0rem');

        }
        else if(cpuChoiceCtrl == 2){
            console.log(characterArray[2]);
            console.log(cpuChoice);
            cpuArcherImg.style.paddingTop = '5rem';
            archerBtn.addEventListener('mouseup', () =>   cpuArcherImg.style.paddingTop = '0rem');

        }
        else {
            console.log(characterArray[3]);
            console.log(cpuChoice);
            cpuKnightImg.style.paddingTop = '5rem';
            knightBtn.addEventListener('mouseup', () => cpuKnightImg.style.paddingTop = '0rem');
        }
    }
    golemBtn.addEventListener('mousedown', () =>   moveCpuCharacter());
    archerBtn.addEventListener('mousedown', () =>   moveCpuCharacter());
    knightBtn.addEventListener('mousedown', () =>   moveCpuCharacter());
    ninjaBtn .addEventListener('mousedown', () =>   moveCpuCharacter());








}
gameSet();









