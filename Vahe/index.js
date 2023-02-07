let input1 = document.querySelector("#input1");
let button = document.querySelector("#button");
let text = document.querySelector("#text");
let deleteAll = document.querySelector("#deleteAll");

button.addEventListener('click',function 
btn()

 {
    let div = document.createElement('div')
    div.className="div";
    button.classList="inpbutton"
    deleteAll.classList="delete"
    
    let text1 = document.createElement("input");
    let buttonDelit =document.createElement("button")
    let edit = document.createElement('button')
    text1.setAttribute("readonly","readonly")
    buttonDelit.addEventListener('click',  () => {
        div.remove();
    })
    buttonDelit.classList="delete"
    edit.classList="edit"

    // edit.addEventListener('click', ()=>{
    //     text1.readOnly = !text1.readOnly
    //      edit.textContent ="Add"

    // })


    edit.addEventListener('click',()=> x('y'));
    edit.addEventListener('click',()=> x('z'));
    function x(abc) {
        if (abc=='y') {
            text1.readOnly = !text1.readOnly
            edit.textContent ="Add"
            edit.style.backgroundColor="green"
        }
        else if (abc==!'z'){
            text1.readOnly = !text1.readOnly
            edit.textContent ="Edit"
        }
        
    }


    buttonDelit.textContent="Delit"
    edit.textContent="Edit"
    text1.value=input1.value;
    div.appendChild( text1);
    div.appendChild(buttonDelit);
    div.appendChild(edit)
    text.appendChild(div)
    input1.value=""


    deleteAll.addEventListener('click', function deleteAll() {
        let divAll=document.querySelectorAll(".div")
        buttonDelit.parentElement.remove();
        })
})
  



































