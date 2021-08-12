//delete button functionality:-to delete the tasks from tasks list
deleteTask();
function deleteTask(){
    let deleteList=document.getElementsByClassName("delete-tasks");
    var i;
    for(i=0;i<deleteList.length;i++){
        deleteList[i].addEventListener("click",function(){
            var div=this.parentElement;
            div.style.display="none";
        })
    }
}

//ADD task button functionality:-To add the task in tasks list
let addButton=document.getElementById("add-button");
addButton.onclick=function(){
    var inputValue=document.getElementById("task").value;
    var div=document.createElement("div");
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
        deleteTask();    
    }
   
}