var Gizaki = function Gizaki(izena){

  	var indarra = 70;
    var osasuna = 150;

		Jokalari.apply(this, [izena, indarra, osasuna]);

};

	Gizaki.prototype = new Jokalari();
	Gizaki.prototype.constructor = Gizaki;
