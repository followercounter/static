if (!window.hasOwnProperty('followercounter')) {
    window.followercounter = {};
}
if (!Element.prototype.getElementsByClassName) {
	Element.prototype.getElementsByClassName = function(search) {
		var d = this,
			elements, pattern, i, results = [];
		if (d.querySelectorAll) { // IE8
			return d.querySelectorAll("." + search);
		}
		if (d.evaluate) { // IE6, IE7
			pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
			elements = d.evaluate(pattern, d, null, 0, null);
			while ((i = elements.iterateNext())) {
				results.push(i);
			}
		} else {
			elements = d.getElementsByTagName("*");
			pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
			for (i = 0; i < elements.length; i++) {
				if (pattern.test(elements[i].className)) {
					results.push(elements[i]);
				}
			}
		}
		return results;
	}
}
window.followercounter.total = function() {
    // function m(n,d){
    //     x=(''+n).length,p=Math.pow,d=p(10,d)
    //     x-=x%3
    //     return Math.round(n*d/p(10,x))/d+" KMGTPE"[x/3]
    // }
    function m(number, decPlaces) {
    	decPlaces = Math.pow(10, decPlaces);
    	var abbrev = ["k", "m", "b", "t"];
    	for (var i = abbrev.length - 1; i >= 0; i--) {
    		var size = Math.pow(10, (i + 1) * 3);
    		if (size <= number) {
    			number = Math.round(number * decPlaces / size) / decPlaces;
    			if ((number == 1000) && (i < abbrev.length - 1)) {
    				number = 1;
    				i++;
    			}
    			number += abbrev[i];
    			break;
    		}
    	}
    	return number;
    }
    var links = document.getElementsByClassName("tFC");
    var total = 0;
    for (var i = 0; i < links.length; i ++) {
        total += parseInt(links[i].getAttribute("data-count"));
    }
    document.getElementById('tFC_total').innerHTML = m(total, 2);
}
document.write('<a href="https://followercounter.co/" target="_blank" id="tFC_total"></a>');
window.followercounter.total();
