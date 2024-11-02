const quizData = [
    {
        question: 'How old is Florin?',
        options: ['10', '17', '26', '110'],
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        options: ['Java', 'C', 'Python', 'JavaScript'],
        correct: 'd'
    },
    {
        question: 'Who is the President of US?',
        options: ['Florin Pop', 'Donald Trump', 'Ivan Saldano', 'Mihai Andrei'],
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        options: ['Hypertext Markup Language', 'Cascading Style Sheet', 'Jason Object Notation'],
        correct: 'a'
    },
    {
        question: "What year was JavaScript launched?",
        options: ['1996', '1995', '1994', 'none of the above'],
        correct: 'b'
    }
];

const quiz = document.getElementById('quiz');
const questionEle = document.getElementById('question');
const option_1 = document.getElementById('option_1');
const option_2 = document.getElementById('option_2');
const option_3 = document.getElementById('option_3');
const option_4 = document.getElementById('option_4');
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next');

let currentQuiz = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);

const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    questionEle.innerText = currentQuizData.question;
    option_1.innerText = currentQuizData.options[0];
    option_2.innerText = currentQuizData.options[1];
    option_3.innerText = currentQuizData.options[2];
    option_4.innerText = currentQuizData.options[3];

    // Clear previous selection
    const answerEls = document.querySelectorAll('input[name="option"]');
    answerEls.forEach(answerEl => answerEl.checked = false);
};

const getSelected = () => {
    const answerEls = document.querySelectorAll('input[name="option"]');
    let selectedAnswer;
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
        userAnswers[currentQuiz] = selectedAnswer;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            alert('You have completed the quiz!');
        }
    } else {
        alert('Please select an answer before proceeding to the next question!');
    }
};


const submitQuiz = () => {
    const allAnswered = userAnswers.every(answer => answer !== null);
    if (allAnswered) {
        // Optionally, you can check if the selected answers are correct
        console.log('All questions have been answered.');
        console.log(`User answers: ${userAnswers}`);
    } else {
        alert('Please attempt all questions before submitting the quiz!');
    }
};

nextBtn.addEventListener('click', nextQuiz);
submitBtn.addEventListener('click', submitQuiz);

loadQuiz();


// 