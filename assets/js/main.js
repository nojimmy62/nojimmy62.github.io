var scrollShrink = function() {
    imgHeight = $("img").height()
    pageHeight = $(window).height();

    let scroll = window.scrollY
    console.log("scroll:" + scroll)
    $("#TextMarry").css("bottom", imgHeight + "px")
    if (scroll < ZOOM_STOPPOINT_1) {
        $('#ImgContainer').css('transform', `scale(${cover_zoom_frac + (1 - scroll / ZOOM_STOPPOINT_1)*(1-cover_zoom_frac)})`)
        $('#ImgContainer').css('top', 0.5 * (pageHeight - imgHeight) + 'px')
        $('#ImgContainer').css('position', 'fixed')
    } else {
        $('#ImgContainer').css('transform', `scale(${cover_zoom_frac})`)
        $('#ImgContainer').css('position', 'absolute')
        $('#ImgContainer').css('top', ZOOM_STOPPOINT_1 + (pageHeight / 2 - imgHeight / 2) + 'px')
    }
}

var initialEventContainer = function() {
    imgHeight = $("img").height()
    pageHeight = $(window).height();
    $('#EventsContainer').css('top', ZOOM_STOPPOINT_1 + (pageHeight / 2 + cover_zoom_frac * imgHeight / 2) + 'px')
}

const ZOOM_STOPPOINT_1 = 1000
const cover_zoom_frac = 0.6

$(document).ready(function() {
    initialEventContainer()
    scrollShrink()

    $("#ScrollBlock").css('height', 1000 + document.documentElement.clientHeight + "px")

    window.addEventListener("resize", () => window.requestAnimationFrame(scrollShrink));
    document.addEventListener('scroll', () => window.requestAnimationFrame(scrollShrink))
    // Resets scroll position on every reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }

    // $(document).scrollTop(1450)
});