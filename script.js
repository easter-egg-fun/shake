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

    function stopShaking (element) {

        setTimeout(function () {
            var newClasses = element.className.replace(/\bshake-front-container\b/,'front-container-fall');
            var child = element.getElementsByClassName('fc-item')[0];

            element.className = newClasses

        }, 3000)
    }

    function shakeOnHover (event) {
        var elem = this;

        elem.className += " shake-front-container"

        stopShaking(elem);
    }

    document.onkeypress = function(e) {
        e = e || window.event;

        var charCode = (typeof e.which == 'number') ? e.which : e.keyCode;

        if (charCode === 116 || charCode === 101 || charCode === 115 || charCode === 116) {
            typedKeys.push(charCode);

            if (arraysAreEqual( typedKeys, keyCombo )) {
                var containers = document.getElementsByClassName("fc-item");
                var firstContainer = containers[0];
                var i;

                firstContainer.className += " shake-front-container";

                stopShaking(firstContainer);

                for (i = containers.length - 1; i >= 0; i--) {
                    containers[i].addEventListener("mouseover", shakeOnHover, false);
                };
            }
        }
    };
}());
