# jquery.syncheights
JQuery Plug-in to Sync Heights (only dependancy is JQuery)

Demo's available here: [SyncHeights JQuery Plugin](http://davidjohnfarmer.co.uk/jquery-plugins/).

Example use(s): 

```
$( document ).ready(function() {

    // Set up all of the SyncHeights rules...
    $('.example-one').prep_syncHeights();

    $('.example-two').prep_syncHeights({
        hook: "example-two", // Optional 
        mode: "innerHeight", // Default 
        pad: "200" // Adds extra height (pixels) 
    });

    $('.example-three').prep_syncHeights();

    // Using borders? Use outerHeight 
    $('.special-offer-text').prep_syncHeights({mode:"outerHeight"});
    $('.example-product-image').prep_syncHeights({mode:"outerHeight"});
    $('.example-product-notes').prep_syncHeights({mode:"outerHeight"});
    $('.example-product-name').prep_syncHeights({mode:"outerHeight"});
    $('.example-wrapper').prep_syncHeights({mode:"outerHeight"});

    // Run your SyncHeights rules...
    $.fn.do_syncHeights({
        resizedelay: 500
    });

});
```

I used this code (or a similar version) to sync the heights of the labels displayed on category pages. See the [Address Labels page on Label Planet](https://www.labelplanet.co.uk/address-labels/). 
