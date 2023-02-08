const input = document.getElementById("input");
const tasksDiv = document.getElementById("tasksDiv")
const delAllBtn = document.getElementById("delAll")



function addTask(){
    if(input.value === ""){
        return
    }
    const itemDiv = document.createElement("div")
    itemDiv.className = "itemDiv"
    const taskText = document.createElement("input")
    taskText.value = input.value
    taskText.setAttribute("readonly","readonly")

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete"
    delBtn.className = "btn"

    delBtn.addEventListener("click", function(){
        itemDiv.remove()
    })
    const changeBtn = document.createElement("button")
    changeBtn.id = "changeBtn"
    changeBtn.className = "btn"
    changeBtn.textContent = "Change Text"

    changeBtn.addEventListener("click", function(){
        if(changeBtn.textContent === "Change Text"){
            taskText.removeAttribute("readonly")
            changeBtn.textContent = "Save"
        }else{
            taskText.setAttribute("readonly","readonly")
            changeBtn.textContent = "Change Text"
        }
    })
    itemDiv.appendChild(changeBtn)
    itemDiv.appendChild(taskText)
    itemDiv.appendChild(delBtn)
    tasksDiv.appendChild(itemDiv)
    delAllBtn.addEventListener("click", function(){
        const allDivs = document.querySelectorAll(".itemDiv")
        allDivs.forEach(function(div){
            div.remove()
        })
    })
    // input.value = ""
}







