function Counter()
{
  var counter = 0;
  $("#CatImage").click(function(e) {
    counter++;
    clickCounter.innerHTML=counter;
});
}

window.onload = Counter;
