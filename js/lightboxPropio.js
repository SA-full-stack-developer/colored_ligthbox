$(document).ready(function(){
    $('.Light, .flechaAdelante, .flechaAtras').click(function() {
        mostrarImagen(this);
    });
    
    $(".CerrarLightbox").click(function(){
        var imagenGrande = document.getElementById('imagenGrande');
        
        $('#contenidoLightbox').fadeOut('slow',function(){
            imagenGrande.setAttribute("src", "");
            return false;
        });
    });
    
    function mostrarLightBox(){
        $('#contenidoLightbox').fadeIn('slow');
        return false;
    }
    
    function mostrarImagen(e){
	    var imagenGrande = document.getElementById('imagenGrande');
        var contenedorEnlaces = document.getElementsByClassName("columna");
        var flechaAd = document.getElementById("flechaAdelante");
        var flechaAt = document.getElementById("flechaAtras");
        var enlaces = Array();
        var enlacesAuxiliares;
        var indiceAux;
        var actual;
        var anterior;
        var siguiente;
        var rutaImgGAc;
        var rutaImgGAn;
        var rutaImgGAd;
        var titleImgGAc;
        var titleImgGAn;
        var titleImgGAd;
        
        for (var x=0; x < contenedorEnlaces.length; x++){
            enlacesAuxiliares = contenedorEnlaces[x].getElementsByTagName("a");
            
            for(var y = 0; y < enlacesAuxiliares.length; y++){
                enlaces.push(enlacesAuxiliares[y]);
            }
        }
        
        actual = e;
        rutaImgGAc = actual.getAttribute("data-ruta_imgg");
        titleImgGAc = actual.getAttribute("data-title");
        
        $('#contenidoLightbox').fadeOut('slow',function(){
            imagenGrande.setAttribute("src", rutaImgGAc);
            $('#contenidoLightbox').fadeIn('slow');
            return false;
        });
        $(".tituloDescripcion p").text("").slideToggle("slow");
        $(".tituloDescripcion p").text(titleImgGAc).slideToggle("slow");
        
        for(var x = 0; x < enlaces.length; x++){
            if(enlaces[x].getAttribute("data-title") === e.getAttribute("data-title")){
                switch(this.className){
                    case "flechaAtras":
                        indiceAux = x - 1;
                    break;
                    case "flechaAdelante":
                        indiceAux = x + 1;
                    break;
                    default:
                        indiceAux = x;
                    break;
                }
                
                if(indiceAux > 0){
                    anterior = enlaces[indiceAux - 1];
                }else{
                    anterior = enlaces[enlaces.length - 1];
                }
                
                if(indiceAux < (enlaces.length - 1)){
                    siguiente = enlaces[indiceAux + 1];
                }else{
                    siguiente = enlaces[0];
                }
                
                x = enlaces.length;
            }
        }
        
        rutaImgGAn = anterior.getAttribute("data-ruta_imgg");
        rutaImgGAd = siguiente.getAttribute("data-ruta_imgg");
        titleImgGAn = anterior.getAttribute("data-title");
        titleImgGAd = siguiente.getAttribute("data-title");
        flechaAd.setAttribute("data-ruta_imgg", rutaImgGAd);
        flechaAd.setAttribute("data-title", titleImgGAd);
        flechaAt.setAttribute("data-ruta_imgg", rutaImgGAn);
        flechaAt.setAttribute("data-title", titleImgGAn);
    }
});