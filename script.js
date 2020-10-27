////Nav Directions/Scroll Controls
function scrollMenu() {
    let toggleScroll = document.querySelector('.open-scroll');
    let toggleContents =document.querySelector('.open-scroll-contents');

    if (toggleScroll.style.display === "none" && toggleContents.style.display === "none") {
        toggleScroll.style.display = "block";
        toggleContents.style.display = "block";

    } else {
        toggleScroll.style.display = "none";
        toggleContents.style.display = "none";
    }
}


////Ninja Cheat Code Section









////Get user name
let setUserName = document.querySelector('#set-user-name');
setUserName.addEventListener('click', () => {
    let placeUserName = document.querySelector('#put-user-name-here');
    let userName = document.querySelector('#user-name').value;
    placeUserName.textContent = userName + `'s`;
});
////Default to prevent reload after get user name
document.querySelector('#set-user-name').addEventListener("click", function(event){
    event.preventDefault()
});





// All code for the game
function gameSet(){
let characterArray = ['ninja','golem', 'archer', 'knight'];
let userChrArray = [];
let cpuChrArray = [];

let userScore = 0;
let cpuScore = 0;





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
golemBtn.addEventListener('mousedown', () => {
    golemImg.style.marginBottom = '10rem'
    let golemAtk = characterArray[1];
    userChrArray.unshift(golemAtk);
    // console.log(`This is the users choice array ${userChrArray}`);
});
golemBtn.addEventListener('mouseup', () => golemImg.style.marginBottom = '0rem');

archerBtn.addEventListener('mousedown', () => {
   archerImg.style.paddingBottom = '10rem'
   let archerAtk = characterArray[2];
   userChrArray.unshift(archerAtk);
//    console.log(`This is the users choice array ${userChrArray}`);
});
archerBtn.addEventListener('mouseup', () => archerImg.style.paddingBottom = '0rem');

knightBtn.addEventListener('mousedown', () => {
    knightImg.style.paddingBottom = '10rem'
    let knightAtk = characterArray[3];
    userChrArray.unshift( knightAtk);
    // console.log(`This is the users choice array ${userChrArray}`);
});
knightBtn.addEventListener('mouseup', () => knightImg.style.paddingBottom = '0rem');

ninjaBtn.addEventListener('mousedown', () => {
    ninjaImg.style.paddingBottom = '10rem'
    let ninjaAtk = characterArray[0];
    userChrArray.unshift(ninjaAtk);
    // console.log(`This is the users choice array ${userChrArray}`);
});
ninjaBtn.addEventListener('mouseup', () => ninjaImg.style.paddingBottom = '0rem');

    function moveCpuCharacter(){


        //// let choiceArray = ['Boom','Rock', 'Paper', 'Scissors'];
        //Computer movement Controls
        let cpuChoiceCtrl = (Math.ceil(Math.random(1)*3));
        let cpuChoice = characterArray[cpuChoiceCtrl];

        ////Computer querySelectors
        let cpuGolemImg = document.querySelector('.cpu-golem-img');
        let cpuArcherImg = document.querySelector('.cpu-archer-img');
        let cpuKnightImg = document.querySelector('.cpu-knight-img');

        // gets choices and moves images for computer
        if(cpuChoiceCtrl === 1){
            // console.log(characterArray[1]);
            // console.log(cpuChoice);
            cpuGolemImg.style.paddingTop = '10rem';
            addEventListener('mouseup', () =>   cpuGolemImg.style.paddingTop = '0rem');
            cpuChrArray.unshift(cpuChoice);
            // console.log(`This is the computers choice array ${cpuChrArray}`);
            compareAndUpdate();
        }
        else if(cpuChoiceCtrl === 2){
            // console.log(cpuChoice);
            cpuArcherImg.style.paddingTop = '10rem';
            addEventListener('mouseup', () =>   cpuArcherImg.style.paddingTop = '0rem');
            cpuChrArray.unshift(cpuChoice);
            // console.log(`This is the computers choice array ${cpuChrArray}`);
            compareAndUpdate();
        }
        else {
            // console.log(cpuChoice);
            cpuKnightImg.style.paddingTop = '10rem';
            addEventListener('mouseup', () => cpuKnightImg.style.paddingTop = '0rem');
            cpuChrArray.unshift(cpuChoice);
            // console.log(`This is the computers choice array ${cpuChrArray}`);
            compareAndUpdate();
        }
    }
    golemBtn.addEventListener('mousedown', () =>   moveCpuCharacter());
    archerBtn.addEventListener('mousedown', () =>   moveCpuCharacter());
    knightBtn.addEventListener('mousedown', () =>   moveCpuCharacter());
    ninjaBtn .addEventListener('mousedown', () =>   moveCpuCharacter());

//// let characterArray = ['ninja','rock', 'paper', 'scissors'];
//// let characterArray = ['ninja','golem', 'archer', 'knight'];
    function compareAndUpdate(){

        //user score in dom
        let placeUserScore = document.querySelector('#userScore');


        //cpu score in dom
        let placeCpuScore = document.querySelector('#cpuScore');



        ////Querys for sound effects
        let soundEffect;
        if (userChrArray[0] === cpuChrArray[0]) {
            soundEffect = new Audio("./sounds/crowdShock1.mp3")
            soundEffect.play();
            console.log(`Its a tie!!!!`);


        }  //------computer wins
        else if (userChrArray[0] === "knight" && cpuChrArray[0] === "golem") {
            soundEffect = new Audio("./sounds/crowdShock3.wav"), soundEffect.play();
            cpuScore++, placeCpuScore.innerHTML = cpuScore;
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }
        else if (userChrArray[0] === "golem" && cpuChrArray[0] === "archer") {
            soundEffect = new Audio("./sounds/crowdShock2.wav"), soundEffect.play();
            cpuScore++, placeCpuScore.innerHTML = cpuScore;
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }
        else if (userChrArray[0] === "archer" && cpuChrArray[0] === "knight") {
            soundEffect = new Audio("./sounds/crowdShock2.wav"), soundEffect.play();
            cpuScore++, placeCpuScore.innerHTML = cpuScore;
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }  //------user wins
        else if (userChrArray[0] === "golem" && cpuChrArray[0] === "knight") {
            soundEffect = new Audio("./sounds/happyCrowd2.wav"), soundEffect.play();
            userScore++, placeUserScore.innerHTML = userScore;
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }
        else if (userChrArray[0] === "archer" && cpuChrArray[0] === "golem") {
            soundEffect = new Audio("./sounds/happyCrowd1.wav"), soundEffect.play();
            userScore++, placeUserScore.innerHTML = userScore;
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }
        else if (userChrArray[0] === "knight" && cpuChrArray[0] === "archer") {
            soundEffect = new Audio("./sounds/happyCrowd2.wav"), soundEffect.play();
            userScore++, placeUserScore.innerHTML = userScore;
            // console.log(`The score is user${userScore}||opponent${cpuScore}`)
        } //------users ninja wins aLl
        else if (userChrArray[0] === "ninja") {
            console.log(`Game Won, ${userChrArray[0]} wins all!`);
            console.log(`The score is user${userScore}||opponent${cpuScore}`);
            window.location.href ="ninjawins.html"
        }

        // you broke the game
        else {
            console.log('wut...')
         }

         if(userScore === 3) {
            console.log('you won the game');
            window.location.href ="youwon.html"
            // send to won game page and give replay option
        }

        if(cpuScore === 3) {
            console.log('you lost the game');
            window.location.href ="gameover.html"
            // send to lost game page and give replay option
        }
    }

}
gameSet();









