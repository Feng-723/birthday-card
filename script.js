let correctAnswers = { 1: '蔡大頭', 2: '臭寶', 3: '小背心', 4: '7月' };
let answeredCorrectly = 0;

function checkAnswer(q, answer) {
    if (answer === correctAnswers[q]) {
        document.getElementById(`q${q}-result`).classList.remove("hidden");
        answeredCorrectly++;
        if (answeredCorrectly === 4) {
            document.getElementById("next-btn").classList.remove("hidden");
        }
    } else {
        alert("答錯了喔！再試一次！");
    }
}

function goToPasswordPage() {
    window.location.href = "index.html";
}
