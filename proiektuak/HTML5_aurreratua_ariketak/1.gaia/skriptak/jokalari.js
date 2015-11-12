var Jokalari = function Jokalari(izena, indarra, osasuna) {
		this.izena = izena;
		this.indarra = indarra;
		this.osasuna = osasuna;
	}

	Jokalari.prototype.izenaBistaratu = function() {
		return  this.izena;
	}

  Jokalari.prototype.Borrokatu = function(jokalari) {
    while(this.osasuna>0 && jokalari.osasuna>0){
      //  console.log(this.izena+":"+this.osasuna+"--"+jokalari.izena+":"+jokalari.osasuna);
      if ( Math.random() * this.indarra > jokalari.indarra )
      {
        jokalari.osasuna -= this.indarra;
      //  console.log(this.izena+":"+this.osasuna+"--"+jokalari.izena+":"+jokalari.osasuna);
      }
      else
      {
        this.osasuna -= jokalari.indarra;
      //  console.log(this.izena+":"+this.osasuna+"--"+jokalari.izena+":"+jokalari.osasuna);
      }
	   }
     if(this.osasuna>0){
       return this;
     }
     else{
       return jokalari;
     }
   }
