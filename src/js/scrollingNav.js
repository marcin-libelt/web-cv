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
    }

};



var scrollingNav = new ScrollingNav({
    navigation: 'ul.nav',
    className: 'highlighted'
})

