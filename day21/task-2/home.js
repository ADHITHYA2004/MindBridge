const car_details = [{},]


document.getElementById("data-submit").addEventListener("click", function (e) {
    e.preventDefault();
    var car_name = document.getElementById('car-name').value;
    var select_car_type = document.getElementById('select-car-type').value;
    for (i = 0; i < select_car_type.length; i++) {
        if (select_car_type[i].checked) {
            select_car_type = select_car_type[i].value;
        }
    }
    var img = document.getElementById('img').value;
    var select_transmition = document.getElementById('Select-transmition').value;
    for (i = 0; i < select_transmition.length; i++) {
        if (select_transmition[i].checked) {
            select_transmition = select_transmition[i].value;
        }
    }
    var capacity = document.getElementById('capacity').value;
    var price = document.getElementById('price').value;
    var description = document.getElementById('description').value;

    console.log(car_name + price + select_car_type + select_transmition + capacity + description)
    adddetails(car_name, select_car_type, img, select_transmition, price, capacity, description);
    car_details.push({
        car_name: car_name,
        select_car_type:select_car_type,
        img:img,
        select_transmition:select_transmition,
        capacity:capacity,
        price:price,
        description:description,
    });
    console.log(car_details)
})



function adddetails(car_name, select_car_type, img, select_transmition, price, capacity, description) {
    const table_body = document.getElementById("table-body");
    const newrow = document.createElement("tr");
    newrow.innerHTML = `
                                <td>${car_name}</td>
                                <td>${select_car_type}</td>
                                <td class='hideimg'>${img}</td>
                                <td>${select_transmition}</td>
                                <td>${price}</td>
                                <td>${capacity}</td>
                                <td>${description}</td>
                                <td><i id='delete_row' onclick='delete_row(event)' class="fa-solid fa-trash"></i> 
                                <i id='edit_row' onclick='edit_row(event)' class="fa-solid fa-pen-to-square"></i></td>`;
    table_body.appendChild(newrow)
}

// delete
function delete_row(event) {
    const row = event.target.closest("tr");
    row.remove();
}


// edit
function edit_row(event) {

}
// https://therentalradar.com/_next/image?url=%2Fimages%2Foffers%2Flarge.png&w=256&q=75



// document.getElementById('admin').classList.add('hide')

function home_bot(event) {
    event.preventDefault();
    document.getElementById('admin-page').classList.add('hide');
    document.getElementById('booking-page').classList.add('hide')
    document.getElementById('home-page').classList.remove('hide')
}
function admin_bot(event) {
    event.preventDefault();
    document.getElementById('admin-page').classList.remove('hide');
    document.getElementById('booking-page').classList.add('hide')
    document.getElementById('home-page').classList.add('hide')
}
function booking_bot(event) {
    event.preventDefault();
    document.getElementById('admin-page').classList.add('hide');
    document.getElementById('booking-page').classList.remove('hide')
    document.getElementById('home-page').classList.add('hide')
}