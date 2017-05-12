function mostrarData(){
	var validar = validarData();
	if(validar == true){
		var nombre = document.getElementById("nombreId").value;
		var apellido = document.getElementById("apellidoId").value;
		var email = document.getElementById("emailId").value;
		var direccion = document.getElementById("direccionId").value;
		var telefono = document.getElementById("telefonoId").value;
		clientes.innerHTML = "Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Email: " + email + "<br>Dirección: " + direccion + "<br>Teléfono: " + telefono;
		if(document.getElementsByTagName('select')[0].selectedIndex == 1){
			productos.innerHTML = "Te Negro" + '<img src="https://www.organicfacts.net/wp-content/uploads/2013/07/tea2.jpg">';
		}else if(document.getElementsByTagName('select')[0].selectedIndex == 2){
			productos.innerHTML = '<img src="http://www.celebrategettysburg.com/wp-content/uploads/2016/05/how-to-make-a-homemade-herbal-tea.jpg">';
		}else if(document.getElementsByTagName('select')[0].selectedIndex == 3){
			productos.innerHTML = '<img src="http://www.thefitindian.com/wp-content/uploads/2014/11/herbal-tea-types1.jpg">';
		}
	}else{
		alert("Faltan Datos");
	}

}

function validarData(){
	var nombre = document.getElementById("nombreId").value;
	var apellido = document.getElementById("apellidoId").value;
	var email = document.getElementById("emailId").value;
	var direccion = document.getElementById("direccionId").value;
	var telefono = document.getElementById("telefonoId").value;

	if(nombre != "" && apellido != "" && email != "" && direccion != "" && telefono != ""){
		if ( 0 != document.getElementsByTagName('select')[0].selectedIndex){
			if(document.getElementById("newsletter").checked == true){
				return true;
			}
		}
		
	}else{return false}
}