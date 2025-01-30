const locations = new URLSearchParams(window.location.search);
let fetch_id = locations.get('id');
console.log(fetch_id)
let arr;
async function get_data() {
    await fetch(`https://fakestoreapi.com/products/${fetch_id}`)
        .then(res => res.json()).then(d => {
            arr = d;
        })

    console.log(arr)
    let append_elemnt = document.getElementsByClassName('head')[0];
    // document.getElementById('head').innerHTML += ` `
    let star = document.createElement('p');
    for (let i = 1; i <= 5; i++) {
        if (i <= Number(Math.floor(arr.rating.rate))) {
            star.innerHTML += ('<i class="fa-solid fa-star" style="color: #FFD43B;"></i>');
        }
        else if (i == Number(Math.floor(arr.rating.rate)) + 1) {
            console.log(i)
            star.innerHTML += (`<i class="fa-solid fa-star-half" style="color: #FFD43B;"></i>`)
        }
        else {
            star.innerHTML += ('<i class="fa-regular fa-star" style="color: #ccc;"></i>');
        }
    }
    star.innerHTML += `<small>(${arr.rating.count} buys)</small>`
    append_elemnt.innerHTML += ` <div class="row">
                <div class="col-sm-4 buy-image" >
                    <img src="${arr.image}" alt="">
                </div>
                <div class="col-sm-6 details">
                    <div class="title">
                        <h4 class="font-weight-bolder">${arr.title}</h4>
                    </div>
                    <div class="description">
                        <p>${arr.description}</p>
                    </div>
                    <div class="price_rating">
                        <p>$${arr.price}</p>
                    </div>
                    <div class="button">
                        <button>Add Cart</button>
                    </div>
                </div>
            </div>`
    document.getElementsByClassName('price_rating')[0].lastElementChild.after(star)

}



get_data()


