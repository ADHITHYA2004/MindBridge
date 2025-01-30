// total task

const task_arr = [{
    id: 0, task_name: 'Project completion', estimated_time: '2025-01-30T23:24', task_description: 'hello',
},
{
    id: 1, task_name: 'Project1 completion', estimated_time: '2025-02-28T15:25', task_description: 'hello',
}]

task_complete_count = 0;
function total_task_display() {
    document.getElementById('total-task-count').innerText = task_arr.length
    document.getElementById('completed-task-count').innerText = task_complete_count;
    document.getElementById('pending-task-count').innerText = task_arr.length - task_complete_count;

}
total_task_display()
// reset
function reset() {
    document.getElementById('task-name').value = ''
    document.getElementById('estimated-time').value = '';
    document.getElementById("description").value = '';
}
// click completed
function completed(event) {
    const com_bot = event.target
    let complete_bot = document.getElementById('complete-bot')
    document.getElementById('event-status').classList.add('complete')
    com_bot.parentNode.classList.remove('d-flex')
    com_bot.parentNode.classList.add('hide')
    com_bot.parentNode.previousElementSibling.classList.add('hide')
    com_bot.parentNode.nextElementSibling.classList.remove('hide')
    task_complete_count++;
    total_task_display()
}

//delete
function delete_bot(event,name) {
    console.log(name);
    for(let i=0;i<task_arr.length;i++){
        if (task_arr[i].task_name==name) {
            task_arr.splice(i, 1);
            console.log(task_arr);
            addtask()
            total_task_display()
        }
    }

}
// timer
function timer_start(event, inputtime) {
    let inputtime1 = inputtime + ":00";
    var countDownDate = new Date(inputtime1);
    console.log(countDownDate);
    x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(inputtime).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
        // console.log(days + "d " + hours + "h "
            // + minutes + "m " + seconds + "s ")
        // console.log(distance); // Check the countdown distance
        // console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(inputtime).innerHTML ='';
            document.getElementById(inputtime).innerText ="The Expected time is overed"
            console.log("The Expected time is overed");
        }
    }, 1000);
}

function timer_stop(event, inputtime) {
    clearInterval(x);
    document.getElementById(inputtime).innerHTML = "<p style='color:red'>Timer stopped.</p>";
}


// add task
document.getElementById('data-submit').addEventListener('click', (event) => {
    event.preventDefault();
    let task_name = document.getElementById('task-name').value;
    let estimated_time = document.getElementById('estimated-time').value;
    let task_description = document.getElementById("description").value
    let id = task_arr.length - 1;
    task_arr.push({
        id: id + 1, task_name: task_name, estimated_time: estimated_time, task_description: task_description,
    })
    total_task_display()
    addtask()
    reset()
})

function addtask() {
    let event_list = document.getElementById('task-list')
    event_list.innerHTML =" ";
    task_arr.forEach(obj => {
        event_list.innerHTML += `<div class="task d-flex justify-content-between shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <div class="row-gap-5" style="max-width: 400px;">
                        <h1  class="project-name" >${obj.task_name}</h1>
                        <h5 >Estimated Time: <span style="color:red;" class="estimated-time">${obj.estimated_time}</span></h5>
                        <p>${obj.task_description}</p>
                    </div>
                    <div class="event-center ">
                        <div class="event-timer">
                            <center><p style="color: #37b24d; font-size: 20px; font-weight:700;" id=${obj.estimated_time} class="timer" ></p></center>
                        </div>
                        <div class="event-buttons">
                            <button type="button" class="btn btn-success" id="start-bot" onclick="timer_start(event,\'${obj.estimated_time}\')">start</button>
                            <button type="button" class="btn btn-danger" id="end-bot" onclick="timer_stop(event,\'${obj.estimated_time}\')">End</button>
                        </div>
                        <div>
                        <h5 class='not-completed' id='event-status'>Not Completed</h5>
                        <h5 class='completed' id='event-status'>Completed</h5>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-3">
                        <button type="button" class="btn btn-success" id="complete-bot" onclick='completed(event)'>Completed</button>
                        <button type="button" class="btn btn-info" id="edit-bot">Edit</button>
                        <button type="button" class="btn btn-danger" id="delete-bot" onclick="delete_bot(event,\'${obj.task_name}\')">Delete</button>
                    </div>
                    <div class='hide' style='color:green'>
                        <h2>Task Completed</h2>
                    </div>
                </div>`
    })
}
addtask()