var noOftasks=0;

//delete button functionality:-to delete the tasks from tasks list
deleteTask();
function deleteTask(){
    let deleteList=document.getElementsByClassName("delete-tasks");
    var i;
    for(i=0;i<deleteList.length;i++){
        deleteList[i].addEventListener("click",function(){
            var div=this.parentElement;
            noOftasks--;
            div.remove();
        })
    }

}

function changeClass(div){
    console.log(div);
}

//ADD task button functionality:-To add the task in tasks list
let addButton=document.getElementById("add-button");
addButton.onclick=function(){
    var inputValue=document.getElementById("task").value;
    var div=document.createElement("div");
    div.className="uncomplete";
    div.classList.add("tsk");
    var li=document.createElement("li");
    var i=document.createElement("i");
    if(inputValue=== ""){
        alert("You Must Write Something");
    }else{
        i.className="fas fa-trash delete-tasks";
        li.innerHTML=inputValue;
        div.append(li,i);
        var myTasksList=document.getElementById('tasks-container');
        myTasksList.append(div);
        noOftasks++;
        deleteTask(); 
    }
   
}

//All button functionality:to show both uncomplete and completed tasks
var allButton=document.getElementById('all-button');
allButton.onclick=function(){
    var tasksList=document.getElementsByClassName("complete");
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='initial';
    }
    var tasksList=document.getElementsByClassName('uncomplete');
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='initial';
    }
}

//Completed button functionality:to show only completed tasks
var completeButton=document.getElementById('complete-button');
completeButton.onclick=function(){
    var tasksList=document.getElementsByClassName("complete");
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='initial';
    }
    var tasksList=document.getElementsByClassName('uncomplete');
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='none';
    }
}

//uncomplete button functionality:to show only uncomplete tasks
var uncompleteButton=document.getElementById('uncomplete-button');
uncompleteButton.onclick=function(){
    var tasksList=document.getElementsByClassName("complete");
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='none';
    }
    var tasksList=document.getElementsByClassName('uncomplete');
    for(let i=0;i<tasksList.length;i++){
        tasksList[i].style.display='initial';
    }
}



//complete all tasks button
var completeAll=document.getElementById("complete-all");
completeAll.onclick=function(){
    var totalDiv=document.querySelectorAll("ul .tsk");

    //console.log(totalDiv);
    for(var i=0;i<totalDiv.length;i++){
       if(totalDiv[i].classList.contains("uncomplete")){
           totalDiv[i].classList.remove("uncomplete");
           totalDiv[i].classList.add("complete"); 
       }
    }
    //console.log(totalDiv);
}

//Clear All Completed Task button
var clearAllbtn=document.getElementById('clear-complete');
clearAllbtn.onclick=function(){
    var tasksList=document.querySelectorAll("ul .complete");
    // console.log(tasksList.length);
    // console.log(tasksList);
    for(var i=0;i<tasksList.length;i++){
         console.log(i);
        tasksList[i].remove();
    }
    console.log(tasksList);
}