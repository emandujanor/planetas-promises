//console.log ("listo");
var ajax = new XMLHttpRequest();
var url = "data/earth-like-results.json";
ajax.open("GET", url);
ajax.send();

ajax.onreadystatechange= function(data){
  if(ajax.readyState == 4){
      console.log(ajax.responseText);
  }
}
