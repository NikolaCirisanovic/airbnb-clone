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
            <button class="category" id="${e.id}">${e.country}</button>
            `)
        })
    }) // List by cities
    axios.get('/api/citieslist').then((res) => {
        // Target the divs with a class of products
        // divv = document.getElementById("displayCities")
        // Storing the api data as an array in the variable products
        let products = res.data
        products.forEach((g) => {
            let display = document.getElementById('displayCities')
            display.insertAdjacentHTML('afterbegin', `
            <button class="category" id="${g.id}">${g.city}</button>
            `)
        })
    }) 

    // Adding eventlistener for "click"
    document.addEventListener('click', (e) => {
        e.preventDefault()

        // If the clicked element contains a class of container ....

        if (e.target.classList.contains('category')) {

            //... show all the products with the corresponding country

            axios.get(`/api/countrieslistpar/${e.target.id}`).then((res) => {

                // Storing the api data as an array in the variable products

                let products = res.data

                // Target the divs with a class of products

                let products_ui = document.getElementById("productmain")

                // Assign the 

                products_ui.innerHTML = ''


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

    // Adding eventlistener for "click"
    document.addEventListener('click', (e) => {
        e.preventDefault()

        // If the clicked element contains a class of container ....

        if (e.target.classList.contains('category')) {

            //... show all the products with the corresponding country

            axios.get(`/api/citieslistpar/${e.target.id}`).then((res) => {

                // Storing the api data as an array in the variable products

                let products = res.data

                // Target the divs with a class of products

                let products_ui = document.getElementById("productmain")

                // Assign the 

                products_ui.innerHTML = ''


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
