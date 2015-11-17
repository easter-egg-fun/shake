(function () {
	'use strict';

	var keyCombo = [116, 101, 115, 116] // T E S T
    var typedKeys = [];

    function arraysAreEqual (a, b) {
	  	if (a.length != b.length) {
	  	  	return false;
	  	}
	
	  	for (var i=0; i<a.length; i++) {
		  	if (a[i] != b[i]) {
		  	  	return false;
		  	}
	  	}
	
	  	return true;
	}

	document.onkeypress = function(e) {
	    e = e || window.event;

	    var charCode = (typeof e.which == 'number') ? e.which : e.keyCode;

	    if (charCode === 116 || charCode === 101 || charCode === 115 || charCode === 116) {
	    	typedKeys.push(charCode);

	    	if (arraysAreEqual( typedKeys, keyCombo )) {
				console.log('Event goes here!');

	    	}
	    }
	};
}());
