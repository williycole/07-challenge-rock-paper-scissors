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

// let characterCompareArray = {
//     golem: {weakTo: 'Archer', strongTo: 'Knight'},
//     archer: {weakTo: 'Knight', strongTo: 'Golem'},
//     knight: {weakTo: 'Golem', strongTo: 'Archer'},
//     ninja: {strongTo:'Golem Archer Knight'}
// }

// function compareAndUpdate(){
//     if (characterCompareArray[userChrArray[0]].strongTo === cpuChrArray[0]) {
//         // I won
//        console.log('You won')
//     }

//     else if (characterCompareArray[userChrArray[0]].weakTo === cpuChrArray[0]) {
//         // I Lost
//         console.log('You lost')
//     }
//     else {
//         console.log(`DRAW! You picked ${userChrArray[0]}, your opponent picked ${cpuChrArray[0]}.`)
//     }
// }
