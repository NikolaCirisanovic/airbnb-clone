window.onload = () => {

    axios.get('/api/properties').then((res) => {
        // Target the divs with a class of products
        divv = document.getElementById("productmain")
        console.log(divv)
        // Storing the api data as an array in the variable products
        let products = res.data
        console.log(products)

        products.forEach(i => {
            console.log(i)
            divv.insertAdjacentHTML("afterbegin", `<div class="product">
                <div class="image"> <img src="${i.image}"></img></div>
                <div class="description"></div>
                <div class="headline">${i.name}</div>
                <div class="price">Price: ${i.price} $/per night</div>
                <div class="rating">Rating: ${i.rating} Stars</div>
                </div>`)
        })
        axios.catch((err) => {
            console.log(err)
        })
    })
}




// divv.insertAdjacentHTML("afterbegin", `<div class="product">
// <div class="image">${i.image}</div>
// <div class="description">${i.price}</div>
// <div class="headline">${i.name}</div>
// <div class="price">PRICE</div>
// <div class="rating">${i.rating}</div>
// </div>`)