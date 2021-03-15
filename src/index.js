import { radioPlayerInit } from './module/radioPlayer.js'
import { videoPlayerInit } from './module/videoPlayer.js'
import { musicPlayerInit } from './module/musicPlayer.js'

console.log('Hello! Pidar');

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp=document.querySelector('.temp');
// const stopVideoPlayer=videoPlayerInit();
const stopRadioPlayer=radioPlayerInit();
// const stopAudioPlayer=musicPlayerInit();

const deactivationPlayer = () => {
    temp.style.display='none';
    playerBtn.forEach((item) => {
        item.classList.remove('active');
    })
    playerBlock.forEach((item) => {
        item.classList.remove('active');
      
    })
    //  stopRadioPlayer();
    // stopAudioPlayer();
}

playerBtn.forEach((btn, i) => {
    console.log(btn);
    console.log(i);
    btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })
  
});



console.log(playerBtn);
console.log(playerBlock);

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();