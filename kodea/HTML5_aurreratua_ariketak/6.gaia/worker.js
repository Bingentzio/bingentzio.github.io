addEventListener('message', function(e) {
  var data = e.data;
  isLehena(data)
}, false);


function isLehena(n) {
 	var i = 2;
 	if (n == 2) postMessage([n,true]);
 	for (; i < n; ++i) {
 		if (n % i == 0) {
 			      postMessage([n,false]);
            return;
 		}
 		// postMessage(i)
 	}
  postMessage([n,true]);
 }
