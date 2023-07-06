//Função que adicona a tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#tasks-tittle").value;

    if(taskTitle) {

        //clona o template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".tasks-tittle").textContent = taskTitle;

        //remover as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#tasks-list");

        list.appendChild(newTask);

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        })

        //limpar texto
        document.querySelector("#tasks-tittle").value = "";
    }
}

// função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true)
}



// enevento de adicionar a terefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();
});