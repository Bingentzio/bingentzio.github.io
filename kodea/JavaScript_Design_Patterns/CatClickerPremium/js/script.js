

function Counter()
{
  var dir = "images/";
  var fileextension = ".jpg";

  $.ajax({
      //This will retrieve the contents of the folder if the folder is configured as 'browsable'
      url: dir,
      success: function (data) {
          //List all .jpg file names in the page
          $(data).find("a:contains(" + fileextension + ")").each(function () {
              var catname = this.href.replace(window.location, "").replace("http://", "");

              // We're creating a DOM element
              var elem = document.createElement('li');
              elem.textContent = catname.replace(".jpg","");

              // ... and when we click, the image appears
              elem.addEventListener('click', (function(numCopy) {
                  return function() {
                       $("div").html("<img class='cat' src='" + dir + catname + "'>");
                       $("div").append("<p id='counter'>");
                       var counter=0;
                       $("div").bind("click",function(){
                         counter++;
                         $("#counter").html(counter);
                       });
                  };
              })(catname));
              $("ul").append(elem);
          });
      }
  });

}

window.onload = Counter;
