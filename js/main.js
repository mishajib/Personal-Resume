// active class add remove
$(document).ready(function () {
    $('.navbar li').click(function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
});

//disable page inspection
$( window ).on("load", function() {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
    document.onkeydown = function (e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) { 
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) { 
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'X'.charCodeAt(0)) { 
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)) { 
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)) { 
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) { 
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)) { 
            return false;
        }
    };
});
