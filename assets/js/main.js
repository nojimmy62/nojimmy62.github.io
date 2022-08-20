(function($) {
    pageHeight = document.documentElement.clientHeight
    pageWidth = document.documentElement.clientWidth
    IMAGE_WIDTH = $("img").width()
    IMAGE_HEIGHT = $("img").height()

    console.log(pageHeight)
    $(document).ready(function() {
        const imgElement = document.querySelector('#ImgContainer')

        const ZOOM_STOPPOINT_1 = 1000

        const ZOOM_STOPPOINT_2 = 2000
        imgElement.style.top = 0.5 * (pageHeight - IMAGE_HEIGHT) + 'px'

        function anim() {
            let scroll = window.scrollY
            console.log("scroll:" + scroll)
            if (scroll < ZOOM_STOPPOINT_1) {
                imgElement.style.transform = `scale(${0.5 + (1 - scroll / ZOOM_STOPPOINT_1)*0.5})`
                imgElement.style.top = 0.5 * (pageHeight - IMAGE_HEIGHT) + 'px'
                imgElement.style.position = 'fixed'
                $("#text-marry").css("bottom", IMAGE_HEIGHT + "px")
                    //$("#text-marry").css("position", "fixed").css("top", 0.5 * (pageHeight - IMAGE_HEIGHT)/2 * (0.5 + (1 - scroll / ZOOM_STOPPOINT_1)*0.5) - 20 + 'px')
            } else {

                // $("#text-marry").addClass("animation_fadein").css("position", "absolute").css("top", '-100px')
                $("#text-marry").css("bottom", IMAGE_HEIGHT + "px")
                imgElement.style.transform = `scale(${0.5})`
                imgElement.style.position = 'absolute'
                imgElement.style.top = ZOOM_STOPPOINT_1 + (pageHeight / 2 - IMAGE_HEIGHT / 2) + 'px'



            }
        }
        anim()

        var onresize = function() {

            pageWidth = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;

            IMAGE_WIDTH = $("img").width()
            IMAGE_HEIGHT = $("img").height()
            anim()
        }
        window.addEventListener("resize", onresize);
        // Resets scroll position on every reload
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }

        document.addEventListener('scroll', () => window.requestAnimationFrame(anim))
    });
})(jQuery);