// ==UserScript==
// @name        koebu_repeater
// @namespace   http://natsu.me
// @description repeat koebu audio on detail page
// @include     http://koebu.com/koe/*
// ==UserScript==


(function(){


    var check_element = document.createElement('input');
    check_element.setAttribute("type", "checkbox");
    check_element.setAttribute("id", "users-repeat");
    check_element.setAttribute("style", "margin: 0 2px 0;");

    var repeat_p = document.createElement('p');
    repeat_p.setAttribute("style", "float: right; width:70px; margin: 6px 0 0 0;");
    repeat_p.appendChild(check_element);
    repeat_p.appendChild(document.createTextNode('repeat'));

    var elements = document.getElementsByClassName('unitKoeMain');
    if(elements) elements[0].appendChild(repeat_p);

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

