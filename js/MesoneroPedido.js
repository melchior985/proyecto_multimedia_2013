$(document).ready(function(){

 $("#borrar").click(function(){
  $("#carne").hide();
});
  
   $("#borrar1").click(function(){
  $("#pastabol").hide();
});
    $("#borrar2").click(function(){
  $("#pastac").hide();
});
     $("#borrar3").click(function(){
  $("#pastacq").hide();
});

  $("#atras").click(function(){
  	  $("ul.carta").hide();
  $("ul.cartaprincipal").show();
  $("#atras").hide();

});
   $("#Pastas").click(function(){
  	  $("ul.carta").show();
  $("ul.cartaprincipal").hide();
  $("#atras").show();
});
 //Reportes
 $("#visto").hide();
 $("ul.filtrar").hide();
 $(".selectiempo").hide();

 $("#novisto").click(function(){
  $("#visto").show();
  $("#novisto").hide();
  $("ul.filtrar").show();
  $("#tvisto").hide();
  $("#mvisto").hide();
  $("#chvisto").hide();
  $("#pvisto").hide();
 });

 $("#visto").click(function(){
  $("#novisto").show();
  $("#visto").hide();
  $("ul.filtrar").hide();
 });
//POR TIEMPOOOOOOOO
 $("#tnovisto").click(function(){
  $("#tvisto").show();
  $("#tnovisto").hide();
  $("#selectiempo").show();
 });
 $("#tvisto").click(function(){
  $("#tnovisto").show();
  $("#tvisto").hide();
  $("#selectiempo").hide();
 });


 //POR MESONEROOO
 $("#mnovisto").click(function(){
  $("#mvisto").show();
  $("#mnovisto").hide();
  $("#selectmesonero").show();
 });
 $("#mvisto").click(function(){
  $("#mnovisto").show();
  $("#mvisto").hide();
  $("#selectmesonero").hide();
 });

//POR CHEF
 $("#chnovisto").click(function(){
  $("#chvisto").show();
  $("#chnovisto").hide();
  $("#selectchef").show();
 });
 $("#chvisto").click(function(){
  $("#chnovisto").show();
  $("#chvisto").hide();
  $("#selectchef").hide();
 });

 //POR PLATO
 $("#pnovisto").click(function(){
  $("#pvisto").show();
  $("#pnovisto").hide();
  $("#selectplato").show();
 });
 $("#pvisto").click(function(){
  $("#pnovisto").show();
  $("#pvisto").hide();
  $("#selectplato").hide();
 });

});
