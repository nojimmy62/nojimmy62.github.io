const ZOOM_STOPPOINT_1 = 1000
const cover_zoom_frac = 0.6
var scrollShrink = function() {
    imgHeight = $("img").height()
    pageHeight = $(window).height();
    let scroll = window.scrollY
    console.log("scroll:" + scroll)
    $("#TextMarry").css("bottom", imgHeight + "px")
    if (scroll < ZOOM_STOPPOINT_1) {
        scale = cover_zoom_frac + (1 - scroll / ZOOM_STOPPOINT_1) * (1 - cover_zoom_frac) * 0.9
        $('#ImgContainer').css('transform', `scale(${scale})`)
        $('#ImgContainer').css('top', 0.5 * (pageHeight - imgHeight) + 'px')
        $('#ImgContainer').css('position', 'fixed')
    } else {
        scale = cover_zoom_frac
        $('#ImgContainer').css('transform', `scale(${scale})`)
        $('#ImgContainer').css('top', ZOOM_STOPPOINT_1 + (pageHeight / 2 - imgHeight / 2) + 'px')
        $('#ImgContainer').css('position', 'absolute')
    }
}
var initialize = function() {
    imgHeight = $("img").height()
    pageHeight = $(window).height();
    $('#EventsContainer').css('top', ZOOM_STOPPOINT_1 + (pageHeight / 2 + cover_zoom_frac * imgHeight / 2) + 'px')
    $("#ScrollBlock").css('height', 1000 + document.documentElement.clientHeight + "px")
    scrollShrink()
    window.addEventListener("resize", () => window.requestAnimationFrame(scrollShrink));
    document.addEventListener('scroll', () => window.requestAnimationFrame(scrollShrink))
    // Don't let browser to resume scroll location on reload.
    //  Resets scroll position on every reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }
}
$(document).ready(initialize);