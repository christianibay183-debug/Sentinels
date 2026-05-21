/* MAIN CONTAINER */

const mainContainer =
document.getElementById(
    "mainContainer"
);

/*
TIMING:
The recorder becomes visible
around ~1.6s in your GIF.
*/

setTimeout(()=>{

    mainContainer.classList.add(
        "show"
    );

}, 1600);

/* CLOCK */

function updateClock(){

    const now =
    new Date();

    document.getElementById(
        "clock"
    ).innerHTML =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        /* INPUTS */

        const username =
        document.querySelector(
            'input[type="text"]'
        ).value;

        const password =
        document.querySelector(
            'input[type="password"]'
        ).value;

        /* SIMPLE LOGIN */

        if(

            username === "admin"

            &&

            password === "admin"

        ){

            /* REDIRECT */

            window.location.href =
            "dashboard.html";
        }

        else{

            alert(
                "ACCESS DENIED"
            );
        }
    }
);