const input = document.getElementById("input");
const tasksDiv = document.getElementById("tasksDiv")


function addTask(){
    
    if(input.value === ""){
        return
    }
    const itemDiv = document.createElement("div")
    itemDiv.className = "itemDiv"
    const taskText = document.createElement("span")
    taskText.textContent = input.value
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete"
    delBtn.addEventListener("click", function(){
        itemDiv.remove()
    })
    const changeBtn = document.createElement("button")
    changeBtn.textContent = "Change Text"
   
    
    changeBtn.addEventListener("click", function(){
        const inputTaskText = document.createElement("input")
        inputTaskText.value = taskText.textContent
        itemDiv.replaceChild(inputTaskText,taskText)
    })
    itemDiv.appendChild(changeBtn)
    itemDiv.appendChild(taskText)
    itemDiv.appendChild(delBtn)
    tasksDiv.appendChild(itemDiv)
    const delAllBtn = document.getElementById("delAll")
    delAllBtn.addEventListener("click", function(){
        const allDivs = document.querySelectorAll(".itemDiv")
        allDivs.forEach(function(div){
            div.remove()
        })
    })

}








