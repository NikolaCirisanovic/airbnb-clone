window.onload = () => {

    axios.get('/api/properties').then((res) => {
        // Target the divs with a class of products
        divv = document.getElementById("productmain")
        // Storing the api data as an array in the variable products
        let products = res.data

        products.forEach(i => {
            let text = ''
            let d = 0
            while (d < i.rating) {
                text += `<i class="fas fa-star"></i>`
                d++
            }
            divv.insertAdjacentHTML("afterbegin", `<div class="product">
                <div class="image"> <img src="${i.image}"></img></div>
                <div class="description">${i.type}</div>
                <div class="headline">${i.name}</div>
                <div class="price">Price: ${i.price} $/per night</div>
                <div class="rating">Rating: ${text} Stars</div>
                </div>`)
        })
    }) // List by countries
    axios.get('/api/countrieslist').then((res) => {
        // Target the divs with a class of products
        divv = document.getElementById("displayCountries")
        // Storing the api data as an array in the variable products
        let products = res.data
        products.forEach((e) => {
            let display = document.getElementById('displayCountries')
            display.insertAdjacentHTML('afterbegin', `
            <li class="category" id="${e.id}">${e.country}</li>
            `)
        })
    })
    document.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('category')) {
            // console.log('it works')
            axios.get(`/api/countrieslistpar/${e.target.id}`).then((res) => {
                let products = res.data
                
                // Target the divs with a class of products
                
                let products_ui = document.getElementById("productmain")
                products_ui.innerHTML = ''

                // Storing the api data as an array in the variable products


                products.forEach(i => {
                    let text = ''
                    let d = 0
                    while (d < i.rating) {
                        text += `<i class="fas fa-star"></i>`
                        d++
                    }
                    divv.insertAdjacentHTML("afterbegin", `<div class="product">
                <div class="image"> <img src="${i.image}"></img></div>
                <div class="description">${i.type}</div>
                <div class="headline">${i.name}</div>
                <div class="price">Price: ${i.price} $/per night</div>
                <div class="rating">Rating: ${text} Stars</div>
                </div>`)
                })

            })
        }
    })
}




// divv.insertAdjacentHTML("afterbegin", `<div class="product">
// <div class="image">${i.image}</div>
// <div class="description">${i.price}</div>
// <div class="headline">${i.name}</div>
// <div class="price">PRICE</div>
// <div class="rating">${i.rating}</div>
// </div>`)