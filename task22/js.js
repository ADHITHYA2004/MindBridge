document.getElementById('expences').classList.add('hide');
document.getElementById('add-expences').classList.remove('hide');

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