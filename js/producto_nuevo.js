function guardar() {
    let n = document.getElementById("nombre").value
    let p = parseFloat(document.getElementById("precio").value)
    let i = document.getElementById("imagen").value


    let producto = {
        nombre: n,
        precio: p,
        imagen: i
    }
    let url = "https://deyvi.pythonanywhere.com/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./producto.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

