document.getElementById('data-update').classList.add('hide')
document.getElementById('data-submit').classList.remove('hide')




const event_arr = [
    // s_no: 0, event_name: 'groupeeting', event_category: 'Meeting', event_date: '12-01-2025', event_time: '23:45', description: 'The meeting is main for the startup'
];

let s_no = 0;
document.getElementById('data-submit').addEventListener('click', (event) => {
    event.preventDefault();
    let event_name = document.getElementById('event-name').value;
    let event_category = document.getElementById('select-event-category').value
    for (i = 0; i < event_category.length; i++) {
        if (event_category[i].checked) {
            event_category = event_category[i].value;
        }
    }
    let event_date = document.getElementById('event-date').value;
    let event_time = document.getElementById('event-time').value;
    let description = document.getElementById('description').value;
    let date = event_date.split("-");
    let sdate = Number(date[2]);
    let month = Number(date[1]);
    let year = Number(date[0]);
    let today = new Date();
    let taskDate = new Date(year, month - 1, sdate);
    let taskStatus;
    if (taskDate.toDateString() === today.toDateString()) {
        taskStatus = "Present";
    }
    else if (taskDate > today) {
        taskStatus = "Upcoming";
    }
    else {
        taskStatus = "Past";
    }

    event_arr.push({
        s_no: s_no, event_name: event_name, event_category: event_category, event_date: event_date, event_time: event_time, description: description, event_status: taskStatus
    })
    console.log(event_arr)
    s_no++;

    addevent()
    resetform()
})

const newdate = new Date();
function addevent() {
    const content = document.getElementById('table-body')
    content.innerHTML = '';
    event_arr.forEach(obj => {
        content.innerHTML += `<tr class='task ${obj.event_status}'>
                                <td>${obj.s_no}</td>
                                <td>${obj.event_name}</td>
                                <td>${obj.event_category}</td>
                                <td>${obj.event_date}</td>
                                <td>${obj.event_time}</td>
                                <td>${obj.description}</td>
                                <td id='${obj.event_status}'>${obj.event_status}</td>
                                <td><i id='delete_row' onclick='delete_row(event)' class="fa-solid fa-trash"></i> 
                                    <i id='edit_row' onclick='edit_row(event)' class="fa-solid fa-pen-to-square"></i></td>
                            </tr>`

    })
}
addevent()

function delete_row(event) {
    const row1 = event.target.closest("tr");
    row1.remove();
    const row = event.target.closest("tr");
    let index = parseInt(row.children[0].textContent, 10)
    if (index >= 0 && index < event_arr.length) {
        event_arr.splice(index, 1);
        console.log(index)
    }
    addevent()
}
// update


function edit_row(event) {
    event.preventDefault();
    let row = event.target.closest("tr");
    let id = parseInt(row.children[0].textContent.trim(), 10);
    // console.log(id);
    document.getElementById('event-name').value = event_arr[id].event_name;
    document.getElementById('select-event-category').value = event_arr[id].event_category;
    document.getElementById('event-date').value = event_arr[id].event_date;
    document.getElementById('event-time').value = event_arr[id].event_time;
    document.getElementById('description').value = event_arr[id].description;
    document.getElementById('data-submit').classList.add('hide')
    document.getElementById('data-update').classList.remove('hide')
    // update
    document.getElementById('data-update').addEventListener('click', (event) => {
        event.preventDefault()
        let event_name = document.getElementById('event-name').value;
        let event_category = document.getElementById('select-event-category').value
        for (i = 0; i < event_category.length; i++) {
            if (event_category[i].checked) {
                event_category = event_category[i].value;
            }
        }
        let event_date = document.getElementById('event-date').value;
        let event_time = document.getElementById('event-time').value;
        let description = document.getElementById('description').value;
        let date = event_date.split("-");
        let sdate = Number(date[2]);
        let month = Number(date[1]);
        let year = Number(date[0]);
        let today = new Date();
        let taskDate = new Date(year, month - 1, sdate);
        let taskStatus;
        if (taskDate.toDateString() === today.toDateString()) {
            taskStatus = "Present";
        }
        else if (taskDate > today) {
            taskStatus = "Upcoming";
        }
        else {
            taskStatus = "Past";
        }
        updateObject(id, {
            s_no: id,
            event_name: event_name,
            event_category: event_category,
            event_date: event_date,
            event_time: event_time,
            description: description,
            event_status: taskStatus,
        });
        resetform();
        addevent();
        document.getElementById('data-submit').classList.remove('hide')
        document.getElementById('data-update').classList.add('hide')
    })


}
function updateObject(id, newObj) {

    // console.log(id)
    let index = event_arr.findIndex(obj => {
        // console.log( obj.s_no);
        if(obj.s_no == id){
            // console.log('hi' + obj);
            return true
        }
    });
    // console.log("hii" + index);
    
    if (index >=0) {
    console.log(event_arr[id]);
        event_arr[index] = newObj;
        console.log(event_arr[id]);
        addevent();
    }
    else {
        console.error(`Object with id ${id} not found`);
    }
}




// reset form
function resetform() {
    document.getElementById("event-name").value = "";
    document.getElementById("select-event-category").value = "";
    document.getElementById("event-date").value = "";
    document.getElementById("event-time").value = "";
    document.getElementById("description").value = "";
}




function upcoming(){
    let upcoming=document.querySelectorAll('.task')
    upcoming.forEach(ele =>{
        if(ele.classList.contains('Upcoming')){
            console.log(ele)
            ele.style.display='table-row'
        }
        else{
            ele.style.display='none'
        }
    })
}
function present(){
    let present=document.querySelectorAll('.task')
    present.forEach(ele =>{
        if(ele.classList.contains('Present')){
            ele.style.display='table-row'
        }
        else{
            ele.style.display='none'
        }
    })
}
function past(){
    let past=document.querySelectorAll('.task')
    past.forEach(ele =>{
        if(ele.classList.contains('Past')){
            ele.style.display='table-row'
        }
        else{
            ele.style.display='none'
        }
    })
}