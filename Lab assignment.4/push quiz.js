const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        question: "Who is the current President of USA?",
        answer: "Donald Trump"
    },
    {
        question: "Whos is the CEO of Starlink ?",
        answer: "Elon Musk"
    },
    {
        question: "Who is considered as 'THE MAD SCIENTIST'in history?",
        answer: "Nikola Tesla"
    }
];

function runQuiz() {

    let score = 0;
    const totalQuestions = quizQuestions.length;

    console.log("Welcome to the JavaScript Console Quiz!");
    console.log(`You have ${totalQuestions} questions to answer.`);

    for (let i = 0; i < totalQuestions; i++) {
        const currentQ = quizQuestions[i];

        const userInput = prompt(
            `Question ${i + 1}/${totalQuestions}:\n${currentQ.question}`
        );

        if (userInput === null) {
            alert("Quiz cancelled. Your current score is " + score + ".");
            return;
        }

        const normalizedInput = userInput.toLowerCase().trim();

        if (normalizedInput === currentQ.answer) {
            score++;

            alert("Correct! Your score is now: " + score);
        } else {

            alert(
                "Incorrect. The correct answer was: " +
                currentQ.answer.toUpperCase() +
                "\nYour score remains: " + score
            );
        }
    }

    alert(
        "Quiz finished!\n" +
        `Your final score is: ${score} out of ${totalQuestions} (${(score / totalQuestions) * 100}%)`
    );
}

runQuiz();