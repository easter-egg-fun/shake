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
            var newClasses  = element.className.replace(/\bshake-front-container\b/,'front-container-fall');
            var parent = element.parentNode;

            parent.className = parent.className.replace(/\bwhite-background\b/, "no-borders");
            element.className = newClasses

        }, 2000)
    }

    function shakeOnHover (event, element) {
        var elem = this || element;

        elem.className += " shake-front-container"

        stopShaking(elem);
    }

    function activateShake (element, time) {
        setTimeout( function () {

            shakeOnHover(null, element);
        }, time);
    }

    function injectEgg () {
        var img     = document.createElement("img");
        var parent  = document.getElementsByClassName("fc-container__inner")[0];
        var child   = document.getElementsByClassName("fc-container__header")[0];

        img.className   = "guardian-egg"
        img.src         = "img/egg.png";

        parent.insertBefore(img, child);
    }

    document.onkeypress = function(e) {

        e = e || window.event;

        var charCode = (typeof e.which == 'number') ? e.which : e.keyCode;

        if (charCode === 116 || charCode === 101 || charCode === 115 || charCode === 116) {
            typedKeys.push(charCode);

            if (arraysAreEqual( typedKeys, keyCombo )) {
                var containers          = document.getElementsByClassName("fc-item");
                var firstContainer      = containers[0];
                var parent              = firstContainer.parentNode;
                var timeToFall          = 0;
                var containersLength    = containers.length;
                var i;

                firstContainer.className += " shake-front-container";
                parent.className += " white-background";

                stopShaking(firstContainer);
                injectEgg();

                for (i = 0; i < containersLength ; i++) {
                    var containerParent = containers[i].parentNode;

                    if (i < 2) {
                        timeToFall += 2000;
                    } else if ( i > 5 ) {
                        timeToFall += 500;
                    } else {
                         timeToFall += 1500;
                    }

                    containers[i].className += " increase-z"
                    containerParent.className += " white-background";
                    containers[i].addEventListener("mouseover", shakeOnHover, false);
                    activateShake(containers[i], timeToFall)
                };
            }
        }
    };
}());
