var Estralurtarra= function Estralurtarra(izena){
    var min=1;
    var max=85;
  	var indarra = Math.floor(Math.random() * (max - min + 1)) + min;
    var osasuna = 150;

		Jokalari.apply(this, [izena, indarra, osasuna]);
    
    this.izenaBistaratu = function() {
      return this.izena.split("").reverse().join("");
    };

}


	Estralurtarra.prototype = new Jokalari();
	Estralurtarra.prototype.constructor = Makina;
