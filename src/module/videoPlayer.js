export const videoPlayerInit = () => {
    console.log('VideoInit');
    // video-player
    // video-button__play
    // video-button__stop
    // video-time__passed
    // video-progress
    // video-time__total

    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoVolume=document.querySelector('.video-volume');
    const videoFullScreen=document.querySelector('.video-fullScreen');


    videoFullScreen.addEventListener('click', ()=>{
        videoPlayer.requestFullscreen();
    });


    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        toggleIcon();

    };
    //Тернарный оператор (три операнда): условие ? (условие верно) : (условие неверно)
    const addZero=n=>n<10 ? '0' +n : n;  //Добавляем ноль к плееру, для отображения времени, стрелочная функция в одну строку, не нужен return
     const changeValue=()=> {
        const valueVolume=videoVolume.value;
        videoPlayer.volume=valueVolume/100;
    };
       
    const toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.remove('fa-play');
            videoButtonPlay.classList.add('fa-pause');
        }
    };

    const togglePlay = (event) => {
        event.preventDefault();
        if (videoPlayer.paused) {
            videoPlayer.play();
        }
        else {
            videoPlayer.pause();
        }
        toggleIcon();
    };

    videoPlayer.addEventListener('click', togglePlay);
    videoButtonPlay.addEventListener('click', togglePlay);
    videoButtonStop.addEventListener('click', stopPlay);
    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value=(currentTime/duration)*100;  //Текущее время делим на длительность видео и умножаем на 100, получаем процент, сколько прошло 
        
        let minutePassed=Math.floor(currentTime / 60);
        let secondsPassed=Math.floor(currentTime % 60);

        let minuteTotal=Math.floor(duration / 60);
        let secondsTotal=Math.floor(duration % 60);

        videoTimePassed.textContent=addZero(minutePassed) + ":" + addZero(secondsPassed);
        videoTimeTotal.textContent=addZero(minuteTotal) + ":" + addZero(secondsTotal);
    })
    videoProgress.addEventListener('input', ()=> {   //Изменения дорожки видеоплеера,по клику меняет свое положение ползунок
        const duration = videoPlayer.duration;
        const value=videoProgress.value;
        videoPlayer.currentTime=(value*duration)/100;  //C помощью выражения получаем по клику ровно то место на ползунке,на которое кликнули
    })
    videoVolume.addEventListener('input', changeValue);
    videoPlayer.addEventListener('volumechange',()=>{
     videoVolume.value=Math.round(videoPlayer.volume*100);
    });
    changeValue();

    // return () => {
    //     videoPlayer.pause();
    //     toggleIcon();
    // }
    
};