document.getElementById('expences').classList.remove('hide');
document.getElementById('add-expences').classList.add('hide');

document.getElementById('data-submit').classList.remove('hide')
document.getElementById('data-update').classList.add('hide')
// display add expences
function add_bot(event) {
    document.getElementById('expences').classList.add('hide');
    document.getElementById('add-expences').classList.remove('hide');
}
// disply expences
function expence_bot(event) {
    document.getElementById('expences').classList.remove('hide');
    document.getElementById('add-expences').classList.add('hide');
}
// reset
function reset() {
    document.getElementById('expence-name').value = '';
    document.getElementById('expence-amount').value = '';
    document.getElementById('expence-category').value = '';
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';

}
// 
function filter_1() {
    document.getElementById('div-2').classList.remove('hide');
    // document.getElementById('div-3').classList.remove('hide');
}
function filter_2() {
    // document.getElementById('div-2').classList.remove('hide');
    document.getElementById('div-3').classList.remove('hide');
}
// /day filters
function dayfilter(x) {
    let filterDates = getLastWeekDates(x);
    let shopping = document.querySelectorAll('.task');
    let daytotal = 0;
    console.log(filterDates)
    shopping.forEach(ele => {
        let dateText = ele.children[4]?.textContent;
        console.log()
        let isin = filterDates.includes(dateText);
        if (isin) {
            ele.style.display = 'table-row';
            daytotal += parseInt(ele.children[2].textContent);
        } else {
            ele.style.display = 'none';
        }
    });
    if (x == 'oneweek')
        document.getElementById('select-day-expence').innerText = 'Last One Week '
    if (x == 'onemonth')
        document.getElementById('select-day-expence').innerText = 'Last One Month '
    if (x == 'sixmonth')
        document.getElementById('select-day-expence').innerText = 'Last Six Month '
    if (x == 'oneyear')
        document.getElementById('select-day-expence').innerText = 'Last One Year '

    document.getElementById('day-total').innerText = 'Rs: ' + daytotal;
}
function getLastWeekDates() {
    let dates = [];
    let today = new Date();
    if (x == 'oneweek') {
        for (let i = 0; i < 7; i++) {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    else if (x == 'onemonth') {
        for (let i = 0; i < 30; i++) {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    else if (x == 'sixmonth') {
        for (let i = 0; i < 180; i++) {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    else if (x == 'oneyear') {
        for (let i = 0; i < 360; i++) {
            let date = new Date();
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
    }
    return dates;
}

// Example call to shopping function



// category filter
function shopping() {
    let shopping = document.querySelectorAll('.task')
    let shopping_total = 0;
    shopping.forEach(ele => {
        if (ele.classList.contains('Shopping')) {
            console.log(ele)
            ele.style.display = 'table-row'
            ele.className.split(" ").forEach(element => {
                element = Number(element);
                if (!isNaN(element)) {
                    console.log(element)
                    if (element > 0) {
                        shopping_total += element;
                    }
                }
            })
        }
        else {
            ele.style.display = 'none'
        }
    })
    document.getElementById('select-expence').innerText = 'Shopping Total'
    document.getElementById('total-select').innerText = 'Rs: ' + shopping_total;
}
function food() {
    let food = document.querySelectorAll('.task')
    let food_total = 0;
    food.forEach(ele => {
        if (ele.classList.contains('Food')) {
            console.log(ele)
            ele.style.display = 'table-row'
            ele.className.split(" ").forEach(element => {
                element = Number(element);
                if (!isNaN(element)) {
                    console.log(element)
                    if (element > 0) {
                        food_total += element;
                    }
                }
            })
        }
        else {
            ele.style.display = 'none'
        }
    })
    document.getElementById('select-expence').innerText = 'Food Total'
    document.getElementById('total-select').innerText = 'Rs: ' + food_total;
}
function travel() {
    let travel = document.querySelectorAll('.task')
    let travel_total = 0;
    travel.forEach(ele => {
        if (ele.classList.contains('Travel')) {
            console.log(ele)
            ele.style.display = 'table-row'
            ele.className.split(" ").forEach(element => {
                element = Number(element);
                if (!isNaN(element)) {
                    console.log(element)
                    if (element > 0) {
                        travel_total += element;
                    }
                }
            })
        }
        else {
            ele.style.display = 'none'
        }
    })
    document.getElementById('select-expence').innerText = 'Travel Total'
    document.getElementById('total-select').innerText = 'Rs: ' + travel_total;
}
function other() {
    let other = document.querySelectorAll('.task')
    let other_total = 0;
    other.forEach(ele => {
        if (ele.classList.contains('Other')) {
            console.log(ele)
            ele.style.display = 'table-row'
            ele.className.split(" ").forEach(element => {
                element = Number(element);
                if (!isNaN(element)) {
                    console.log(element)
                    if (element > 0) {
                        other_total += element;
                    }
                }
            })
        }
        else {
            ele.style.display = 'none'
        }
    })
    document.getElementById('select-expence').innerText = 'Other Total'
    document.getElementById('total-select').innerText = 'Rs: ' + other_total;
}
function showall() {
    let other = document.querySelectorAll('.task')
    other.forEach(ele => {
        ele.style.display = 'table-row'
    })

}

// search
function search() {
    let search=(document.getElementById('Search').value)
    let other = document.querySelectorAll('.task')
    other.forEach(ele => {
        if (ele.classList.contains(search)) {
            console.log(ele)
            ele.style.display = 'table-row'
        }
        else {
            ele.style.display = 'none'
        }
    })
}

// data
const expence_details = [{
    id: 0, expence_name: 'chaco', expence_amount: '900', expence_category: 'Food', expence_date: '2025-01-22', description: 'description'
}, {
    id: 1, expence_name: 'juice', expence_amount: '500', expence_category: 'Shopping', expence_date: '2025-01-27', description: 'description'
},
{
    id: 2, expence_name: 'toy', expence_amount: '1000', expence_category: 'Travel', expence_date: '2024-12-29', description: 'description'
},
{
    id: 3, expence_name: 'food', expence_amount: '500', expence_category: 'Other', expence_date: '2024-02-17', description: 'description'
}
];


// add expence
document.getElementById('data-submit').addEventListener('click', (event) => {
    event.preventDefault();
    var id = expence_details.length - 1;
    var expence_name = document.getElementById('expence-name').value;
    var expence_amount = document.getElementById('expence-amount').value;
    var expence_category = document.getElementById('expence-category').value;
    for (i = 0; i < expence_category.length; i++) {
        if (expence_category[i].checked) {
            expence_category = expence_category[i].value;
        }
    }
    var expence_date = document.getElementById('date').value;
    var description = document.getElementById('description').value
    console.log(expence_name + expence_amount + expence_category + description)
    expence_details.push({ id: id + 1, expence_name: expence_name, expence_amount: expence_amount, expence_category: expence_category, expence_date: expence_date, description: description });
    reset()
    addexpences()
})

function addexpences() {
    const table_body = document.getElementById('table-body');
    table_body.innerHTML = '';
    let total_amount = 0;
    expence_details.forEach(obj => {
        // id-${obj.id} need to add in below
        table_body.innerHTML += `<tr class=' task ${obj.expence_name} ${obj.expence_category} ${obj.expence_amount} '>
    <td class=''>${obj.id}</td>
    <td class=''>${obj.expence_name}</td>
    <td class='${obj.expence_amount}'>${obj.expence_amount}</td>
    <td class=''>${obj.expence_category}</td>
    <td class=''>${obj.expence_date}</td>
    <td>${obj.description}</td>
    <td><i id='delete_row' onclick='delete_row(event)' class="fa-solid fa-trash"></i> 
                                <i id='edit_row' onclick='edit_row(event)' class="fa-solid fa-pen-to-square"></i></td>
    </tr>`
        total_amount += parseInt(obj.expence_amount);
        document.getElementById('total-amount').innerText = 'Rs: ' + total_amount
    })
}
addexpences()

function delete_row(event) {
    let delete_row = document.querySelectorAll('.task')
    const row1 = event.target.closest("tr");
    let index = parseInt(row1.children[0].textContent);
    console.log(index)
    // row1.remove();
    // let index;
    // delete_row.forEach(ele => {
    //     index=ele.id
    if (index >= 0 && index < expence_details.length) {
        expence_details.splice(index, 1);
        console.log(index)
    }
    // })
    // const row = event.target.closest("tr");
    // let index = parseInt(row.children[0].textContent, 10)

    addexpences()
}