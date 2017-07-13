//console.log ("listo");
var contenedor=document.getElementById("contenedor_planetas");
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
      var planeta = document.createElement("div");
      planeta.innerHTML= "<img src='https://dummyimage.com/200x200'> <br>"+ "<strong>Nombre:</strong> "+ planetaNombre + "<br><strong>Descubierto el Año: </strong> "+ planetaDescub + "<br>por el Telescopio " + planetaTelescopio + "<br><strong>Radio: </strong> "+ planetaRade + "<p> </p> <hr>" ;
      contenedor_planetas.appendChild(planeta);
    }
  })
}))})






//.then(function(resultado){/*console.log(resultado)*/})
