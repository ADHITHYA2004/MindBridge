document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        alert('Save option disabled');
    }
});
