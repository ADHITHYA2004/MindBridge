document.getElementById("data-submit").addEventListener("click", function (e) {
    e.preventDefault();
    var car_name = document.getElementById('car-name').value;
    var select_car_type = document.getElementById('select-car-type').value;
    for (i = 0; i < select_car_type.length; i++) {
        if (select_car_type[i].checked) {
            select_car_type = select_car_type[i].value;
        }
    }
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
    adddetails(car_name, select_car_type, select_transmition, price, capacity, description);
})



function adddetails(car_name, select_car_type, select_transmition, price, capacity, description) {
    const table_body = document.getElementById("table-body");
    const newrow = document.createElement("tr");
    newrow.innerHTML = `
                                <td>${car_name}</td>
                                <td>${select_car_type}</td>
                                <td>${select_transmition}</td>
                                <td>${price}</td>
                                <td>${capacity}</td>
                                <td>${description}</td>
                                <td></td>`;
    table_body.appendChild(newrow)
}



// https://therentalradar.com/_next/image?url=%2Fimages%2Foffers%2Flarge.png&w=256&q=75