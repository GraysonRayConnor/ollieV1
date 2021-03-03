const char = document.querySelector("#char");
const block = document.querySelector("#block");
const game = document.querySelector("#game");
const ollie = document.querySelector("#ollie");
const start = document.querySelector("#start");
const title = document.querySelector("#title");
const blockImg = document.querySelector("#block img");

start.addEventListener("click", startGame);
ollie.addEventListener("click", jump);

function jump(){
	if(char.classList != "animateJump"){
	char.classList.add("animateJump");
}
	setTimeout(() => {
		char.classList.remove("animateJump");
	},500);
};


function setRandomBlockAnimation() {
  blockImg.src = `assets/blockFig${Math.floor(Math.random()*3+1)}.jpg`;
  block.style.animationDuration = Math.floor((Math.random()*2.5+1.5)*100)/100+"s";
}

block.addEventListener("animationiteration", setRandomBlockAnimation);


function startGame(){
	let count = 3;
	const countdown = setInterval(() => {
		if(count == 0){
		  block.classList.add("animateBlock");
		  block.style.display = "block";
		  start.textContent = "START";
    	  clearInterval(countdown);
  		}
  	title.textContent = count;
  		if(count==0){
  		  title.textContent = "SHRED!";
  		}
  		count--;
	},1000);
};




const checkDead = setInterval(() => {
	let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if(blockLeft<20 && blockLeft>0 && charTop>130){
		block.classList.remove("animateBlock");
		block.style.display = "none";
		title.innerHTML = "<h4>SKATE BETTER!<br>TRY AGAIN...</h4>";
		title.style.fontSize = "3rem";
		start.textContent = "PLAY AGAIN";
	}
}, 10);