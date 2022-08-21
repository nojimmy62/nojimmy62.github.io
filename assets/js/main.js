function makeStruct(names) {
    var names = names.split(' ');
    var count = names.length;


    function constructor() {
        for (var i = 0; i < count; i++) {
            this[names[i]] = arguments[i];
        }
    }
    return constructor;
}

var ScrollConfig = makeStruct("selector initialScale finalScale height paddingTop paddingBottom");
var _updateAnimation = []
var _updateConfig = []


var animateUpdate = function() {
    var scroll = window.scrollY

    if (scroll >= $("#WeddingEvent").offset().top && scroll < $("#OurStory1").offset().top) {
        $('#EventButton').addClass('active')
        $('#EventStory').removeClass('active')
    }
    else if (scroll >= $("#OurStory1").offset().top) {
        $('#EventButton').removeClass('active')
        $('#EventStory').addClass('active')
    }
    
    _updateConfig.forEach((config) => {
        var containerTop = $(config.selector).offset().top
        var element = $(config.selector).find('.shrinkElement')
        var pageHeight = $(window).height()
        if (scroll < containerTop) {
            scale = config.initialScale
            element.css('position', 'absolute')
            element.css('top', containerTop + config.paddingTop * pageHeight - element.height() / 2)
        } else if (scroll < containerTop + config.height) {
            scale = config.initialScale + (scroll - containerTop) / config.height * (config.finalScale - config.initialScale)
            element.css('position', 'fixed')
            element.css('top', config.paddingTop * pageHeight - element.height() / 2)
        } else {
            scale = config.finalScale
            element.css('position', 'absolute')
            element.css('top',containerTop + config.height + config.paddingTop * pageHeight - element.height() / 2)
        }
        element.css('transform', `scale(${scale})`)
        console.log(config)
    })
}



var ScrollShrink = function(config) {
    var element = $(config.selector)
    var shrinkElement = $(element).find(".shrinkElement")
    if (shrinkElement.length == 0) {
        alert("No shrinkElement found under " + config.selector)
    }

    var invisible = $(element).find('.invisible-block')
    if (invisible.length == 0) {
        alert("No invisible-block found under " + config.selector)
    }
    if (typeof config.paddingTop === 'undefined') {
        config.paddingTop = 0.5
    }
    if (typeof config.paddingBottom === 'undefined') {
        config.paddingBottom = 0.5
    }
    invisible.css('height', config.height + (config.paddingTop + config.paddingBottom) * $(window).height())
    _updateConfig.push(config)
    animateUpdate()

    

}

var initialize = function() {
    ScrollShrink(new ScrollConfig("#Cover", 0.9, 0.6, 1000, 0.5, 0.5))
    ScrollShrink(new ScrollConfig("#WeddingEvent", 1, 0.6, 1000, 0.5, 0))
    ScrollShrink(new ScrollConfig("#OurStory1", 1.5, 0.6, 1000, 0.5, 0))
    ScrollShrink(new ScrollConfig("#OurStory2", 1.5, 0.6, 1000, 0.5, 0))
    ScrollShrink(new ScrollConfig("#OurStory3", 1.5, 0.6, 1000, 0.5, 0))
    ScrollShrink(new ScrollConfig("#OurStory4", 1.5, 0.6, 1000, 0.5, 0))
    $(window).on('resize', () => window.requestAnimationFrame(animateUpdate))
    $(document).on('scroll', () => window.requestAnimationFrame(animateUpdate))
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }
}
$(document).ready(initialize);