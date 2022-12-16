
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listEl = document.querySelector('#tasks');


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(getCurrentTime());

        const task = input.value;
        if (!task) {
            alert('Please fill out of the task');
            return;
        }

        const taskEl = document.createElement('div');
        taskEl.classList.add('task');

        const taskContentEl = document.createElement('div')
        taskContentEl.classList.add('content');

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement('input');
        taskInputEl.classList.add('text');
        taskInputEl.type = 'text';
        taskInputEl.value = task;
        taskInputEl.setAttribute('readonly', 'readonly');

        taskContentEl.appendChild(taskInputEl);

        const taskActionsEl = document.createElement('div');
        taskActionsEl.classList.add('actions');

        const taskEditEl = document.createElement('button');
        taskEditEl.classList.add('edit');
        taskEditEl.innerHTML = "Edit";

        const taskDeleteEl = document.createElement('button');

        const h1 = document.createElement('h3');
        h1.innerHTML = `${getCurrentTime()}`
        taskDeleteEl.classList.add('delete');
        taskDeleteEl.innerHTML = "Delete";

        taskActionsEl.appendChild(taskEditEl);
        taskActionsEl.appendChild(taskDeleteEl);
        taskActionsEl.appendChild(h1);

        taskEl.appendChild(taskActionsEl);

        listEl.appendChild(taskEl);

        input.value = "";


        taskEditEl.addEventListener('click', () => {
            if (taskEditEl.innerText.toLowerCase() == "edit") {
                taskInputEl.removeAttribute('readonly');
                taskInputEl.focus();
                taskEditEl.innerText = 'Save';
            } else {
                taskInputEl.setAttribute("reasonly", "reasonly");
                taskEditEl.innerHTML = "Edit";
            }
        });

        taskDeleteEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        });


    })
})
function getCurrentTime() {
    const getCurrentDate = new Date()
    const hours = getCurrentDate.getHours()
    const minutes = getCurrentDate.getMinutes()
    const seconds = getCurrentDate.getSeconds()
    return `${hours}:${minutes}:${seconds}`
}
