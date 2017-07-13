//console.log ("listo");
var contenedor=document.getElementById("contenedor_planetas");
var plantilla=
  '<div class="row tarjeta">' +
   '<div class="col s12 m6 offset-m3">' +
    '<div class="card small">' +
      '<div class="card-image">' +
        '<img src="static/img/planeta.jpg">' +
        '<span class="card-title">__name__</span>' +
      '</div>' +
      '<div class="card-content">' +
        '<p><strong>Descubierto en el año: </strong>__año__<br>' +
        '<strong>Por el Telescopio: </strong>__telescopio__<br>' +
        '<strong>Radio: </strong>__radio__<br>' +
        '</p>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>';

function getJSON(url){
  return new Promise(function(resolve, reject){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url);
    ajax.send();

    ajax.onreadystatechange= function(){
      if(ajax.readyState == 3){
          resolve(JSON.parse(ajax.responseText));
      }
    }
  })
}

getJSON("data/earth-like-results.json")
.then(function(mensaje){return getJSON(mensaje.results.forEach(function(planetas){
  getJSON(planetas)
  .then(function(planetas){
    var planetaNombre = planetas.pl_name;
    var planetaDescub =planetas.pl_disc;
    var planetaTelescopio = planetas.pl_telescope;
    var planetaRade= planetas.pl_rade;

    crearPlaneta();
    function crearPlaneta(planetas){
      var plantillaFinal = " ";
      plantillaFinal += plantilla.replace("__name__", planetaNombre)
        .replace("__año__", planetaDescub)
        .replace("__telescopio__", planetaTelescopio)
        .replace("__radio__", planetaRade);
        contenedor.innerHTML +=plantillaFinal;

    }
  })
}))})






//.then(function(resultado){/*console.log(resultado)*/})
