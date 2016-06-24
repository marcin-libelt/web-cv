/**
 * Created by Bieber on 2016-06-21.
 */


(function(){

    var element = document.querySelector('.hollow-mask');
    document.addEventListener('mousemove', function(ev) {
        element.style.backgroundPosition = (ev.clientX - 1000) + "px " + (ev.clientY - 1000) + "px";
    });

})();


function MouseShowroom(selector) {

    this.galleryWrapper = document.querySelector(selector);
    this.gallery = document.querySelector(selector +  ' ul');
    this.step = document.documentElement.clientWidth / 10;
    this.last = 0;
    this.current = 0;
    this.itemWidth = 500;

    window.addEventListener('resize', this.onResize.bind(this));
    this.galleryWrapper.addEventListener('mousemove', this.onMousemove.bind(this));

}

MouseShowroom.prototype = {
    onMousemove : function(ev) {
        this.last = this.current;
        this.current = Math.floor(ev.clientX / this.step);
        if(this.last != this.current) {
            this.gallery.style.marginLeft = (-1 * (this.current * this.itemWidth)) + 'px';
        }
    },
    onResize : function(ev) {
        this.step = document.documentElement.clientWidth / 10;
        this.itemWidth = 500;
    }
}

var dd = new MouseShowroom('#gallery');

