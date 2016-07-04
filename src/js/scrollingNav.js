function ScrollingNav(config) {

    this.config = config;

    this.navigation = document.querySelector(this.config.navigation);
    this.current = 0;
    this.cls =  ' ' + (config.className || 'active');

    this.navItems = null;
    // initMap
    this.anchorsMap = [];

    // updateMap
    this.calculateMap();
    // calculateMap

    this.highlightOne(0);

    this.navigation.addEventListener('click', this.scrollToPosition.bind(this));
    window.addEventListener('scroll', this.onScroll.bind(this));
    window.addEventListener('resize', this.calculateMap.bind(this));

};

ScrollingNav.prototype = {

    onScroll : function() {
        var i;

        for (i = 0; i < this.anchorsMap.length; i++) {
            if(this.anchorsMap[i] > window.pageYOffset) {
                if(this.current != i) {
                    this.current = i;
                    this.highlightOne(this.current);
                }
                break;
            }
        }
    },

    onClick : function() {

    },

    calculateMap : function() {
        var i;
        this.anchorsMap = [];
        this.navItems = this.navigation.querySelectorAll('a');
        for (i = 0; i < this.navItems.length; i++) {
            if(null !== document.getElementById(this.navItems[i].hash.replace('#',''))) {
                this.anchorsMap.push(document.getElementById(this.navItems[i].hash.replace('#', '')).offsetTop);
            }
        }
    },
    highlightOne : function(index) {
        var i;
        // clear all
        for (i = 0; i < this.navItems.length; i++) {
            this.navItems[i].className = this.navItems[i].className.replace(this.cls,'');
        }

        // set current
        this.navItems[index].className = this.navItems[index].className + this.cls;
    },

    scrollToPosition : function(e) {

        if(this.config.animate !== true) {
            return true;
        }

        console.log(this.navItems)

        var target = e.target || e.srcElement;
        var event = e || window.event;

        event.preventDefault();

        var pos = 0;

        this.highlightOne(2);



        var interval = setInterval(function() {
            if (pos == 300) {
                clearInterval(interval);
            } else {
                pos++;
                window.scrollTo(0, pos);
            }
        }, 5);

    }

};



var scrollingNav = new ScrollingNav({
    navigation: 'ul.nav',
    className: 'highlighted',
    animate: false
})

