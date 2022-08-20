

var scrollShrink = function() {
    var ZOOM_STOPPOINT_1 = 1000
    var imgHeight = $("#JabuMarryImg").height()
    var pageHeight = $(window).height();
    var maxScaleSize = 0.9
    var minScaleSize = 0.6

    $("#ScrollBlock").css('height', ZOOM_STOPPOINT_1 + pageHeight + "px")
    var scroll = window.scrollY
    if (scroll < ZOOM_STOPPOINT_1) {
        scale = minScaleSize + (1 - scroll / ZOOM_STOPPOINT_1) * (maxScaleSize-minScaleSize)
        $('#ImgContainer').css('transform', `scale(${scale})`)
        $('#ImgContainer').css('top', 0.5 * (pageHeight - imgHeight) + 'px')
        $('#ImgContainer').css('position', 'fixed')
    } else {
        scale = minScaleSize
        $('#ImgContainer').css('transform', `scale(${scale})`)
        $('#ImgContainer').css('top', ZOOM_STOPPOINT_1 + (pageHeight / 2 - imgHeight / 2) + 'px')
        $('#ImgContainer').css('position', 'absolute')
    }
}
var initialize = function() {    
    scrollShrink()
    window.addEventListener("resize", () => window.requestAnimationFrame(scrollShrink));
    document.addEventListener('scroll', () => window.requestAnimationFrame(scrollShrink))
    // Don't let browser to resume scroll location on reload.
    // Resets scroll position on every reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }
}
$(document).ready(initialize);