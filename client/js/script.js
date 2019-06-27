window.onload = () => {


    // List by cities

    axios.get('/api/citieslist').then((res) => {

        let products = res.data
        products.forEach((g) => {
            let display = document.getElementById('displayCities')
            display.insertAdjacentHTML('afterbegin', `
                <button class="cities_" id="${g.id}">${g.city}</button>
                `)
        })
    })

    // List by countries

    axios.get('/api/countrieslist').then((res) => {

        let products = res.data
        products.forEach((g) => {
            let display = document.getElementById('displayCountries')
            display.insertAdjacentHTML('afterbegin', `
                <button class="countries_" id="${g.id}">${g.country}</button>
                `)
        })
    })


    // ::: Products :::

	const create_product = (tag, p) => {
		let stars = ''
		for (i = 0; i < p.rating; i++) {
			stars += '<i class="fas fa-star"></i>'
		}
		tag.insertAdjacentHTML('beforeEnd', `<div class="product">
        <div class="image"> <img src="${p.image}"></img></div>
        <div class="headline">${p.name}</div>
        <div class="description">Rooms: ${p.rooms}</div>
        <div class="price">Price: ${p.price} $/per night</div>
        <div class="rating">Rating: ${stars} Stars</div>
        </div>`)
    }
    

    // axios.get('/api/properties').then((res) => {
    //     // Target the divs with a class of products
    //     divv = document.getElementById("productmain")
    //     // Storing the api data as an array in the variable products
    //     let products = res.data

    //     products.forEach(i => {
    //         let text = ''
    //         let d = 0
    //         while (d < i.rating) {
    //             text += `<i class="fas fa-star"></i>`
    //             d++
    //         }
    //         divv.insertAdjacentHTML("afterbegin", `<div class="product">
    //             <div class="image"> <img src="${i.image}"></img></div>
    //             <div class="headline">${i.name}</div>
    //             <div class="description">Rooms: ${i.rooms}</div>
    //             <div class="price">Price: ${i.price} $/per night</div>
    //             <div class="rating">Rating: ${text} Stars</div>
    //             </div>`)
    //     })
    // })


    // :: Eventlistener for click on country ::
    document.addEventListener('click', (e) => {
		if (e.target.classList.contains('countries_')) {
			// get products with selected category id from API
			axios.get(`/api/properties?country=${e.target.id}`).then((res) => {
				console.log('res', res.data)
				let products = res.data
				// target products
				let products_ui = document.getElementById('productmain')

				// clear the products
				products_ui.innerHTML = ''
				if (res.data.length) {
					// display each product in the DOM
					products.forEach((p) => {
						create_product(products_ui, p)
					})
				} else {
					products_ui.innerHTML = 'Nothing in here'
				}
			}).catch((err) => {
				console.log('err', err)
			})
		}
    })

}