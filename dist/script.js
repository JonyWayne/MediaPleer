(()=>{"use strict";var e=function(){console.log("RadioInit");var e=document.querySelector(".radio"),t=document.querySelector(".radio-navigation"),o=document.querySelector(".radio-cover__img"),a=document.querySelectorAll(".radio-item"),n=document.querySelector(".radio-header__big"),c=document.querySelector(".radio-stop"),r=new Audio;r.type="audio/aac",c.disabled=!0;var i=function(){r.paused?(e.classList.remove("play"),c.classList.add("fa-play"),c.classList.remove("fa-stop")):(e.classList.add("play"),c.classList.add("fa-stop"),c.classList.remove("fa-play"))};t.addEventListener("change",(function(e){var t,u=e.target,l=u.closest(".radio-item");t=l,a.forEach((function(e){return e.classList.remove("select")})),t.classList.add("select");var s=l.querySelector(".radio-name").textContent;n.textContent=s;var d=l.querySelector(".radio-img").src;o.src=d,c.disabled=!1,console.log(u.dataset.radioStantion),r.src=u.dataset.radioStantion,r.play(),i()})),c.addEventListener("click",(function(){r.paused?r.play():r.pause(),i()}))};console.log("Hello! Pidar");var t=document.querySelectorAll(".player-btn"),o=document.querySelectorAll(".player-block"),a=document.querySelector(".temp");e(),t.forEach((function(e,n){console.log(e),console.log(n),e.addEventListener("click",(function(){a.style.display="none",t.forEach((function(e){e.classList.remove("active")})),o.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),o[n].classList.add("active")}))})),console.log(t),console.log(o),e(),function(){console.log("VideoInit");var e=document.querySelector(".video-player"),t=document.querySelector(".video-button__play"),o=document.querySelector(".video-button__stop"),a=document.querySelector(".video-time__passed"),n=document.querySelector(".video-progress"),c=document.querySelector(".video-time__total"),r=document.querySelector(".video-volume");document.querySelector(".video-fullScreen").addEventListener("click",(function(){e.requestFullscreen()}));var i=function(e){return e<10?"0"+e:e},u=function(){var t=r.value;e.volume=t/100},l=function(){e.paused?(t.classList.remove("fa-pause"),t.classList.add("fa-play")):(t.classList.remove("fa-play"),t.classList.add("fa-pause"))},s=function(t){t.preventDefault(),e.paused?e.play():e.pause(),l()};e.addEventListener("click",s),t.addEventListener("click",s),o.addEventListener("click",(function(){e.pause(),e.currentTime=0,l()})),e.addEventListener("timeupdate",(function(){var t=e.currentTime,o=e.duration;n.value=t/o*100;var r=Math.floor(t/60),u=Math.floor(t%60),l=Math.floor(o/60),s=Math.floor(o%60);a.textContent=i(r)+":"+i(u),c.textContent=i(l)+":"+i(s)})),n.addEventListener("input",(function(){var t=e.duration,o=n.value;e.currentTime=o*t/100})),r.addEventListener("input",u),e.addEventListener("volumechange",(function(){r.value=Math.round(100*e.volume)})),u()}(),function(){console.log("MusicInit");var e=document.querySelector(".audio"),t=document.querySelector(".audio-img"),o=document.querySelector(".audio-header"),a=document.querySelector(".audio-button__play"),n=document.querySelector(".audio-player"),c=document.querySelector(".audio-navigation"),r=document.querySelector(".audio-progress__timing"),i=document.querySelector(".audio-time__total"),u=document.querySelector(".audio-time__passed"),l=document.querySelector(".audio-progress"),s=function(e){return e<10?"0"+e:e},d=["hello","flow","speed"],v=0,p=function(){var e=n.paused,a=d[v];t.src="audio/".concat(a,".jpg"),o.textContent=a.toUpperCase(),n.src="audio/".concat(a,".mp3"),e?n.pause():n.play(),n.addEventListener("canPlay",(function(){f()}))},m=function(){v===d.length-1?v=0:v++,p()};c.addEventListener("click",(function(t){var c=t.target;if(c.classList.contains("audio-button__play")){e.classList.toggle("play"),a.classList.toggle("fa-play"),a.classList.toggle("fa-pause"),n.paused?n.play():n.pause();var r=d[v];o.textContent=r.toUpperCase()}c.classList.contains("audio-button__prev")&&(v?v--:v=d.length-1,p()),c.classList.contains("audio-button__next")&&m()})),n.addEventListener("ended",(function(){m(),n.play()}));var f=function(){var e=n.duration,t=n.currentTime,o=t/e*100;r.style.width=o+"%";var a=Math.floor(t/60)||"0",c=Math.floor(t%60)||"0",l=Math.floor(e/60)||"0",d=Math.floor(e%60)||"0";u.textContent="".concat(s(a),":").concat(s(c)),i.textContent="".concat(s(l),":").concat(s(d))};f(),n.addEventListener("timeupdate",f),l.addEventListener("click",(function(e){var t=e.offsetX/l.clientWidth*n.duration;n.currentTime=t}))}()})();