function Counter()
{
  var counter = 0;
setNames();
$(".cat").click(function(e) {
    counter++;
    clickCounter.innerHTML=counter;
});
}
function setNames()
{
  var names=["TOM","RAY"];
  var ids = $('.cat').map(function(i) {
    // this callback function will be called once for each matching element
    return this.id;
});
  for (n in names){
    $("#"+ids[n]+"").before('<p>'+names[n]+'</p>');
  }
}

window.onload = Counter;
