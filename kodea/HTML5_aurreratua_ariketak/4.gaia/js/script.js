//funtzio hau bi datu eskaeren artean denbora bat pasatzeko ipini dut, bestela erroreak sor daitezke, ez dut lortu beste modu batean egitea...
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function kudeatzaileakHasieratu()
{

var hiria;
var egunekoDatuak;
var kopapena = document.getElementById("kokapena");

kokapena.onchange =function(){
console.log(this.options[this.selectedIndex].value)
hiria=this.options[this.selectedIndex].text;
if(this.options[this.selectedIndex].value!=""){
//helbide hau berriz, uneko eguraldia lortzeko da
var helbidea2 = "http://api.openweathermap.org/data/2.5/weather?q="+this.options[this.selectedIndex].value+",es&units=metric&APPID=4437c395e63f02a352a425460ef6b57c";
$.ajax({url:helbidea2,success:function(emaitza){
  egunekoDatuak=emaitza;
  }});
  sleep(100);
//helbide honekin 3 egunetako datuak lortzen dira
var helbidea = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.options[this.selectedIndex].value+",es&units=metric&cnt=3&APPID=4437c395e63f02a352a425460ef6b57c";
$.ajax({url:helbidea,success:function(result){
  datuakErakutsi(result,egunekoDatuak);
  }});
}
$("#emaitza div").remove();
$("#emaitza p").remove();
$("#emaitza h2").remove();
$("#emaitza h3").remove();
$("#emaitza h4").remove();
egunekoDatuak=null;
}
var egunak=["Gaur","Bihar","Etzi"]
var datuakErakutsi=function(result,egunekoDatuak){
  $("#emaitza div").remove();
  $("#emaitza p").remove();
  $("#emaitza h2").remove();
  $("#emaitza h3").remove();
  $("#emaitza h4").remove();
  $("#emaitza").append("<h2>"+hiria+", EH</h2>");
  //uneko eguraldia
  $("#emaitza").append("<div class='icon'><img src='images/"+egunekoDatuak.weather[0].icon+".png' alt="+egunekoDatuak.weather[0].icon+"><div>");
  $("#emaitza").append("<div class='tenperatura'><b>"+egunekoDatuak.main.temp+"º</b></div>");
  $("#emaitza").append("<div class='description'><p>"+egunekoDatuak.weather[0].main+"</p></p>"+egunekoDatuak.weather[0].description+"</p><div>");
  egunekoDatuak=null;
  for(e in result.list){
    if(e==0){
      //tenperatura maximo eta minimoen balioak uneko datuetan ez dira eguneko balioak unekoak baizik
      $("#emaitza").append("<div class="+egunak[e]+"><p><b>Max: </b>"+result.list[e].temp.max+"º<b></p><p>Min: </b>"+result.list[e].temp.min+"º</p></div>");
    }else{
      //2. eta 3. egunetako eguraldia
      //append-ek ezdu uztez div bat bitan banatzen... hau da errazago ulertzeko datuak append ezberdinen bidez sartzen
        $("#emaitza").append("<div class="+egunak[e]+"><h3>"+egunak[e]+"</h3><h4>Tenperaturak:</h4><p><b> Max: </b>"+result.list[e].temp.max+"º  <b> Min: </b>"+result.list[e].temp.min+"º  </p><h4>Eguraldia:</h4><p><b> Orokorra: </b>"+result.list[e].weather[0].main+"<b> Deskribapena: </b>"+result.list[e].weather[0].description+"</p></div>");
    }
  }
}

}
window.onload = kudeatzaileakHasieratu;
