const quizData = [
    {
        question: 'How old is Florin?',
        options: ['10', '17', '26', '110'],
        correct: 'option_3'
    },
    {
        question: 'What is the most used programming language in 2019?',
        options: ['Java', 'C', 'Python', 'JavaScript'],
        correct: 'option_4'
    },
    {
        question: 'Who is the President of US?',
        options: ['Florin Pop', 'Donald Trump', 'Ivan Saldano', 'Mihai Andrei'],
        correct: 'option_2'
    },
    {
        question: 'What does HTML stand for?',
        options: ['Hypertext Markup Language', 'Cascading Style Sheet', 'Jason Object Notation'],
        correct: 'option_1'
    },
    {
        question: "What year was JavaScript launched?",
        options: ['1996', '1995', '1994', 'none of the above'],
        correct: 'option_2'
    }
];

let currentQuiz = 0;
let score1 = 0;
const totalQuestions = quizData.length;

const quiz = document.getElementById('quiz');
const questionEle = document.getElementById('question');
const option_1 = document.getElementById('option_1');
const option_2 = document.getElementById('option_2');
const option_3 = document.getElementById('option_3');
const option_4 = document.getElementById('option_4');
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next');

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    questionEle.innerText = currentQuizData.question;
    option_1.innerText = currentQuizData.options[0];
    option_2.innerText = currentQuizData.options[1];
    option_3.innerText = currentQuizData.options[2];
    option_4.innerText = currentQuizData.options[3];
    clearSelection();
};

const clearSelection = () => {
    const answerEls = document.querySelectorAll('input[name="option"]');
    answerEls.forEach(answerEl => answerEl.checked = false);
};

const getSelected = () => {
    const answerEls = document.querySelectorAll('input[name="option"]');
    let selectedAnswer = null;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.id;
        }
    });
    return selectedAnswer;
};

const nextQuiz = () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer !== null) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score1++;
        }
        currentQuiz++;
        if (currentQuiz < totalQuestions) {
            loadQuiz();
        } else {
            displayResults();
        }
    } else {
        alert('Please select an answer before proceeding to the next question!');
    }
};

const displayResults = () => {
    if (score1 === totalQuestions) {
        alert(`Congratulations aap mahan ho! Your score is ${score1}/${totalQuestions}`);
    } else {
        alert(`Your score is ${score1}/${totalQuestions}`);
    }
};

submitBtn.addEventListener('click', nextQuiz);
nextBtn.addEventListener('click', nextQuiz);

// Initialize the quiz
loadQuiz();