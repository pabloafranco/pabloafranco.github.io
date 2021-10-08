function validateForm(e){
    var elements = e.elements;
    var passUno = e.password.value;
    var passDos = e.repeatpassword.value;
    var fechanac = e.birthday.value;

    

    /*
    
    for(var i = 0; i < elements.length; i++) {
        console.log(i)
        if(elements[i].tagName === "INPUT" || elements[i].tagName === "SELECT"){
            if(elements[i].value.trim() === "" && elements[i].required === true) {
                var title = elements[i].getAttribute('title');
                alert("Por favor completar el campo:  " + title );
                elements[i].focus();
                elements[i].style.borderColor = "red";
                elements[i].style.borderStyle = "dashed";
                return false;
            }
        }
    }
    */
    if (passUno != passDos){
        alert("Las claves son diferentes\nLa primer clave es:" + passUno + " - la segunda clave es: " + passDos);
        return false;
    }

    let hoy = new Date();
    let edad=calculateAge( fechanac, hoy)

    if (edad < 18){
        alert("No puede registrarse debe ser mayor de 18 años, ud. tiene " + edad + " años")
    }
    

}


function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() || 
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}
