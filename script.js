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

    function shakeOnHover (event) {
        var elem = this;

        elem.className += " shake-front-container"

        setTimeout(function () {
            var newClasses = elem.className.replace(/\bshake-front-container\b/,'testing2');
            var child = elem.getElementsByClassName('fc-item__content')[0];
            if (child) {
                child.className += ' testing3';
            }

            elem.className = newClasses
        }, 3000)
    }

    document.onkeypress = function(e) {
        e = e || window.event;

        var charCode = (typeof e.which == 'number') ? e.which : e.keyCode;

        if (charCode === 116 || charCode === 101 || charCode === 115 || charCode === 116) {
            typedKeys.push(charCode);

            if (arraysAreEqual( typedKeys, keyCombo )) {
                var containers = document.getElementsByClassName("fc-item__container");
                var firstContainer = containers[0];
                var i;

                firstContainer.className += " shake-front-container";

                for (i = containers.length - 1; i >= 0; i--) {
                    containers[i].addEventListener("mouseover", shakeOnHover, false);
                };
            }
        }
    };
}());
