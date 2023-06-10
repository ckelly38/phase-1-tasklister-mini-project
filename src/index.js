document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submit was clicked!");
    inptnd = document.getElementById("create-task-form").querySelector("input");
    //console.log("inptnd = " + inptnd);
    //console.log(inptnd.value);
    
    //create the task element with the content
    let tsk = "" + inptnd.value;
    let tskelement = document.createElement("li");
    tskelement.innerText = tsk;

    //need a button to delete it
    let delelement = document.createElement("button");
    delelement.innerText = "done";
    delelement.addEventListener('click', function(){
      tskelement.remove();
    });
    
    tskelement.appendChild(delelement);
    document.getElementById("tasks").appendChild(tskelement);
  });
});
