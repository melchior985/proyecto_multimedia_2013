$(document).ready(function(){
	
	$("#Formulario").validate({
		rules:{
			usuario:{
				required: true,
				minlength: 2 
			},

			pass:{
				required: true,
				minlength: 6
			},

			pass2:{
				required: true,
				minlength: 6,
				equalTo: "#pass"
			},
			nombre:{
				required: true,
				minlength: 2 
			},
			apellido:{
				required: true,
				minlength: 2 
			},
			correo: {
				required: true,
				email: true
			},
			edad: {
				required: true,
				number:true,
				range: [18, 70]
			},
			fecha: {
				required: true,
				date: true
			},
			direccion:"required",
			
			tarjeta:{
				required: true,
				creditcard: true
			}

		},
		messages: {
			usuario:{
				required: "Por favor, introduzca su Nombre de Usuario",
				minlength: "El Nombre de usuario debe tener al menos 2 caracteres"
			},
			pass:{
				required: "Por favor, introduzca una contraseña",
				minlength: "La contraseña debe tener al menos 6 caracteres"
			},
			pass2:{
				required: "Por favor, confirme la contraseña",
				minlength: "La contraseña debe tener al menos 6 caracteres",
				equalTo: "Las contraseñas no coinciden"
			},
			nombre:{
				required: "Por favor, introduzca su nombre",
				minlength: "El nombre debe tener al menos 2 caracteres"
			},
			apellido:{
				required: "Por favor, introduzca su apellido",
				minlength: "El apellido debe tener al menos 2 caracteres"
			},
			correo: {
				required: "Por favor, introduzca su correo",
				email: "Por favor, ingrese una direccion de correo valida"
			},
			edad: {
				required: "Por favor, introduzca su edad",
				range: "Por favor, introduzca un numero entre 18 y 70",
				number:"Por favor, introduzca un numero valido"
			},
			fecha: {
				required:"Por favor, introduzca su fecha de nacimiento",
				date: "Por favor,introduzca la fecha en el formato: MM-DD-YYYY"
			},
			direccion:"Por favor, ingrese su direccion",

			tarjeta:{
				required: "Por favor, introduzca su numero de tarjeta de credito",
				creditcard:"Por favor, introduzca un numero de tarjeta valido"
			}
		}
		
	});
});