var Makina = function Makina(izena){
    var min=1;
    var max=100;
  	var indarra = Math.floor(Math.random() * (max - min + 1)) + min;
    var osasuna = 130;

		Jokalari.apply(this, [izena, indarra, osasuna]);

}
	Makina.prototype = new Jokalari();
	Makina.prototype.constructor = Makina;
