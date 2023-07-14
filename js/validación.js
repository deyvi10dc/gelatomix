




const boton = document.getElementById("boton")



boton.addEventListener("click",(e)=> {
    e.preventDefault();

    const apellidoIngresado = document.getElementById("apellido").value.trim();

    const nombreIngresado = document.getElementById("nombre").value.trim();

    const email = document.getElementById("correo").value.trim();

    const telefonoIngresado = document.getElementById("numero").value.trim();

    const texIngresado = document.getElementById("textarea").value.trim();









    

    if (apellidoIngresado === "" || nombreIngresado === "" || email === "" || telefonoIngresado === "" || texIngresado ===""){
        alert("Por favor, complete todos los campos del formulario.");
        return false;
      }
    for (var i = 0; i < apellidoIngresado.length; i++) {
      var charCode = apellidoIngresado.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo apellido solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    for (var i = 0; i < nombreIngresado.length; i++) {
        var charCode = nombreIngresado.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo nombre solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
      }

    if( !( /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)) ) {
        alert("El correo no es valido")
        return false;
    }

    if( isNaN(telefonoIngresado) ) {
      alert("solo se puede ingresar numeros")
      return false;
    }


    for (var i = 0; i < texIngresado.length; i++) {
        var charCode = texIngresado.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo no puede estar vacio");
          return false;
        }
    }  

    alert("Formulario enviado correctamente.");
    return true;



})

   


