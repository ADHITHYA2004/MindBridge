const car_details = [];
document.getElementById('data-submit').classList.remove('hide')
document.getElementById('data-update').classList.add('hide')

// main submit
let s_no = 0;
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
    console.log(s_no, car_name + price + select_car_type + select_transmition + capacity + description)
    adddetails(s_no, car_name, select_car_type, img, select_transmition, price, capacity, description);

    // car details add in array
    car_details.push({
        s_no: s_no,
        car_name: car_name,
        select_car_type: select_car_type,
        img: img,
        select_transmition: select_transmition,
        capacity: capacity,
        price: price,
        description: description,
    });
    resetform();
    addCards()
    s_no = s_no + 1;
    console.log(car_details)
})

//details add
function adddetails(s_no, car_name, select_car_type, img, select_transmition, price, capacity, description) {
    const table_body = document.getElementById("table-body");
    const newrow = document.createElement("tr");
    newrow.innerHTML = `
                                <td>${s_no}</td>
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

// card add
function addCards() {
    const container = document.getElementById('car-cards');
    container.innerHTML = '';
    car_details.forEach(obj => {
        container.innerHTML += `
            <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem; margin:15px">
            <img src="${obj.img}">
            <div class="card-body">
            <center><h1>${obj.car_name} ${obj.select_car_type}</h1></center>
                <h5 class="card-title">Price: ${obj.price}/per-day</h5>
                <p class="card-text capacity">Capacity: ${obj.capacity} - ${obj.select_transmition}</p>
                <p class="card-text ">About: ${obj.description}</p>
                
                <a href="#" class="btn btn-primary" onclick="book(event)">Book</a>
            </div>
        </div>`;
    });
}
addCards()

// delete
function delete_row(event) {
    const row1 = event.target.closest("tr");
    row1.remove();
    const row = event.target.closest("tr");
    let index = parseInt(row.children[0].textContent, 10)
    if (index >= 0 && index < car_details.length) {
        car_details.splice(index, 1);
        console.log(index)
    }


    addCards();
}

// edit
function edit_row(event) {
    event.preventDefault();
    const row = event.target.closest("tr");
    let id = parseInt(row.children[0].textContent.trim(), 10);
    let car_name = row.children[1].textContent;
    let select_car_type = row.children[2].textContent;
    let img = row.children[3].textContent;
    let select_transmition = row.children[4].textContent;
    let price = row.children[5].textContent;
    let capacity = row.children[6].textContent;
    let description = row.children[7].textContent;
    document.getElementById('car-name').value = car_name;
    document.getElementById('img').value = img;
    document.getElementById('price').value = price;
    document.getElementById('capacity').value = capacity;
    document.getElementById('description').value = description;

    // update
    document.getElementById('data-update').addEventListener('click', (event) => {
        event.preventDefault()
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

        row.children[1].textContent = document.getElementById("car-name").value;
        row.children[2].textContent = document.getElementById("select-car-type").value;
        row.children[3].textContent = document.getElementById("img").value;
        row.children[4].textContent = document.getElementById("Select-transmition").value;
        row.children[5].textContent = document.getElementById("price").value;
        row.children[6].textContent = document.getElementById("capacity").value;
        row.children[7].textContent = document.getElementById("description").value;
        updateObject(id, {
            s_no: id,
            car_name: row.children[1].textContent,
            select_car_type: row.children[2].textContent,
            img: row.children[3].textContent,
            select_transmition: row.children[4].textContent,
            capacity: row.children[5].textContent,
            price: row.children[6].textContent,
            description: row.children[7].textContent,
        });
        resetform();
        document.getElementById('data-submit').classList.remove('hide')
        document.getElementById('data-update').classList.add('hide')
    })
    document.getElementById('data-submit').classList.add('hide')
    document.getElementById('data-update').classList.remove('hide')

}

function updateObject(id, newObj) {
    const index = car_details.findIndex(obj => obj.s_no === id);
    console.log(id);
    if (index !== -1) {
        car_details[index] = newObj;
        addCards();
    }
    else {
        console.error(`Object with id ${id} not found`);
    }
}
// reset form
function resetform() {
    document.getElementById("car-name").value = "";
    document.getElementById("select-car-type").value = "";
    document.getElementById("Select-transmition").value = "";
    document.getElementById("img").value = "";
    document.getElementById("capacity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
}

// button
document.getElementById('booking-page').classList.add('hide')
// change
document.getElementById('home-page').classList.add('hide')
function home_bot(event) {
    event.preventDefault();
    document.getElementById('admin-page').classList.add('hide');
    document.getElementById('booking-page').classList.add('hide')
    document.getElementById('home-page').classList.remove('hide')
    console.log("home clicked")
}
function admin_bot(event) {
    event.preventDefault();
    document.getElementById('admin-page').classList.remove('hide');
    document.getElementById('booking-page').classList.add('hide')
    document.getElementById('home-page').classList.add('hide')
    console.log("admin clicked")
}
function booking_bot(event) {
    event.preventDefault();
    document.getElementById('admin-page').classList.add('hide');
    document.getElementById('booking-page').classList.remove('hide')
    document.getElementById('home-page').classList.add('hide')
    console.log("booking clicked")
}




// home page js

function book(event) {
    event.preventDefault();

    const book_car_name = event.target.closest('.card-body').querySelector('h1').textContent;
    const book_car_img = event.target.closest('.card-body').querySelector('img');
    const book_car_capacity = event.target.closest('.card-body').querySelector('.capacity').textContent;
    const book_car_price1 = event.target.closest('.card-body').querySelector('h5').textContent;
    book_car_price=parseFloat(book_car_price1.replace(/[^\d.-]/g, ''));
    console.log(book_car_capacity.textContent);
    const booking_card = document.getElementById('booking-card');
    booking_card.innerHTML = ''
    booking_card.innerHTML = `
    <div class="card " style="width: 30rem;">
                        <img src="https://purepng.com/public/uploads/large/purepng.com-ford-mustang-red-carcarcarsvehiclevehiclestransport-5615211266939gqkz.png"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <center>
                                <h1>${book_car_name}</h1>
                            </center>
                            <h5 class="card-title" id='price_to'>${book_car_price}/per-day</h5>
                                <p class="card-text">${book_car_capacity}</p>
                            From <input type="date" class="date-input" id="from" min="new Date().toISOString().split('T')[0]">
                            To <input type="date" class="date-input" id="to" min="new Date().toISOString().split('T')[0]">
                            <div id='total-amount'>

                            </div>
                        </div>
                        <a href="#" class="btn btn-primary" id='calculate' onclick='total(event)'>Calculate</a>
                        <a href="#" class="btn btn-primary" id='final-book' onclick='finalbook(event)'>Book The Car</a>
                    </div>`
                    
    document.getElementById('calculate').classList.remove('hide')
    document.getElementById('final-book').classList.add('hide')
    document.getElementById('booking-page').classList.remove('hide')
    document.getElementById('home-page').classList.add('hide')
    document.getElementById('admin-page').classList.add('hide')
}

// calculate total amount
function total(event) {
let from_date=new Date(document.getElementById('from').value);
let to_date= new Date(document.getElementById('to').value);
let day_count=to_date.getTime()-from_date.getTime()
const total_days = Math.ceil(day_count/ (1000 * 60 * 60 * 24));
let calculate_amount=total_days*book_car_price
document.getElementById('total-amount').innerHTML=`<h2>Total Amount: ${calculate_amount}</h2>`
document.getElementById('calculate').classList.add('hide')
document.getElementById('final-book').classList.remove('hide')
console.log(calculate_amount)
}

function finalbook(event){
    alert("The car has Booked Successfully")
}
// date 
// const dateInput = document.getElementsByClassName('date-input');
// const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
// dateInput.min = today; // Set the min attribute