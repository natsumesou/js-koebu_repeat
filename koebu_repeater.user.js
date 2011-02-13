// ==UserScript==
// @name        koebu_repeater
// @namespace   http://natsu.me
// @description repeat koebu audio on detail page
// @include     http://koebu.com/koe/*
// ==UserScript==


(function(){
    var check_element = document.createElement('input');
    check_element.type = "checkbox";
    check_element.id = "users-repeat";
    check_element.style.float = "right";
    check_element.style.width = "100px";
    check_element.style.margin = "6px 0 0 0";

    check_element.appendChild(document.createTextNode('repeat'))
    var elements = document.getElementsByClassName('unitKoeMain');
    if(elements) elements[0].appendChild(check_element);

    var repeat = function(){
        var container = this.container;
        clearInterval(this.progress_timer);
        if (this.player)
            this.player.stop();
        container.removeClass('playing');
        $('.progressBar p', container).width(0);
        $('.seek-bar', container).slider('value', 0);
        $('.current-time', container).text('00:00');

        this.playing = false;
        this.refresh();
        if($('#users-repeat').attr('checked')) this.play();
        return this;
    }
    location.href = "javascript:void(Koebu.Unit.prototype.stop=" + repeat + ")()";
})();

