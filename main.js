//ამოცანა N1
const textToHide = document.getElementById('text-to-hide')
const hideBtn = document.getElementById('hide-btn') 

hideBtn.addEventListener('click', () => {
    textToHide.style.display = 'none'
})

//ამოცანა N2
const containerTask2 = document.querySelector('.container-task-2')

const link = document.createElement('a')
link.setAttribute('href', '#')
link.innerText = 'Go to profile'

const cardTitle = document.createElement('h2')
cardTitle.innerText = "Gandalf"

const card = document.createElement('div')
card.id = 'card'

card.append(cardTitle, link)

containerTask2.appendChild(card)


//ამოცანა N3
const quizQuestions = [
    {
        question: "1) Which of the following command is used to create react-js-app ?",
        answers: [
            {ans: 'npm install create-react-app', correct: false},
            {ans: 'npx create-react-app appname', correct: true},
            {ans: 'npx install create-react-app -g', correct: false}
        ]
    },
    {
        question: "2) In React.js which one of the following is used to create a class for Inheritance ?",
        answers: [
            {ans: 'Extends', correct: true},
            {ans: 'Create', correct: false},
            {ans: 'Inherits', correct: false},
            {ans: 'Delete', correct: false},
        ]
    },
    {
        question: "3) What is the default port number in which the application run ?",
        answers: [
            {ans: '8080', correct: false},
            {ans: '3000', correct: true}
        ]
    },
    {
        question: "4) Which of the following valid component return type of React ?",
        answers: [
            {ans: '5', correct: false},
            {ans: '3', correct: false},
            {ans: '1', correct: true}
        ]
    },
    {
        question: "5) Which of the following is a way to handle data in React.js ?",
        answers: [
            {ans: 'State & Component', correct: false},
            {ans: 'State & Props', correct: true},
            {ans: 'State & Services', correct: true}
        ]
    },
]


const quizContainer = document.getElementById('quizContainer')
const pointsText = document.getElementById('points')
let points = 0

quizQuestions.map(eachQuestion => {

    let quesContainer = document.createElement('div')
    quesContainer.classList.add('question-container')

    let question = document.createElement('div')
    question.classList.add('question')
    question.innerText = eachQuestion.question

    let ansContainer = document.createElement('div')
    ansContainer.classList.add('answers-container')

    quesContainer.appendChild(question)


    eachQuestion.answers.map(eachAnswer => {
        let answer = document.createElement('div')
        answer.classList.add('answer')
        answer.setAttribute('isCorrect', `${eachAnswer.correct}`)
        answer.innerText = eachAnswer.ans
    
        ansContainer.append(answer)
        quesContainer.append(ansContainer)

    })

    quizContainer.appendChild(quesContainer)
})

quizContainer.querySelectorAll('.answer').forEach(answerElement => {
    answerElement.addEventListener('click', () => {
        //Make elements unclickable after selecting an answer
        answerElement.parentElement.style.pointerEvents = 'none'
        
        // Check if the answer is correct
        let isCorrect = answerElement.getAttribute('isCorrect')

        if(isCorrect === "true"){
            answerElement.classList.add('correct')
            points++
            pointsText.innerText = points
        }else{
            answerElement.classList.add('false')
        }
    });
});