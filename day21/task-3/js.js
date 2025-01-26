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

    event_arr.push({
        s_no: s_no, event_name: event_name, event_category: event_category, event_date: event_date, event_time: event_time, description: description
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
        content.innerHTML += `<tr>
                                <td>${obj.s_no}</td>
                                <td>${obj.event_name}</td>
                                <td>${obj.event_category}</td>
                                <td>${obj.event_date}</td>
                                <td>${obj.event_time}</td>
                                <td>${obj.description}</td>
                                <td>Upcoming</td>
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
    const row = event.target.closest("tr");
    let id = parseInt(row.children[0].textContent.trim(), 10);
    
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
        console.log(event_name);
        console.log(event_category);
        console.log(event_date);
        console.log(event_time);
        console.log(description);
        updateObject(id, {
            s_no: id,
            event_name: event_name,
            event_category: event_category,
            event_date: event_date,
            event_time: event_time,
            description: description,
        });
            resetform();
            addevent();
            document.getElementById('data-submit').classList.remove('hide')
            document.getElementById('data-update').classList.add('hide')
    })


}
function updateObject(id, newObj) {
    const index = event_arr.findIndex(obj => obj.s_no == id);
    console.log(id);
    if (index !== -1) {
        event_arr[index] = newObj;
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