$(document).ready(function(){
  $('.mainSlider').slick({
  	 autoplay:true,	
	  infinite: true,
	  autoplaySpeed:2000 
  	})

});

$('.grupoMiniaturas').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true
}); 



function zoom(sthis) {
	var src= sthis.src;
	$('#imagenZoom').attr("src",src);		
}


function mostrarMenuMovil() {  
  if ($("#menuMovil").hasClass('menuMovilOculto')) {
    $("#menuMovil").removeClass('menuMovilOculto'); 
    $("#menuMovil").addClass('menuMovilVisible');     
  }
  else {
    $("#menuMovil").removeClass('menuMovilVisible'); 
    $("#menuMovil").addClass('menuMovilOculto'); 
  }
}


function mostrarFiltros() {  
  if ($("#menuFiltros").hasClass('menuFiltroOculto')) {
    $("#menuFiltros").removeClass('menuFiltroOculto'); 
    $("#menuFiltros").addClass('menuFiltroVisible');     
  }
  else {
    $("#menuFiltros").removeClass('menuFiltroVisible'); 
    $("#menuFiltros").addClass('menuFiltroOculto'); 
  }
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 800) {
       if ($("#menuMovil").hasClass('menuMovilVisible')) {
        $("#menuMovil").removeClass('menuMovilVisible'); 
        $("#menuMovil").addClass('menuMovilOculto');     
      }

    }
});