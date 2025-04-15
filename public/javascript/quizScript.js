const questionBox = document.getElementById("question-box")
const Alloptions = document.querySelectorAll(".option") ;

console.log(Alloptions)
let i = 0 
async function loadData(){
    const response = await fetch("http://localhost:8080/api/quizes")
    let data = await response.json() ;
    addToHtml(data);
}

Alloptions.forEach((opt) =>{
    opt.addEventListener("click" , (e)=>{
        console.log("option was clicked")
    })
})

loadData()

async function addToHtml(data){
    questionBox.innerText = data[i].question ;
    let k = 0
    for(let option of Alloptions) {
        option.firstElementChild.innerText = data[i].options[k++]
        console.log(option.firstElementChild.innerText)
    }
    i++
}

document.querySelector(".next-btn").addEventListener("click" , ()=>{
    loadData()
})