$(document).ready(function() {

var kBoardWidth = 8;
var kBoardHeight= 8;
var kPieceWidth = 64;
var kPieceHeight= 64;
var kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
var kPixelHeight= 1 + (kBoardHeight * kPieceHeight);

var gCanvasElement = document.getElementById("lienzo");
var gDrawingContext = gCanvasElement.getContext("2d");

function drawBoard() {

    gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

    gDrawingContext.beginPath();

    /* vertical lines */
    for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
		gDrawingContext.moveTo(0.5 + x, 0);
		gDrawingContext.lineTo(0.5 + x, kPixelHeight);
    }

    /* horizontal lines */
    for (var y = 0; y <= kPixelHeight; y += kPieceHeight) {
		gDrawingContext.moveTo(0, 0.5 + y);
		gDrawingContext.lineTo(kPixelWidth, 0.5 +  y);
    }

    /* draw it! */
    gDrawingContext.strokeStyle = "#ccc";
    gDrawingContext.stroke();

}

  // --------------------------------------------- ZURE KODEA HEMEN ------------------------
  // Drag&Drop funtzionalitatea inplementatu nahi dugu piezak arrastatu eta taulan jare ahal izateko
  // (argibidea: "helper: clone" lagunduko dizun aukera bat da...)
  // sets the draggable
    $('#damas img').draggable({
      helper: 'clone',
    });

    // sets droppable
      // canvas-a arrastagaria den pieza baten helburua izan behar da
    $('#lienzo').droppable({
      drop: function(event, ui){
        // pieza non erori den (posizioa) kalkulatu beharko duzu
        var x=parseInt((ui.offset.left+32)*8/520); //+32 egin dut fitxa erdia baina gehiago dagoen kutxan gera dadin
        var y=parseInt((ui.offset.top-32)*8/520);
        console.log(x,y);
        // eta posizio hori gelaxkarekin doitu (piezak ezin dira gelaxkaz kanpo geratu)
        // behin posizio egokia kalkulatu ondoren margotu pieza horri dagokion irudia canvas-an
        c = document.getElementById(ui.helper.context.id),
        gDrawingContext.drawImage(c, x*64, y*64);
        $("#ui").append("<div>"+ui.helper.context.id+"-->"+x+":"+y+"</div>");
      }
    });

	// Erabiltzaileak jare egin duen fitxaren ID-a lortu
	// eta pantailan margotu, #ui elementuan, fitxaren ID-a eta bere posizioa taulan

  // -------------- ZURE KODEA HEMEN AMAITZEN DA (guztira ez dira 20 lerro baino gehiago izan behar) ------


  drawBoard();

});
