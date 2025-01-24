const questions = [
    {
        question: "Which method is used to remove the last element from an array?",
        options: [
            { answer: "pop()", isCorrect: true },
            { answer: "shift()", isCorrect: false },
            { answer: "push()", isCorrect: false },
            { answer: "unshift()", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        options: [
            { answer: "join()", isCorrect: true },
            { answer: "concat()", isCorrect: false },
            { answer: "slice()", isCorrect: false },
            { answer: "splice()", isCorrect: false }
        ]
    },
    {
        question: "Which method creates a new array with all elements that pass a test?",
        options: [
            { answer: "filter()", isCorrect: true },
            { answer: "map()", isCorrect: false },
            { answer: "reduce()", isCorrect: false },
            { answer: "forEach()", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: [
            { answer: "Number", isCorrect: false },
            { answer: "String", isCorrect: false },
            { answer: "Float", isCorrect: true },
            { answer: "Boolean", isCorrect: false }
        ]
    },
    {
        question: "What will the following code output: `console.log(3 + '3')`?",
        options: [
            { answer: "33", isCorrect: true },
            { answer: "6", isCorrect: false },
            { answer: "NaN", isCorrect: false },
            { answer: "Error", isCorrect: false }
        ]
    }
];
let user = JSON.parse(sessionStorage.getItem("userDetails"));
document.getElementById('name_display').innerHTML = `<h3>${user[0]}</h3>`


// Create the question content
for (let x = 0; x < questions.length; x++) {
    document.getElementById('quiz-contant').innerHTML +=
        `<div class="shadow-lg p-3 mb-5 bg-body rounded question-div" id="question-content-${x}">
        <div class="form-label">
            <label class="form-check-label" for="flexRadioDefault2">
                ${questions[x].question}
            </label>
        </div>
    </div>`;
    for (let y = 0; y < questions[x].options.length; y++) {
        if(questions[x].options[y].isCorrect){
            document.getElementById(`question-content-${x}`).innerHTML +=
            `<div class="form-check">
            <input class="form-check-input" st type="radio" name="option-${x}" id="flexRadioDefault option-${x}" value="${questions[x].options[y].isCorrect}">  
            ${questions[x].options[y].answer} <p class="correct"> correct</p>
        </div>`;
        }
        else{
            document.getElementById(`question-content-${x}`).innerHTML +=
            `<div class="form-check">
            <input class="form-check-input" st type="radio" name="option-${x}" id="flexRadioDefault option-${x}" value="${questions[x].options[y].isCorrect}">  
            ${questions[x].options[y].answer} <p class='wrong' id='wrong-${x}${y}'></p>
        </div>`;
        }
    }
}


document.getElementById('submit-but').addEventListener('click', (e) => {
    e.preventDefault;
    console.log("total")
    totalscore();
    scorecard();
})

let total_score = 0;

// calculate score
function totalscore() {
    for (let x = 0; x < questions.length; x++) {
        let options = document.getElementsByName(`option-${x}`)
        for (let y = 0; y < options.length; y++) {
            if (options[y].checked) {
                if (options[y].value == 'true') {
                    total_score++;
                }
                else{
                    let wrong=document.getElementById(`wrong-${x}${y}`)
                    wrong.innerHTML=`<i class="fa-regular fa-circle-xmark"></i>`
                    wrong.style.display='inline'
                    
                }
            }
            else{
                
            }
        }
    }
    console.log(total_score);
}


function scorecard() {
    document.getElementById('blur').style.display = 'block';
    document.getElementById('scoreresult').textContent=`${total_score}/10`
}

document.getElementById('score-bot').addEventListener('click',(e)=>{
    e.preventDefault;

    var elements = document.getElementsByClassName('correct');
    for (let x = 0; x < elements.length; x++) {
        if(elements[x]) { 
            elements[x].style.display = 'inline';
        }
    }
    document.getElementById('blur').style.display = 'none';

})