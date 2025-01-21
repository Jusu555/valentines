const questions = [
    {
        question: "What is the traditional flower given on Valentine's Day?",
        options: ["Rose", "Tulip", "Daisy", "Lily"],
        answer: "Rose"
    },
    {
        question: "Which day is celebrated as Valentine's Day?",
        options: ["February 14", "March 14", "January 14", "April 14"],
        answer: "February 14"
    },
    {
        question: "What color is commonly associated with Valentine's Day?",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: "Red"
    },
    {
        question: "What is the name of the Roman god of love?",
        options: ["Cupid", "Mars", "Jupiter", "Apollo"],
        answer: "Cupid"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    resultElement.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    resultElement.innerText = `You scored ${score} out of ${questions.length}!`;
}

startQuiz();
