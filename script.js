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
let quizStep = 1;

function answerQuiz(correct) {
    const message = document.getElementById("quiz-message");
    const next = document.getElementById("quiz-next");

    if (correct) {
        message.textContent = "Correct! 💗 You found the bug!";
        next.classList.remove("hidden");
    } else {
        message.textContent = "Not quite! 😭 Try another answer.";
    }
}

function nextQuizQuestion() {
    quizStep++;

    const question = document.getElementById("quiz-question");
    const message = document.getElementById("quiz-message");
    const next = document.getElementById("quiz-next");
    const finish = document.getElementById("quiz-finish");

    message.textContent = "";

    if (quizStep === 2) {
        question.innerHTML = `
            <p>Question 2/3</p>
            <p>What was the real problem?</p>

            <button onclick="answerQuiz(false)">Princess wanted to hurt him 😭</button>
            <button onclick="answerQuiz(true)">A misunderstanding that caused hurt feelings 💗</button>
            <button onclick="answerQuiz(false)">The balloon itself 😅</button>
        `;
    }

    if (quizStep === 3) {
        question.innerHTML = `
            <p>Question 3/3</p>
            <p>What does Princess actually want?</p>

            <button onclick="answerQuiz(false)">To compete with the past 👑</button>
            <button onclick="answerQuiz(false)">To erase every memory 😭</button>
            <button onclick="answerQuiz(true)">To be understood and be herself 💗</button>
        `;
    }

    next.classList.add("hidden");

    if (quizStep === 3) {
        next.textContent = "FINISH →";
        next.onclick = finishQuiz;
    }
}

function finishQuiz() {
    const message = document.getElementById("quiz-message");
    const finish = document.getElementById("quiz-finish");

    message.textContent = "✨ DEBUG COMPLETE — You understand the Princess! 🐸👑💗";
    finish.classList.remove("hidden");
    finish.textContent = "READ THE REPORT ↓";
}