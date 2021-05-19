$(function(){
//    console.log(tarsasJson);
//    var tarsasTomb = JSoon.parse(tarsasJson);
//    console.log(tarsasTomb);
    
    
  $.ajax({
      url: "termekek.json",
      success: function(result){
      console.log(result);
       tarsasTomb = result;
      kiir();
  }}
);

$("#OK").click(ment);
$("#OK").click(rendez);

});
var tarsasTomb =[];

function rendez() {
    tarsasTomb.sort(function(a, b){return (a.nev > b.nev)-0.5;});
    kiir();
}

function kiir(){
    
    $("article").empty();
    
    console.log(tarsasTomb);
    $("article").append("<table>");
    $("article table").append("<tr>");
    
    $("article table tr").append("<th>termék neve: </th>");
    $("article table tr").append("<th>Ár: </th>");
    $("article table tr").append("<th>Típus: </th>");
    
    for (var i = 0; i < tarsasTomb.length; i++) {
        $("article table").append("<tr>");
        
        for (var item in tarsasTomb[i] ) {
            $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i][item] +"</td>");
        }
        
//        $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].termeknev +"</td>");
//        $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].ar +"</td>");
//        $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i].fajta +"</td>");
    }
}


////objektum szerkezet letrehozasa
//var tarsasTomb = [
//    {
//        termeknev:"Monopoly",
//        ar: 1500,
//        tipus:"táblajáték"
//    },
//    {
//        termeknev:"Uno",
//        ar: 1000,
//        tipus:"kártyajáték"
//    }
//];
////JSON: szöveges, szabványos adatleíró formátum -> megfeleltethető a java script objektumának
//var tarsasJson = [{termeknev:"Monopoly",ar: 1500,tipus:"táblajáték"},{termeknev:"Uno",ar: 1000,tipus:"kártyajáték"}];

function ment(){
    var ujAdat = {};
    ujAdat.termekNev= $("#nev").val();
    ujAdat.termekAr= $("#nev").val();
    ujAdat.termekTipus= $("#Táblás").val();
    
    console.log(ujAdat);
    
    tarsasTomb.push(ujAdat);
    
    kiir();
}