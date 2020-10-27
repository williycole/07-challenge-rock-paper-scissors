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
let guess = []
let secretName = document.querySelector('#secret-character').value;
let ninja = document.querySelector('.ninja-img');
let ninjaBtn = document.querySelector('.ninja-attack-button');
guess.unshift(secretName);
console.log(guess);
function cheatCode(){
  if(guess[0] === 'ninja'){
    ninja.style.display = 'flex';
    ninjaBtn.style.display = 'flex';
    }
}////Default to prevent reload after get user name
document.querySelector('#guess-character-btn').addEventListener("click", function(event){
    event.preventDefault()
});


////Index Soundtrack

////Win Page

////Lose Page

////Fix Touch Issues





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
    window.location.href = "#gameContainer";
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
golemBtn.addEventListener('click', () => {
    golemImg.style.marginBottom = '5rem'
    golemImg.style.transition = 'all .3s ease-in-out'
    setTimeout(() => {golemImg.style.marginBottom = '0rem'}, 1500);
    let golemAtk = characterArray[1];
    userChrArray.unshift(golemAtk);
});

archerBtn.addEventListener('click', () => {
    archerImg.style.marginBottom = '5rem'
    archerImg.style.transition = 'all .3s ease-in-out'
    setTimeout(() => {archerImg.style.marginBottom = '0rem'}, 1500);
    let archerAtk = characterArray[2];
    userChrArray.unshift(archerAtk);
});

knightBtn.addEventListener('click', () => {
    knightImg.style.marginBottom = '5rem'
    let knightAtk = characterArray[3];
    knightImg.style.transition = 'all .3s ease-in-out'
    setTimeout(() => {knightImg.style.marginBottom = '0rem'}, 1500);
    userChrArray.unshift(knightAtk);
});

ninjaBtn.addEventListener('click', () => {
    ninjaImg.style.marginBottom = '5rem'
    let ninjaAtk = characterArray[0];
    userChrArray.unshift(ninjaAtk);
    ninjaImg.style.transition = 'all .3s ease-in-out'
    setTimeout(() => {ninjaImg.style.marginBottom = '0rem'}, 1500);
});
// console.log(`This is the users choice array ${userChrArray}`);


    //function that moves cpu characters
    function moveCpuCharacter(){
        //Computer movement Controls
        let cpuChoiceCtrl = (Math.ceil(Math.random(1)*3));
        let cpuChoice = characterArray[cpuChoiceCtrl];

        ////Computer querySelectors
        let cpuGolemImg = document.querySelector('.cpu-golem-img');
        let cpuArcherImg = document.querySelector('.cpu-archer-img');
        let cpuKnightImg = document.querySelector('.cpu-knight-img');

        // gets choices and moves images for computer
        if(cpuChoiceCtrl === 1){
            cpuGolemImg.style.paddingTop = '5rem';
            cpuGolemImg.style.transition = 'all .3s ease-in-out'
            addEventListener('click', () =>{
                setTimeout(() => {cpuGolemImg.style.paddingTop = '0rem'}, 1500);
            });
            cpuChrArray.unshift(cpuChoice);
            // console.log(`This is the computers choice array ${cpuChrArray}`);
            compareAndUpdate();
        }
        else if(cpuChoiceCtrl === 2){
            cpuArcherImg.style.paddingTop = '5rem';
            cpuArcherImg.style.transition = 'all .3s ease-in-out'
            addEventListener('click', () =>{
                setTimeout(() => {cpuArcherImg.style.paddingTop = '0rem'}, 1500);
            });
            cpuChrArray.unshift(cpuChoice);
            // console.log(`This is the computers choice array ${cpuChrArray}`);
            compareAndUpdate();
        }
        else {
            cpuKnightImg.style.paddingTop = '5rem';
            cpuKnightImg.style.transition = 'all .3s ease-in-out'
            addEventListener('click', () =>{
                setTimeout(() => {cpuKnightImg.style.paddingTop = '0rem'}, 1500);
            });
            cpuChrArray.unshift(cpuChoice);
            // console.log(`This is the computers choice array ${cpuChrArray}`);
            compareAndUpdate();
        }
    }
    golemBtn.addEventListener('click', () => moveCpuCharacter());
    archerBtn.addEventListener('click', () => moveCpuCharacter());
    knightBtn.addEventListener('click', () => moveCpuCharacter());
    ninjaBtn.addEventListener('click', () => moveCpuCharacter());


    //Compares cpu and user choices, updates scoreboard, and plays sound effects
    function compareAndUpdate(){
        let wonAlert = document.querySelector('#you-won-h1');
        let loseAlert = document.querySelector('#you-lost-h1');
        let tieAlert = document.querySelector('#tie-h1');
        let placeUserScore = document.querySelector('#userScore');//user score in dom
        let placeCpuScore = document.querySelector('#cpuScore');//cpu score in dom
        let soundEffect;////Querys for sound effects
        if (userChrArray[0] === cpuChrArray[0]) {
            soundEffect = new Audio("./sounds/crowdShock1.mp3"), soundEffect.play();
            tieAlert.style.display = 'block';
            setTimeout(() => { tieAlert.style.display = 'none'}, 1500);
        }  //------computer wins
        else if (userChrArray[0] === "knight" && cpuChrArray[0] === "golem") {
            soundEffect = new Audio("./sounds/crowdShock3.wav"), soundEffect.play();
            cpuScore++, placeCpuScore.innerHTML = cpuScore;

            loseAlert.style.display = 'block';
            setTimeout(() => { loseAlert.style.display = 'none'}, 1500);
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }else if (userChrArray[0] === "golem" && cpuChrArray[0] === "archer") {
            soundEffect = new Audio("./sounds/crowdShock2.wav"), soundEffect.play();
            cpuScore++, placeCpuScore.innerHTML = cpuScore;

            loseAlert.style.display = 'block';
            setTimeout(() => { loseAlert.style.display = 'none'}, 1500);
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }else if (userChrArray[0] === "archer" && cpuChrArray[0] === "knight") {
            soundEffect = new Audio("./sounds/crowdShock2.wav"), soundEffect.play();
            cpuScore++, placeCpuScore.innerHTML = cpuScore;

            loseAlert.style.display = 'block';
            setTimeout(() => { loseAlert.style.display = 'none'}, 1500);
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }  //------user wins
        else if (userChrArray[0] === "golem" && cpuChrArray[0] === "knight") {
            soundEffect = new Audio("./sounds/happyCrowd2.wav"), soundEffect.play();
            userScore++, placeUserScore.innerHTML = userScore;

            wonAlert.style.display = 'block';
            setTimeout(() => { wonAlert.style.display = 'none'}, 1500);
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }else if (userChrArray[0] === "archer" && cpuChrArray[0] === "golem") {
            soundEffect = new Audio("./sounds/happyCrowd2.wav"), soundEffect.play();
            userScore++, placeUserScore.innerHTML = userScore;

            wonAlert.style.display = 'block';
            setTimeout(() => { wonAlert.style.display = 'none'}, 1500);
            // console.log(`The score is user${userScore}||opponent${cpuScore}`);
        }else if (userChrArray[0] === "knight" && cpuChrArray[0] === "archer") {
            soundEffect = new Audio("./sounds/happyCrowd2.wav"), soundEffect.play();
            userScore++, placeUserScore.innerHTML = userScore;

            wonAlert.style.display = 'block';
            setTimeout(() => { wonAlert.style.display = 'none'}, 1500);
            // console.log(`The score is user${userScore}||opponent${cpuScore}`)
        } //------users ninja wins aLl
        else if (userChrArray[0] === "ninja") {
            console.log(`Game Won, ${userChrArray[0]} wins all!`);
            console.log(`The score is user${userScore}||opponent${cpuScore}`);
            window.location.href ="ninjawins.html"
        }// you broke the game
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










