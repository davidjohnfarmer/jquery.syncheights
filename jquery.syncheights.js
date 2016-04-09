/*! SyncHeights for JQuery v1.00 BETA
 * http://www.davidjohnfarmer.co.uk/jquery-plugins/syncheights/ 
 * Do not remove any of this notice (you're welcome to use this code in commercial projects)
 * Copyright (c) 2016 David John Farmer www.davidjohnfarmer.co.uk
 * Licensed under the MIT license */

(function ( $ ) {
 
    var sequence = 0;
    var delayed = 0;

    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $.fn.prep_syncHeights = function(options) {
 
        // DEFAULT OPTIONS 
        var settings = $.extend({
            mode: "innerHeight",
            hook: "", 
            pad: "0"
        }, options );
 
        // COUNTS FROM 1
        sequence++;

        if (settings.hook == "") {
            settings.hook = sequence;
        }

        var uniquehook = settings.hook+"-syncHeights";

        var $this = $(this);



        return this.each(function() {
            $this.attr('data-syncheights',uniquehook);
            $this.attr('data-syncheights-mode',settings.mode);
            $this.attr('data-syncheights-pad',settings.pad);
            $this.attr('data-syncHeights-sequence',sequence);
        });

    };

    $.fn.do_syncHeights= function(options) {

        // DEFAULT OPTIONS 
        var settings = $.extend({
            resizedelay: 500
        }, options );

        $.fn.syncHeights();

        $(window).load(function() {
            $.fn.syncHeights();
        });

        $( window ).resize(function() {
            delay(function(){
                $.fn.syncHeights();
            }, settings.resizedelay);
        });

    };
 
    $.fn.syncHeights = function() {

        var seq = 1;
        var rels = {};

        var all_attr = "*[data-syncHeights-sequence]";

        $(all_attr).css('min-height','0');

        while (seq <= sequence) {

            var seq_attr = "*[data-syncHeights-sequence='"+seq+"']";
            $(seq_attr).each(function(i, obj) {
                
                // FOR ALL ITEMS IN THIS SEQUENCE
                var pad = parseInt($(this).attr('data-syncheights-pad'));
                var mode = $(this).attr('data-syncheights-mode');
                var hook = $(this).attr('data-syncheights');

                if (mode == "innerHeight") {
                    var thisheight = $(this).innerHeight();
                } 

                if (mode == "outerHeight") {
                    var thisheight = $(this).outerHeight();
                }

                if (mode == "height") {
                    var thisheight = $(this).height();
                }

                theheight = Math.ceil(thisheight);

                if (!rels[hook]) {
                    rels[hook] = 1;
                } 

                if (thisheight > rels[hook]) {
                    rels[hook] = thisheight+pad;
                    $("*[data-syncheights='"+hook+"']").css('min-height',rels[hook]);
                }



            });

            seq++;

        }

    };


}( jQuery ));