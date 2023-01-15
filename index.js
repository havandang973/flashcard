var getAdd = document.querySelector('.add')
var getDel = document.querySelector('.del')
var getFormCreat = document.querySelector('.create')
var getBtns = document.querySelectorAll('button')
var getSave = document.querySelector('.save')
var getClose = document.querySelector('.close')
var getFlashcard = document.querySelector('.flashcard')
var getCtnFlascard = document.querySelector('.container-flashcards')
var getValueQuestion = document.getElementById('question')
var getValueAnswer = document.getElementById('answer')


function addCard() {
    var divFl = document.createElement('div')
    var divTab = document.createElement('div')
    var iClose = document.createElement('i')
    var divShowQuestion = document.createElement('div')
    var pQuestion = document.createElement('p')
    var divShowAnswer = document.createElement('div')
    var pAnswer = document.createElement('p')

    divFl.className = 'flashcard'
    divTab.className = 'tab'
    iClose.className = 'material-symbols-outlined'
    divShowQuestion.className = 'show-question'
    pQuestion.className = 'value-question'
    divShowAnswer.className = 'show-answer'

    pQuestion.style.width = '90%'
    pQuestion.style.height = 'auto'
    pQuestion.style.wordBreak = 'break-all'
    pAnswer.className = 'value-answer'
    pAnswer.style.wordBreak = 'break-all'

    pAnswer.classList.add('none')
    iClose.innerText = 'close'

    divShowAnswer.appendChild(pAnswer)
    divShowQuestion.appendChild(pQuestion)
    divTab.appendChild(iClose)

    
    divFl.appendChild(divTab)
    divFl.appendChild(divShowQuestion)
    divFl.appendChild(divShowAnswer)

    getCtnFlascard.appendChild(divFl)

    // Del FlashCards
    getDel.addEventListener('click', function() {
        divFl.remove()
    })

    //close từng card
    console.log(iClose)
    iClose.addEventListener('click', function() {
        divFl.remove()
    })
    
    // show hideen answer
    pQuestion.innerText = getValueQuestion.value
    pAnswer.innerText = getValueAnswer.value
    divFl.addEventListener('click', function() {
        pAnswer.classList.toggle('none')
    })
}

// chặn default button
for(var i = 0; i < getBtns.length; i++) {
    getBtns[i].addEventListener('click', function(e) {
        e.preventDefault()
    })
}

// Add Card
getAdd.addEventListener('click', function() {
    getFormCreat.style.display = 'flex'
})


// button Close
getClose.addEventListener('click', function() {
    getFormCreat.style.display = 'none'
    getValueQuestion.value = ''
    getValueAnswer.value = ''
})

//button save
getSave.addEventListener('click', function() {
    addCard()
})
