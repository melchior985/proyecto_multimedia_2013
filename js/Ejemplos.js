$(document).ready(function(){
			
	

	$(".agregar1").mouseenter(function(){
		$(this).toggleClass('agregar');
	}).mouseleave(function(){
		$(this).toggleClass('agregar');
	});


	$(".editar").mouseenter(function(){
		$(this).toggleClass('editar1');
	}).mouseleave(function(){
		$(this).toggleClass('editar1');
	});

	$(".eliminar").mouseenter(function(){
		$(this).toggleClass('eliminar1');
	}).mouseleave(function(){
		$(this).toggleClass('eliminar1');
	});

});