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