// total task

const task_arr = [{
    id: 0, task_name: 'Project completion', estimated_time: '2025-01-28T24:25', task_description: 'hello',
},
{
    id: 1, task_name: 'Project completion', estimated_time: '2025-01-28T24:25', task_description: 'hello',
}]

function total_task_display() {
    document.getElementById('total-task-count').innerText = task_arr.length
}
total_task_display()
// reset
function reset(){
    document.getElementById('task-name').value=''
    document.getElementById('estimated-time').value='';
    document.getElementById("description").value='';
}
// click completed
function completed(event){
    const com_bot = event.target
    let complete_bot=document.getElementById('complete-bot')
    document.getElementById('event-status').classList.add('complete')
    com_bot.classList.add('hide')
}

// add task
document.getElementById('data-submit').addEventListener('click', (event) => {
    event.preventDefault();
    let task_name = document.getElementById('task-name').value;
    let estimated_time = document.getElementById('estimated-time').value;
    let task_description = document.getElementById("description").value
    let id = task_arr.length - 1;
    task_arr.push({
        id: id+1, task_name: task_name, estimated_time:estimated_time, task_description:task_description,

    })
    addtask()
    reset()
})

function addtask() {
    let event_list = document.getElementById('task-list')
    task_arr.forEach(obj => {
        event_list.innerHTML += `<div class="task d-flex justify-content-between shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <div class="row-gap-5" style="max-width: 400px;">
                        <h1  class="project-name" >${obj.task_name}</h1>
                        <h5 >Estimated Time: <span style="color:red;" class="estimated-time">${obj.estimated_time}</span></h5>
                        <p>${obj.task_description}</p>
                    </div>
                    <div class="event-center ">
                        <div class="event-timer">
                            <center><p id="timer" class="timer">00:00:00</p></center>
                        </div>
                        <div class="event-buttons">
                            <button type="button" class="btn btn-success" id="start-bot">start</button>
                            <button type="button" class="btn btn-danger" id="end-bot">End</button>
                        </div>
                        <div>
                        <h5 class='not-completed' id='event-status'>Not Completed</h5>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-3">
                        <button type="button" class="btn btn-success" id="complete-bot" onclick='completed(event)'>Completed</button>
                        <button type="button" class="btn btn-info" id="edit-bot">Edit</button>
                        <button type="button" class="btn btn-danger" id="delete-bot">Delete</button>
                    </div>
                </div>`
    })
}
addtask()