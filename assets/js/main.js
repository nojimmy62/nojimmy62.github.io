'use strict';
/* jshint -W097 */
/*globals $:false */
/*globals LazyLoad:false */
/*globals console:false */
/*globals window:false */
/*globals document:false */
/*globals history:false */

var langText = {
    "#NavHeader": {
        "en": "Ting-Wei & Hsiang-Chih",
        "tw": "亭維 & 翔致",
    },
    "#EventButton": {
        "en": "Wedding events",
        "tw": "婚禮資訊"
    },
    "#StoryButton": {
        "en": "Our story",
        "tw": "我們的故事"
    },
    "#FactButton": {
        "en": "Fun facts",
        "tw": "小趣事"
    },
    "#PhotoButton": {
        "en": "Photo gallery",
        "tw": "相簿"
    },
    "#TextMarry": {
        "en": "Ting-Wei & Hsiang-Chih are getting married!",
        "tw": "亭維 & 翔致要結婚了！"
    },
    ".weddingHeader": {
        "en": "Wedding events",
        "tw": "婚禮資訊"
    },
    "#TextDateHeader": {
        "en": "Date",
        "tw": "日期"
    },
    "#TextDate": {
        "en": "December 18, 2022 (Sunday)",
        "tw": "2022年12月18日 (星期日)"
    },
    "#TextCeremonyHeader": {
        "en": [
            "Ceremony:",
            "Chi-Nan Presbyterian Church",
        ],
        "tw": [
            "結婚典禮(自由參加):",
            "濟南教會"
        ]
    },
    "#TextChurch": {
        "en": [
            "3:00 pm.",
            "No. 3, Zhongshan S Rd, Zhongzheng District, Taipei City",
            "Google map: <a target=\"_blank\" href=\"https://goo.gl/maps/NZJXJdLBwn2jZuGj6\">Link</a>",
            "Close to MRT NTU Hospital, Shandao Temple, and Taipei Main station"
        ],
        "tw": [
            "3:00 pm入場，3:30 pm典禮開始",
            "台北市中正區中山南路3號",
            "Google 地圖 <a target=\"_blank\" href=\"https://goo.gl/maps/NZJXJdLBwn2jZuGj6\">連結</a>",
            "近捷運台大醫院站",
        ]
    },
    "#TextBanquetHeader": {
        "en": [
            "Banquet:",
            "Mandarin Oriental Taipei",
        ],
        "tw": [
            "婚禮晚宴:",
            "台北文華東方酒店"
        ],
    },
    "#TextBanquet": {
        "en": [
            "6:00 pm.",
            "No. 158, DunHua N Rd, Songshan District, Taipei City",
            "Google map: <a target=\"_blank\" href=\"https://goo.gl/maps/15nu7y7u53WyiVUk7\">Link</a>",
            "Close to MRT Taipei Arena station",
        ],
        "tw": [
            "6:00 pm入席，6:30 pm開席",
            "台北市松山區敦化北路158號",
            "Google 地圖<a target=\"_blank\" href=\"https://goo.gl/maps/15nu7y7u53WyiVUk7\">連結</a>",
            "近捷運台北小巨蛋站"
        ],
    },
    "#TextEnlarge1": {
        "en": "(Click to enlarge)",
        "tw": "(點擊可放大)",
    },
    "#TextEnlarge2": {
        "en": "(Click to enlarge)",
        "tw": "(點擊可放大)",
    },
    "#TextTransHeader": {
        "en": "Recommended transportation",
        "tw": "建議交通方式"
    },
    "#TextTrans": {
        "en": "If you plan to attend the wedding ceremony, metered street parking is readily available in the neighborhood. After the ceremony, if you plan to take the MRT from the church to the hotel, we recommend taking the red line from NTU Hospital station (台大醫院站) to Zhongshan station (中山站) then transiting to the green line to get to Taipei Arena station (台北小巨蛋站). The estimated commute (including walking to and from the nearest stations) is 30-40 minutes. If you plan on going directly to the wedding banquet, free parking at the hotel (level B5/B6) is available for all wedding guests.",
        "tw": "如參加教會典禮，教會不提供訪客停車，建議路邊計費停車或大眾交通工具。如欲從教會搭捷運至文華東方酒店，建議搭乘紅線、由台大醫院站搭至中山站，再轉乘綠線搭至台北小巨蛋站；總通勤時間(含步行)約30-40分鐘。如僅參加婚宴，可多利用酒店的免費停車場(於酒店B5/B6)。"
    },
    "#TextParkingHeader": {
        "en": "Parking",
        "tw": "停車資訊"
    },
    "#TextParking": {
        "en": [
            "Parking lots nearby the Chi-Nan Presbyterian Church: <a target=\"_blank\" href=\"http://www.chi-nanchurch.tw/contact/venue/parking-nearby\">link </a>",
            "The Mandarin Oriental Taipei provides free parking at the hotel B5 and B6",
        ],
        "tw": [
            "濟南教會附近計時停車場請參考：<a target=\"_blank\" href=\"http://www.chi-nanchurch.tw/contact/venue/parking-nearby\">連結 </a>",
            "臺北文華東方酒店提供免費室內停車(於酒店B5/B6)"
        ],
    },
    "#TextZoomHeader": {
        "en": "Zoom link",
        "tw": "Zoom 連結"
    },
    "#TextZoom": {
        "en": "Links will be available in near future!",
        "tw": "線上Zoom連結會於日後更新！"
    },
    ".storyHeader": {
        "en": "Our story",
        "tw": "我們的故事"
    },
    "#TextStory1": {
        "en": "Once upon a time, Ting-Wei and Hsiang-Chih both grew up in Taipei, but never met each other.",
        "tw": "很久很久以前，亭維和翔致都是台北人，但他們並沒有在台灣相遇。"
    },
    "#TextStory2": {
        "en": "Hsiang-Chih, a nature lover, loves to travel around the world. He also enjoys stargazing wherever he goes. One of his proudest moments is when he traveled to Tibet in 2014, and counted the stars with Mt. Everest. Maybe that’s how he ended up with a career in astronomy?",
        "tw": "翔致熱愛自然，喜歡旅遊及觀星。大學時，他曾經去過西藏的喜馬拉雅山基地營看星星。這或許是為什麼後來翔致走上天文研究的原因？"
    },
    "#TextStory3": {
        "en": "Ting-Wei is passionate about music. She sings and plays the piano and the guitar. She also writes her own songs. Here’s a song she wrote on the spot one day, when she found out that Hsiang-Chih got boba only for himself: <a target=\"_blank\" href=\"https://youtu.be/doepbq8mJ6A\">YouTube link</a>",
        "tw": "亭維熱愛音樂。她能自彈(鋼琴和吉他)自唱，甚至還會自己寫歌。比方說，有一次翔致只買了他自己的珍奶，亭維發現之後靈感大發寫了這首歌～這裡是<a target=\"_blank\" href=\"https://youtu.be/doepbq8mJ6A\">連結</a>！"
    },
    "#TextStory4": {
        "en": [
            "Ting-Wei and Hsiang-Chih met in Baltimore, 2016, when they were both students at Johns Hopkins University. Even though Ting-Wei thought Hsiang-Chih was cute, they didn’t become close friends right away, until they started playing badminton together! (Oh btw, Hsiang-Chih was the captain of the department badminton team in college)",
            "They later realized that they not only make good teammates on the badminton court but also great partners in life! In the summer of 2017, they became a couple! ",
        ],
        "tw": [
            "2016年，亭維和翔致在美國巴爾的摩、約翰霍普金斯大學求學時相遇。但大概要到半年之後，他們才因一起打羽球才變熟(翔致表示，還好以前有去大學系上羽球隊)。",
            "日後，他們發現，他們不僅是羽球場上的好隊友，他們還可以一起玩音樂、划船、數星星。最後，在2017年的夏天，他們成了情侶！"
        ],
    },
    "#TextStory5": {
        "en": [
            "It has been more than five years since Ting-Wei and Hsiang-Chih got together. Their daily life is full of funny moments like these.",
            "Anyway, they seem to enjoy a lot their daily life!",
        ],
        "tw": [
            "不知不覺，從在一起到現在，亭維和翔致邁入了第6年。雖然這當中好幾年受到Covid的影響，他們似乎很能在日常生活裡找到樂趣，也三不五時就讓亭維有作畫的創作題材，像是："
        ]
    },
    "#TextStory6": {
        "en": [
            "After Hsiang-Chih finished his PhD in astronomy in 2021, he moved to Princeton for his new job soon after. And then they thought it was time for the next chapter of their lives. Hsiang-Chih proposed to Ting-Wei on Feb. 12, 2022, promising that they will \"share life’s joy and face challenges together, and that they will grow old together\".",
            "",
            "Ting-Wei said yes :) ",
        ],
        "tw": [
            "2021年，翔致博士班畢業後，搬去普林斯頓工作，並決定是時候完成人生大事。2022年2月12日，翔致向亭維求婚，承諾兩人要在接下來人生的日子裡，「一起面對歡樂與困難，然後一起笑著變老」。",
            "",
            "亭維說 yes! :)"
        ],
    },
    "#TextStory7": {
        "en": "Ting-Wei and Hsiang-Chih will have their wedding on Dec. 18, 2022. Please come and celebrate this big moment of their lives! Your presence means a lot to us!!",
        "tw": "在成為情侶後第6年，亭維和翔致決定在2022年12月18日步入禮堂。誠摯地邀請您與我們一起見證這意義重大的一刻！"
    },
    ".factHeader": {
        "en": "Fun facts",
        "tw": "小趣事"
    },
    "#Facts1 .factQuestion": {
        "en": "Do these strange animals have names?",
        "tw": "這兩個生物有名字嗎？"
    },
    "#Facts1 .factAnswer": {
        "en": "Yes! Their names are Jabu (left) and Duki (right)! The actual meanings of these names remain unclear. Jabu is often mistaken as an octopus (or a creature of its kind), but Jabu is definitely not an octopus.",
        "tw": "有！他們的名字是Jabu(左)和Duki(右)。名字的意思不明。順帶一提，Jabu並不是章魚(也不是類似章魚的生物)。"
    },
    "#Facts2 .factQuestion": {
        "en": "When is the “birthday” of Jabu?",
        "tw": "Jabu 是什麼時候誕生的？"
    },
    "#Facts2 .factAnswer": {
        "en": [
            "It is currently unknown. Based on Archeological data, the earliest Jabu-related product can be dated back to ~2005, when Hsiang-Chih was in middle school. Since the aesthetics of this particular Jabu product already exhibits artistic maturity, Jabu likely existed a few years before 2005.",
            "Btw, Hsiang-Chih also uses Jabu as his signature in his credit card payment.",
        ],
        "tw": [
            "Jabu的誕生日已不可考。但根據考古資料，目前最早的Jabu相關產品(下圖)可追溯至~2005年、翔致國中的美術課作業。但這個成品已展現 Jabu 作畫的高度成熟性，因此推估Jabu應於數年前就已誕生。",
            "順帶一提，翔致現在的信用卡簽名也是用Jabu。",
        ]
    },
    "#Facts3 .factQuestion": {
        "en": "When is the “birthday” of Duki?",
        "tw": "Duki是什麼時候誕生的？"
    },
    "#Facts3 .factAnswer": {
        "en": "The concept of Duki was first formulated in 2017 by Hsiang-Chih. But the drawing of Duki has since been significantly modified (?) by Ting-Wei. In fact, Hsiang-Chih is not as good at drawing Duki due to Duki’s complexity.  ",
        "tw": "第一個Duki是翔致於2017年時畫的(下方左圖)。但現今的Duki已經過亭維大量的改良。其實，因為Duki較複雜的結構，翔致不太擅長畫Duki。"
    },
    "#Facts4 .factQuestion": {
        "en": "How was this website made?",
        "tw": "這網站是如何製作的呢？"
    },
    "#Facts4 .factAnswer": {
        "en": "This website is made by Po-Hsien (technical help), Ting-Wei (all the illustrations and animations), and Hsiang-Chih (concept and content; his drawings are mostly on papers and thus are difficult to display on the website)!",
        "tw": "這網站是由柏軒(技術支援)、亭維(所有作圖、動畫)、翔致(網站概念及內容；翔致平常都畫在紙上，難以電子化)完成！"
    },
    "#TextPhotoHeader": {
        "en": "Photo gallery",
        "tw": "(真人)相簿"
    },
    "#TextPhoto": {
        "en": "Now it is time for some real-person photos! Special thanks to our friend and the photographer, Nae-Chyun (Milks).",
        "tw": "看完Jabu跟Duki，是時候看看真人版的照片了！許多照片感謝友人乃群的拍攝。"
    },
    "#FooterMessage": {
        "en": "Love always protects, always trusts, always hopes, always perseveres. © 2022",
        "tw": "此心安處是吾鄉 © 2022"
    }
};


var makeStruct = function(names) {
    var members = names.split(" ");
    var count = names.length;

    var constructor = function() {
        for (var i = 0; i < count; i++) {
            this[members[i]] = arguments[i];
        }
    };
    return constructor;
};

var ScrollConfig = makeStruct("selector initialScale finalScale height");
var _updateConfig = [
    new ScrollConfig("#Cover", 1, 0.6),
    new ScrollConfig("#WeddingEvent0", 1, 0.6),
    new ScrollConfig("#WeddingEvent1", 1, 0.6),
    new ScrollConfig("#OurStory0", 1, 0.6),
    new ScrollConfig("#OurStory1", 1, 0.6),
    new ScrollConfig("#OurStory2", 1, 0.6),
    new ScrollConfig("#OurStory3", 1, 0.6),
    new ScrollConfig("#OurStory4", 1, 0.6),
    new ScrollConfig("#OurStory5", 1, 0.6),
    new ScrollConfig("#OurStory6", 1, 0.6),
    new ScrollConfig("#OurStory7", 1, 0.6),
    new ScrollConfig("#Facts0", 1, 0.6),
    new ScrollConfig("#Facts1", 1, 0.6),
    new ScrollConfig("#Facts2", 1, 0.6),
    new ScrollConfig("#Facts3", 1, 0.6),
    new ScrollConfig("#Facts4", 1, 0.6),
];

var animateUpdate = function() {
    window.requestAnimationFrame(_animateUpdate);
};

var _animateUpdate = function() {
    var scroll = $(window).scrollTop();
    var stickyHeight = $(".sticky-top").height();

    _updateConfig.forEach(function(config) {
        config.height = config.height || 200;
        var containerTop = $(config.selector).offset().top;
        var element = $(config.selector).find(".shrinkElement");
        var scale = config.initialScale;
        if (scroll + stickyHeight < containerTop) {
            element.css("position", "absolute");
            element.css("top", containerTop);
        } else if (scroll + stickyHeight < containerTop + config.height) {
            scale = config.initialScale + (scroll + stickyHeight - containerTop) / config.height * (config.finalScale - config.initialScale);
            element.css("position", "fixed");
            element.css("top", $(".sticky-top").height());
        } else {
            scale = config.finalScale;
            element.css("position", "absolute");
            element.css("top", containerTop + config.height);
        }
        element.css("transform", "scale(" + scale + ")");
        var invisible = $(config.selector).find(".invisible-block");
        invisible.css("height", config.height + $(element).height() + "px");
    });

    var smallest = {
        'href': undefined,
        'n': $(document).height()
    };
    $("#NavList > a").each(function(idx, button) {
        var href = $(button).attr('href');
        var diff = scroll + stickyHeight + $(window).height() / 2 - $(href).offset().top;
        if (diff < 0) return;
        if (diff < smallest.n) {
            smallest.n = diff;
            smallest.href = button;
        }
    });
    if (smallest.href === undefined) {
        $("#NavList > a").removeClass("active");
    } else if (!$(smallest.href).hasClass("active")) {
        $(smallest.href).addClass("active").siblings().removeClass("active");
    }
};

var langChange = function(lang) {
    var keys = Object.keys(langText);
    for (var i = 0; i < keys.length; i++) {
        var content = langText[keys[i]][lang];
        if (content.constructor.name === "Array") {
            content = content.join("<br>");
        }
        $(keys[i]).html(content);
    }

    myCarousel.forEach(function(item) {
        item.changeCaption(lang);
    });
    animateUpdate();
};


var modalShowImg = function(url) {
    $("#myModal").show();
    $("#imginmodal").attr("src", url);
};

var lazyloadObject = new LazyLoad({
    restore_on_error: true
});

var getCurrentLang = function() {
    if ($("#mandarinButton").hasClass("active")) {
        return "tw";
    } else if ($("#englishButton").hasClass("active")) {
        return "en";
    } else {
        console.error("Can't figure out the current language");
    }
};

class Carousel {
    // ES5 doesn't support parameter destructuring.
    // The following is the supported options for the config to pass in.
    // currentIndex,    // default index to show after initialize
    // itemsRow,        // number of items per row
    // zIndex,          // change z-index based on the position
    // grayscale,       // change grayscale based on the position
    // scale,           // change scale based on the position
    // scrollThreshold, // scroll threshold to change to next photos
    // overlapFactor,   // If set to 100, items would fit the row without overlapping.
    constructor(element, config) {
        if (element.length > 1) {
            console.error("Only one element is supported. Consider pass in the element by id");
            return;
        }

        var setUndefined = function(a, defaultValue) {
            return (a === undefined) ? defaultValue : a;
        };

        config = setUndefined(config, {});
        this.id = $(element).attr("id");
        this.element = $(element).children(".carouselPhoto");
        // Copy the first photo for css height calculation.
        var firstPhoto = $($(this.element).children()[0]).clone();
        this.element.prepend(firstPhoto);

        this.captionElement = $(element).children(".carouselCaption");

        this.currentIndex = setUndefined(config.currentIndex, 1);
        this.itemsRow = setUndefined(config.itemsRow, 5);
        this.zIndex = setUndefined(config.zIndex, true);
        this.grayscale = setUndefined(config.grayscale, true);
        this.scale = setUndefined(config.scale, true);
        this.scrollThreshold = setUndefined(config.scrollThreshold, 100);
        this.overlapFactor = setUndefined(config.overlapFactor, 100);

        this.accumulatedScroll = 0;
        this.lastTouchLoc = undefined;

        var carousel = this;
        $(this.element).children().click(function(e) {
            if (carousel.currentIndex == $(this).index()) {
                modalShowImg($(this).children("img").attr("src"));
            } else {
                carousel.adjustPosition($(this).index());
            }
        });

        $(this.element).on('wheel', function(e) {
            carousel.accumulatedScroll += e.originalEvent.deltaX + e.originalEvent.deltaY;
            if (carousel.accumulatedScroll < -carousel.scrollThreshold) {
                carousel.adjustPosition(carousel.currentIndex - 1);
                carousel.accumulatedScroll = 0;
            } else if (carousel.accumulatedScroll > carousel.scrollThreshold) {
                carousel.adjustPosition(carousel.currentIndex + 1);
                carousel.accumulatedScroll = 0;
            }
            // Don't scroll the browsing window
            return false;
        });

        $(this.element).on('touchstart', function(e) {
            if (e.originalEvent.touches.length > 1) return;
            carousel.touchLastLoc = e.originalEvent.touches[0];
        }).on('touchmove', function(e) {
            if (e.originalEvent.touches.length > 1) return;
            var touch = e.originalEvent.touches[0];
            var moveIdx = (touch.clientX - carousel.touchLastLoc.clientX) / ($(carousel.element).width() / 2);
            carousel.adjustPosition(carousel.currentIndex - moveIdx);
            carousel.touchLastLoc = e.originalEvent.touches[0];
        }).on('touchend', function(e) {
            carousel.touchLastLoc = undefined;
            carousel.adjustPosition(Math.round(carousel.currentIndex));
        });
        this.adjustPosition(this.currentIndex);
    }

    adjustPosition(index) {
        var carousel = this;
        window.requestAnimationFrame(function() {
            carousel._adjustPosition(index);
        });
    }

    _adjustPosition(index) {
        var items = $(this.element).children();
        if (index < 1 || Math.ceil(index) >= items.length) {
            return;
        }

        var itemsRow = typeof this.itemsRow === "function" ? this.itemsRow(this) : this.itemsRow;
        var halfItem = Math.floor(itemsRow / 2);
        var carousel = this;

        items.each(function(idx, item) {
            var idxDiff = idx - index;
            if (carousel.zIndex) {
                var zIndex = 500 - Math.floor(Math.abs(idxDiff) * 10);
                $(item).css("z-index", zIndex);
            }
            if (carousel.grayscale) {
                var grayscale = Math.abs(idxDiff) * 1 / (halfItem + 1);
                grayscale = (grayscale < 0) ? 0 : grayscale;
                $(item).css("filter", "grayscale(" + grayscale + ")");
            }

            var targetScale = 1;
            if (carousel.scale) {
                targetScale = 1 - Math.abs(idxDiff) * 0.1;
            }

            var cursor = "pointer";
            if (idx == index) {
                cursor = "zoom-in";
            }

            var left = 50 + 100.0 / itemsRow * idxDiff;
            // Allows image overlap with each other.

            var width = carousel.overlapFactor / carousel.itemsRow;


            if (carousel.id=="CarouselPhoto" && idx >= 4) {
                width = 1.4 * width;
            }

            $(item).css({
                "left": left + "%",
                "transform": "translateY(0%) translateX(-50%) scale(" + targetScale + ")",
                "cursor": cursor,
                "width": width + "%",
            });
        });
        this.currentIndex = index;
        this.changeCaption(getCurrentLang());
    }

    changeCaption(lang) {
        var img = $(this.element).find("img")[Math.floor(this.currentIndex)];
        var caption = $(img).attr(lang + "-data");
        $(this.captionElement).html(caption);
    }
}

var bootstrapMdWidthBreak = 768;
var myCarousel = [
    new Carousel($("#CarouselPhoto"), {
        itemsRow: function() {
            return $(window).width() < bootstrapMdWidthBreak ? 3 : 5;
        },
        overlapFactor: 200
    }),
    new Carousel($("#CarouselStory"), {
        itemsRow: function() {
            return $(window).width() < bootstrapMdWidthBreak ? 3 : 5;
        },
        overlapFactor: 200
    })
];


var initialize = function() {
    $("#mandarinButton").click(function() {
        langChange("tw");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    }).click();

    $("#englishButton").click(function() {
        langChange("en");
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    $("img.modalable").click(function() {
        modalShowImg($(this).attr("src"));
    });

    $("#myModal > .close, #myModal").click(function() {
        $("#myModal").hide();
    });

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    $(".sticky-top-blank").height($(".sticky-top").height());
    $(window).on("resize", animateUpdate);
    $(document).on("scroll", animateUpdate);
};

$(document).ready(initialize);
$(window).on("load", function() {
    // windows is ready. Force load everything
    lazyloadObject.loadAll();

    // Make the scrollbar appears again.
    $("body").css("overflow", "inherit");
    $("#Loading").fadeOut({
        "duration": 600,
        "complete": function() {
            $(this).remove();
            animateUpdate();
        }
    });
});