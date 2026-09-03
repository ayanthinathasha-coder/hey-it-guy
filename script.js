let currentScreen = 1;
let heartTaps = 0;

function showScreen(number) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById("screen-" + number);

    if (target) {
        target.classList.add("active");
        currentScreen = number;
        window.scrollTo(0, 0);
    }
}

function nextScreen() {
    if (currentScreen < 9) {
        showScreen(currentScreen + 1);
    }
}


/* HEART VERIFICATION */

function tapHeart() {
    if (heartTaps >= 5) {
        return;
    }

    heartTaps++;

    const counter = document.getElementById("heart-counter");
    const message = document.getElementById("heart-message");
    const nextButton = document.getElementById("heart-next");

    counter.textContent = heartTaps + " / 5";

    const messages = [
        "Okay... one tap. 🥺",
        "The heart is responding... 💗",
        "System detected kindness. 😭",
        "Almost there, IT guy... 🐸",
        "Heart verification complete! ❤️"
    ];

    message.textContent = messages[heartTaps - 1];

    const heart = document.querySelector(".big-heart");

    heart.style.transform = "scale(1.2)";

    setTimeout(() => {
        heart.style.transform = "scale(1)";
    }, 150);

    if (heartTaps === 5) {
        nextButton.classList.remove("hidden");
        message.textContent = "Verified! The heart is safe. ❤️";
    }
}


/* FINAL PATCH */

function installPatch() {
    const installed = document.getElementById("installed");

    if (installed) {
        installed.classList.remove("hidden");
        installed.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


/* KEYBOARD NAVIGATION */

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        nextScreen();
    }
});


/* LOADING SCREEN */

window.addEventListener("load", function() {
    setTimeout(function() {
        showScreen(2);
    }, 3500);
});
