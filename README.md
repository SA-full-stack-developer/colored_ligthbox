# colored_ligthbox
Es un Lightbox con un degradado múltiple y que puede pasar las fotos de una a otra.

# Index.html

Se compone de dos divs principales, el primero es el que 

        <div>
            <div class="columna">
                <a data-ruta_imgg="https://images.pexels.com/photos/26279/pexels-photo-26279.jpg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" data-title="titulo 1" class="Light" title="titulo 1">
                    <img src="https://images.pexels.com/photos/26279/pexels-photo-26279.jpg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" alt="titulo 1" title="titulo 1">
                </a>
                <a data-ruta_imgg="https://images.pexels.com/photos/167085/pexels-photo-167085.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" data-title="titulo 2" class="Light" title="titulo 2">
                    <img src="https://images.pexels.com/photos/167085/pexels-photo-167085.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" alt="titulo 2" title="titulo 2">
                </a>
                <a data-ruta_imgg="https://images.pexels.com/photos/230128/pexels-photo-230128.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" data-title="titulo 3" class="Light" title="titulo 3">
                    <img src="https://images.pexels.com/photos/230128/pexels-photo-230128.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" alt="titulo 9" title="titulo 9">
                </a>
            </div>
            <div id="contenidoLightbox" class="fadebox">
                <div id="arcoiris" class="arcoiris">
                    <div>
                        <img id="imagenGrande"/>

                        <div id="flechas">
                            <div>
                                <a id="flechaAtras" class="flechaAtras" data-ruta_imgg="" data-title="" alt="Retroceder" title="Retroceder"></a>
                            </div>
                            <div>
                                <a id="flechaAdelante" class="flechaAdelante" data-ruta_imgg="" data-title="" alt="Avanzar" title="Avanzar"></a>
                            </div>
                        </div>
                    </div>
                    <div class="tituloDescripcion">
                        <p>Título</p>
                        <div class="Cerrar"><a class="CerrarLightbox">X</a></div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://github.com/SA-full-stack-developer/colored_ligthbox/blob/master/js/jquery-1.10.2.js"></script>
        <script src="https://github.com/SA-full-stack-developer/colored_ligthbox/blob/master/js/lightboxPropio.js"></script>

<div>
  <div class="columna">
    <a data-ruta_imgg="https://images.pexels.com/photos/26279/pexels-photo-26279.jpg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" data-title="titulo 1" class="Light" title="titulo 1">
      <img src="https://images.pexels.com/photos/26279/pexels-photo-26279.jpg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" alt="titulo 1" title="titulo 1">
    </a>
    <a data-ruta_imgg="https://images.pexels.com/photos/167085/pexels-photo-167085.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" data-title="titulo 2" class="Light" title="titulo 2">
      <img src="https://images.pexels.com/photos/167085/pexels-photo-167085.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" alt="titulo 2" title="titulo 2">
    </a>
    <a data-ruta_imgg="https://images.pexels.com/photos/230128/pexels-photo-230128.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" data-title="titulo 3" class="Light" title="titulo 3">
      <img src="https://images.pexels.com/photos/230128/pexels-photo-230128.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb" alt="titulo 9" title="titulo 9">
    </a>
  </div>
  <div id="contenidoLightbox" class="fadebox">
      <div id="arcoiris" class="arcoiris">
          <div>
              <img id="imagenGrande"/>

              <div id="flechas">
                  <div>
                      <a id="flechaAtras" class="flechaAtras" data-ruta_imgg="" data-title="" alt="Retroceder" title="Retroceder"></a>
                  </div>
                  <div>
                      <a id="flechaAdelante" class="flechaAdelante" data-ruta_imgg="" data-title="" alt="Avanzar" title="Avanzar"></a>
                  </div>
              </div>
          </div>
          <div class="tituloDescripcion">
              <p>Título</p>
              <div class="Cerrar"><a class="CerrarLightbox">X</a></div>
          </div>
      </div>
  </div>
</div>

# style1.css

Aquí le damos algunos estilos básicos, más que nada indicarles cuales están ocultos y cuales activos.

# CSSlider.js

Vamos donde realmente importa, al script.

var active = "sliderInicio1";
var siguiente = "sliderInicio2";
var anterior = "sliderInicio3";
var automatico = setInterval(function(){$("img.cambiar3").trigger("click");}, 4200);

Inicializamos las variables con active es la primera imagen, siguiente es la segunda y anterior la última. Esos nombres hacen referencia al id del div que queremos mostrar en cada momento. En automático vamos a simular la pulsación de la flecha hacia delante cada 4,2 segundos, tiempo que podemos modificar.

---------------------------------------------------------------------------------------------------------------------------------

$('a.cambiar2, img.cambiar2, img.cambiar3').click(function(){
  clearInterval(automatico);
  var divname = this.name;
  var enlaces = "";

  if(divname.search("sliderInicio") > -1){
    enlaces = document.getElementById("CSSliderInicio").getElementsByTagName("a");
    $('.CSSliderInicio li').css("background-color", '#E4E4E4');
    cambiar(active);
    active = divname;
  }
  
  Asignamos el evento click a los "bullets", y a las dos flechas.
  Recogemos el name del evento clicado para saber el div a mostrar.
  Recogemos todos los enlaces para usarlos luego y ponemos todos los "bullets" de color claro, llamamos a cambiar() para que      muestre el nuevo div y oculte el actual. Cambiamos el elemento que estaba asignado como actual por el nuevo.
  Al principio paramos el automático para que no se líe mientras cambiamos la imagen actual.
  
---------------------------------------------------------------------------------------------------------------------------------

#Función cambiar()

function cambiar(activado){
  if(!$("#"+divname ).is(":visible")){
    $("#"+activado ).hide("fade", 900, function(){
        $("#"+divname).show("fade", 900);
    });
  }
}

Esta función es la clave de todo, si el elemento que actualmente está visible lo ocultamos con una animación fade y cuando termine animamos la entrad de la nueva. Aquí podemos cambiar el fade por cualquier evento animado jquery:
  -fade
  -slide
  -drop
  -explode
  -fold
  -highlight
  -puff
  -pulsate
  -scale
  -shake
  -size
  -transfer
  https://api.jqueryui.com/category/effects/
  
  con los parámetros necesarios por ejemplo si usáramos slide sería
  $("#"+activado ).hide("slide",{direction: "right"} 900, function(){});
  
  Podemos controlar el tiempo de entrada y de salida a nuestro gusto y la animación pueden ser diferentes.
  
--------------------------------------------------------------------------------------------------------------------------------
anteriorSiguiente(enlaces);

for(var y = 0; y < enlaces.length; y++){
  if(enlaces[y].name === divname){
    $('.' + divname).css("background-color", '#666666');
    y = enlaces.length;
  }
}

Añadimos una vez cambiada la imagen cual sería el siguiente y la anterior en las flechas. Cambiamos el "bullet" a oscuro.

--------------------------------------------------------------------------------------------------------------------------------
#Función anteriorSiguiente()

function anteriorSiguiente(enlacesCambiar){
  for(var x = 0; x < enlacesCambiar.length; x++){
    if(enlacesCambiar[x].name === active){
      if(x === (enlacesCambiar.length -1)){
        siguiente = enlacesCambiar[0].name;
        anterior = enlacesCambiar[x - 1].name;
      }else if(x === 0){
        siguiente = enlacesCambiar[x + 1].name;
        anterior = enlacesCambiar[enlaces.length -1].name;
      }else{
        siguiente = enlacesCambiar[x + 1].name;
        anterior = enlacesCambiar[x - 1].name;
      }
    }
  }

  $("#CSNext").attr('name', siguiente);
  $("#CSPrev").attr('name', anterior);
}

Controlamos si la imagen actual es la última o la primera para cargar las imágenes correctas.

--------------------------------------------------------------------------------------------------------------------------------

automatico = setInterval(function(){$("img.cambiar3").trigger("click");}, 4200);
    });
    
    $(".imagenesGrandes").touchwipe({
        wipeLeft: function() { $("#CSNext").trigger("click"); },
        wipeRight: function() { $("#CSPrev").trigger("click"); },
        min_move_x: 1,
        min_move_y: 1,
        preventDefaultEvents: true
    });
});

Volvemos a cargar el automático y la última función es para los eventos de arrastre de dedos en los móviles.
