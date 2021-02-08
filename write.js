/*global console*/
var header = document.getElementById('images'),
	aside = document.getElementById('aside-left');
header.onclick = function () {
	'use strict';
	aside.classList.toggle('aside-left');
};
var sharitmo = document.getElementById('sharitmo'),
	sharit = document.getElementById('sharit'),
	i = 0,
	x = 34;
window.onload = function () {
	'use strict';
	function hoke() {
		sharitmo.style.marginLeft = i + 'px';
		i = i + 1;
		if (i > 1300) {
			clearInterval(a);
			sharitmo.style.display = 'none';
			var c = setInterval(function () {
					sharit.style.height = x + 'px';
					x = x - 1;
				}, 10);
			if (x < 0) {
				clearInterval(c);
			}
		}
	}
	var a = setInterval(hoke, 10);
};


