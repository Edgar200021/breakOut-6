let textinput = document.querySelector("#textinput");
let submitinput = document.querySelector("#submitinput");
let main = document.querySelector("#main");
let deletealllists = document.querySelector(".deletealllists");


submitinput.addEventListener("click",() => makelist());

function makelist() {
  let textexample = document.createElement("input");
  textexample.value = textinput.value;
  textexample.classList = "textexample";
  textexample.readOnly = true;
  textexample.style.display = "inline-block";
  textexample.style.marginRight = "10px";
  let deletetext = document.createElement("button");
  deletetext.textContent = "Delete";
  deletetext.classList = "deletetext";
  deletetext.style.display = "inline-block";
  deletetext.addEventListener("click", () => deleteText(textexample));
  deletetext.style.marginRight = "10px";
  let changetext = document.createElement("button");
  changetext.textContent = "Change";
  changetext.classList = "changetext";
  changetext.style.display = "inline-block";
  changetext.addEventListener("click", () => changeText(textexample));
  let textexamplediv = document.createElement("div");
  textexamplediv.style.marginBottom = "10px";
  textexamplediv.appendChild(textexample);
  textexamplediv.appendChild(deletetext);
  textexamplediv.appendChild(changetext);
  main.appendChild(textexamplediv);

}

deletealllists.addEventListener("click",() =>deletealltexts());
function deletealltexts() {
   let areas = document.getElementsByClassName("textexample");
   while (areas.length > 0) {
      areas[0].parentElement.remove();
   }
}
function deleteText(textexample) {
   textexample.parentElement.remove();
}
function changeText(textexample) {
  textexample.readOnly = !textexample.readOnly;
}
