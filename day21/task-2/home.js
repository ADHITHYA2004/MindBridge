const car_details = [{
    car_name: 'TATA',
    select_car_type: 'SUV',
    img: 'https://therentalradar.com/_next/image?url=%2Fimages%2Foffers%2Flarge.png&w=256&q=75',
    select_transmition: 'Automatic',
    capacity: '6',
    price: '1200',
    description: 'The V Class has been praised for its car-like driving despite its van origins, with a well laid out console and excellent stowage. Reviewers have noted that it\'s surprisingly easy to park with rear sensors and tight turning circle.,',
}];
document.getElementById('data-submit').classList.remove('hide')
document.getElementById('data-update').classList.add('hide')

// main submit
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

    // car details add in array
    car_details.push({
        car_name: car_name,
        select_car_type: select_car_type,
        img: img,
        select_transmition: select_transmition,
        capacity: capacity,
        price: price,
        description: description,
    });
    resetform();
    // addcard();
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
    const car_cards = document.getElementById('car-cards');
    const new_card = document.createElement("div");

    car_cards.innerHTML += `<div class="card" style="width: 18rem; margin:15px">
    <img src="https://therentalradar.com/_next/image?url=%2Fimages%2Foffers%2Flarge.png&w=256&q=75" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${price}</h5>
        <p class="card-text">${description}.</p>
        <a href="#" class="btn btn-primary" onclick="book(event)">Book</a>
    </div>
</div>`
}

// delete
function delete_row(event) {
    const row = event.target.closest("tr");
    row.remove();
}

// edit
function edit_row(event) {
    event.preventDefault();
    const row = event.target.closest("tr");
    let car_name = row.children[0].textContent;
    let select_car_type = row.children[1].textContent;
    let img = row.children[2].textContent;
    let select_transmition = row.children[3].textContent;
    let price = row.children[4].textContent;
    let capacity = row.children[5].textContent;
    let description = row.children[6].textContent;
    document.getElementById('car-name').value = car_name;
    // document.getElementById('select-car-type').value=select_car_type;
    document.getElementById('img').value = img;
    // document.getElementById('select-transmition').value=select_transmition;
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

        row.children[0].textContent = document.getElementById("car-name").value;
        row.children[1].textContent = document.getElementById("select-car-type").value;
        row.children[2].textContent = document.getElementById("img").value;
        row.children[3].textContent = document.getElementById("Select-transmition").value;
        row.children[4].textContent = document.getElementById('capacity');
        row.children[5].textContent = document.getElementById("price").value;
        row.children[6].textContent = document.getElementById("description").value;
        resetform();

        document.getElementById('data-submit').classList.remove('hide')
        document.getElementById('data-update').classList.add('hide')
    })
    document.getElementById('data-submit').classList.add('hide')
    document.getElementById('data-update').classList.remove('hide')

}

// reset form
function resetform() {
    document.getElementById("car-name").value = "";
    document.getElementById("select-car-type").value = "";
    document.getElementById("img").value = "";
    document.getElementById("capacity").value = "";
    document.getElementById("price").value = "";
    document.getElementById("description").value = "";
}

// button
document.getElementById('booking-page').classList.add('hide')
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
    const book_car_card = event.target.closest('.card-body').querySelector('.card-text');
    if (book_car_card) {
        console.log(book_car_card.textContent);
    } else {
        console.error('Element not found');
    }
    
    
    document.getElementById('booking-page').classList.remove('hide')
    document.getElementById('home-page').classList.add('hide')
    document.getElementById('admin-page').classList.add('hide')

}