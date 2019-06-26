window.onload =() => {

    axios.get('/api/properties').then((res) => {
        let rooms = document.getElementsByClassName('products')
        let products = res.data
        console.log(products)
    })




}