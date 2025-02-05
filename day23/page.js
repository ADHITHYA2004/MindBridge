
let arr;
(async function a() {
    await fetch("https://fakestoreapi.com/products")
        .then(res => res.json()).then(d => {
            arr = d;
        })
    console.log(arr);
    let men_card = document.getElementById('mens-clothing');
    let women_card = document.getElementById('women-clothing');
    let electronics_card = document.getElementById('electronics');
    arr.forEach(element => {
        if (element.category == "men's clothing") {
            men_card.innerHTML += `<div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..." style="height:250px;">
            <div class="card-body d-flex flex-column ">    
            <div><h6 class="card-title ">${element.title}</h6></div>         
            <div><h4 class="lead fw-bold">Price: ${element.price}</h4></div>
            <div><a href="http://127.0.0.1:5501/day23/buy.html?id=${element.id}" style="background-color: #ff784b;border-color:#ff784b;"class="btn btn-primary text-body-secondary">Buy</a></div>
            </div>
    </div>`
        }
        if (element.category == "women's clothing") {
            women_card.innerHTML += `<div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..."style="height:250px;">
            <div class="card-body">
                <h6 class="card-title">${element.title}</h6>
                <h4 class="lead fw-bold">Price: ${element.price}</h4>
                <a href="http://127.0.0.1:5501/day23/buy.html?id=${element.id}" style="background-color: #ff784b;border-color:#ff784b;" class="btn btn-primary">Buy</a>
    
            </div>
    </div>`}
        if (element.category == "electronics") {
            electronics_card.innerHTML += `<div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem;">
            <img src="${element.image}" class="card-img-top" alt="..."style="height:250px;">
            <div class="card-body">
                <h6 class="card-title">${element.title}</h6>
                <h4 class="lead fw-bold">Price: ${element.price}</h4>
                <a href="http://127.0.0.1:5501/day23/buy.html?id=${element.id}" style="background-color: #ff784b; border-color:#ff784b;" class="btn btn-primary">Buy</a>

    </div>`
        }
    });
})();