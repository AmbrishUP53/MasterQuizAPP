const questionBox = document.getElementById("question-box")
const Alloptions = document.querySelectorAll(".option") ;
let AllQuestions = []
let RandomNum ;
let count = 1 ;
let Score = 0;

let API_URL = "https://masterquizapp.onrender.com/" || "http://localhost:8080/"
async function fetchData(){
    try{
        const response = await fetch(`${API_URL}api/quizes`)
        let data = await response.json() ;
        AllQuestions = await data;
        RandomNum = UniqueRandomNumber(data.length , 15);
        addToHtml(AllQuestions);
    }catch(err){
        console.log("some error during loading the data");
    }
}

Alloptions.forEach((opt) =>{
    opt.addEventListener("click" , (e)=>{
        choosenAnswer = e.target.innerText;
        if(e.target.classList.contains("Correct_answer")){
           opt.style.backgroundColor = "green";
            Score += 1;
        }else{
           opt.style.backgroundColor = "red";
        }
        document.querySelector(".options").classList.add("disabled");
    })
})

async function addToHtml(data){
    let idx =  RandomNum();
    console.log(idx)
    if(idx !== undefined){
        let indexes = UniqueRandomNumber(4 , 4);
        let k = 0 ;
        questionBox.innerText = data[idx].question ;
        let currAnswer = data[idx].answer;
        for(let option of Alloptions) {
            option.style.backgroundColor = "";
            if(option.classList.contains("Correct_answer")){
                option.classList.remove("Correct_answer")
            }
            option.firstElementChild.innerText = data[idx].options[indexes[k++]];
            if(option.firstElementChild.innerText === currAnswer){
                option.classList.add("Correct_answer");
            }
        }
        document.querySelector(".count").innerHTML = `count : ${count++}/15`
    }else{
        submitPhase();
    }
   
}

function UniqueRandomNumber(max , count){
    let set = new Set();
    while (set.size < count ){
        let num = Math.floor(Math.random()*max);
        set.add(num);
    }
    let Indexes = Array.from(set); 
    if(max <=4 ){
        return Indexes;
    }
    return function getNext(){
        console.log(Indexes)
        return Indexes.pop();
    }
}

function submitPhase(){
    console.log("submit phase");
    document.querySelector(".submit-btn").style.display = "block";
    document.querySelector(".next-btn").style.display = "none";
    document.querySelector(".submit-btn").setAttribute("href" , `https://masterquizapp.onrender.com/quizes/result?score=${Score}`);
}

document.querySelector(".next-btn").addEventListener("click" , ()=>{
    document.querySelector(".options").classList.remove("disabled")
    addToHtml(AllQuestions)
})

fetchData()



