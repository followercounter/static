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
    var links = document.getElementsByClassName("tFC");
    var total = 0;
    for (var i = 0; i < links.length; i ++) {
        total += parseInt(links[i].getAttribute("data-count"));
    }
    document.getElementById('tFC_total').innerHTML = total;
}
document.write('<a href="https://followercounter.co/" target="_blank" id="tFC_total"></a>');
window.followercounter.total();
