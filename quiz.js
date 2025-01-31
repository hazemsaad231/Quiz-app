const data = [
    {
        id : 1 ,
        question: `How many times did Zamalek win the Egyptian League? `,
        answers : [
            {answer : '12' , isCorrect : false},
            {answer : '30' , isCorrect : false},
            {answer : '14' , isCorrect : true},
            {answer : '17' , isCorrect : false},

        ],
    },
    {
        id : 2 ,
        question: ` How many times did Zamalek win the Egyptian cup? `,
        answers : [
            {answer : '28' , isCorrect : true},
            {answer : '10' , isCorrect : false},
            {answer : '22' , isCorrect : false},
            {answer : '12' , isCorrect : false},
        ],
    },
    {
        id : 3 ,
        question: `How many times did Zamalek win the africa champions league?`,
        answers : [
            {answer : '3' , isCorrect : false},
            {answer : '5' , isCorrect : true},
            {answer : '6' , isCorrect : false},
            {answer : '4' , isCorrect : false},
        ],
    },
    {
        id : 4 ,
        question: `How many times did Zamalek win super cup?  `,
        answers : [
            {answer : '5' , isCorrect : false},
            {answer : '4' , isCorrect : true},
            {answer : '3' , isCorrect : false},
            {answer : '7' , isCorrect : false},
        ],
    },
    {

         id : 5 ,
        question: ` How many times did Zamalek win super african cup?  `,
         answers : [
                {answer : '5' , isCorrect : false},
                {answer : '4' , isCorrect : true},
                {answer : '3' , isCorrect : false},
                {answer : '7' , isCorrect : false},
            ],
        }, 
]        


let play = document.querySelector('.play')
let result = document.querySelector('.result')
let quiz = document.querySelector('.quiz')
let Answers = document.querySelector('.answers')
let supmit = document.querySelector('.supmit')
let agian = document.querySelector('.button')
let big = document.querySelector(".big")
let h = document.querySelector('.h1')


let qIndex = 0 ;
let countC = 0 ;
let countW = 0 ;
let total = 0 ;
let select ;

let show = (num)=>{
    if(qIndex==data.length)return showResult()
    select = null
    quiz.textContent = data[num].question
    Answers.innerHTML = data[num].answers.map(( item , index )=>
       ` 
         <div class="answer">
       <input type="radio" name="answer" id=${index} value=${item.isCorrect}>
       <label>${item.answer}</label>
   </div>
 `
).join('');
selectAnswers()
}

let selectAnswers = ()=>{
    Answers.querySelectorAll('input').forEach(el=>{
        el.onclick=(h)=>{
          select =h.target.value
        }
    })
}

 let Select=() => { 
    supmit.addEventListener('click',()=>{
    if(select !== null){
            select==='true' ? countC++ : countW++
            qIndex++
            show(qIndex)
    }else alert('select answer')
        })

    }
    let showResult = ()=>{
        
    if(countC > countW){
        h.textContent = "congratulations"
        h.style.color = "green"
    }else{
        h.textContent = " bad luck " 
        h.style.color = "red"
    }

        big.style.display = "block"
        play.style.display = "none"
    
        big.querySelector('.correct').textContent=`
        correct answers : ${countC}
        `
        big.querySelector('.wrong').textContent=`
        wrong answers : ${countW}`
    
        big.querySelector('.score').textContent=`
        score : ${(countC) * 10}`
    }
    



show(qIndex)
Select()

agian.onclick = function(){
   return location.reload()
}

