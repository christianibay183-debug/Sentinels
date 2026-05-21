/* =========================================
   CLOCK
========================================= */
function updateClock(){
    const now = new Date();
    const clock = document.getElementById("clock");
    const date = document.getElementById("date");
    clock.innerText = now.toLocaleTimeString();
    date.innerText = now.toDateString();
}
setInterval(updateClock,1000);
updateClock();
/* =========================================
   FULLSCREEN CAMERA
========================================= */
const cameraFeed = document.querySelector(".camera-feed");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const exitBtn = document.getElementById("exitFullscreenBtn");
/* ENTER FULLSCREEN */
fullscreenBtn.addEventListener("click", () => {
    if(cameraFeed.requestFullscreen){
        cameraFeed.requestFullscreen();
    }
});
/* CAMERA CLICK FULLSCREEN */
cameraFeed.addEventListener("click", () => {
    if(!document.fullscreenElement){
        cameraFeed.requestFullscreen();
    }
});
/* EXIT FULLSCREEN */
exitBtn.addEventListener("click", () => {
    if(document.fullscreenElement){
        document.exitFullscreen();
    }
});
/* SHOW/HIDE EXIT BUTTON */
document.addEventListener("fullscreenchange", () => {
    if(document.fullscreenElement){
        exitBtn.style.display = "flex";
    }
    else{
        exitBtn.style.display = "none";
    }
});
/* =========================================
   RECENT LOGS CLICK
========================================= */
const recentLogs = document.querySelector(".logs-card");
recentLogs.addEventListener("click", () => {
    window.location.href = "/logs";
});
/* =========================================
   LOGOUT
========================================= */
const logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => {
    window.location.href = "/logout";
});
