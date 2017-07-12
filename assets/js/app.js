//console.log ("listo");
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
.then(function(mensaje){return getJSON(mensaje.results[0])})
.then(function(resultado){console.log(resultado)})
