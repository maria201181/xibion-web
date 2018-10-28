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

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8&appId=445988755422879";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));