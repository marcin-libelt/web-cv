/**
 * Created by Bieber on 2016-06-21.
 */


(function(){

    var element = document.querySelector('.hollow-mask');
    document.addEventListener('mousemove', function(ev) {

        element.style.backgroundPosition = (ev.clientX - 1000) + "px " + (ev.clientY - 1000) + "px";

    });

})();