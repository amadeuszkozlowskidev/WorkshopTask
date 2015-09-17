(function ($) {
    'use strict';
    function hexToRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function getColor (event) {
        event.preventDefault(); // prevent sending the form
        var $input = $('#colorInput')[0].value;
        console.log($input);
        var rgb = "rgb(" + hexToRgb($input).r + ", " + hexToRgb($input).g + ", " + hexToRgb($input).b + ")";

        document.getElementById('js-color-hex').innerHTML = $input;
        document.getElementById('js-color-result').style.background = $input;
        document.getElementById('js-color-rgb').innerHTML = rgb;
    }

    $(function () { // initialize the page
        $('#js-color-btn').click(getColor);
    });
})(jQuery);