$(document).ready(function(){
	$("#Lista1").hide();
	$("#Lista2").hide();
	$("#Lista3").hide();

	$('#Op1').mouseover(function(){
		$(this).css("background-color","#3560a5");
		$("#Lista1").show();
	}).mouseout(function(){
		$(this).css("background-color","#4a8bf6");
		$("#Lista1").hide();
	});

	$('#Op2').mouseover(function(){
		$(this).css("background-color","#3560a5");
		$("#Lista2").show();
	}).mouseout(function(){
		$(this).css("background-color","#4a8bf6");
		$("#Lista2").hide();
	});

	$('#Op3').mouseover(function(){
		$(this).css("background-color","#3560a5");
		$("#Lista3").show();
	}).mouseout(function(){
		$(this).css("background-color","#4a8bf6");
		$("#Lista3").hide();
	});

	$('#Op4 ').mouseover(function(){
		$(this).css("background-color","#3560a5");
	}).mouseout(function(){
		$(this).css("background-color","#4a8bf6");
	});

	$('ul.SubMenu li').mouseover(function(){
		$(this).css("background-color","#3560a5");
	}).mouseout(function(){
		$(this).css("background-color","#4a8bf6");
	});
});