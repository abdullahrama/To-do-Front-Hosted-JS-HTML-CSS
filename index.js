//alert("Hello!")

window.addEventListener('load', () =>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    
    form.addEventListener('submit', (e) => {
        //prevents refresh every submission
        e.preventDefault();

        const task = input.value;
        if (!task){
            alert("Please fill form");
            return;
        } 

        const task_el = document.createElement("div");
        task_el.classList.add("task");


    })
});
