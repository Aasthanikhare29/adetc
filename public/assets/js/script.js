$(function() {
    initLazyYouTube();
    initProjectHeading();
    initNavLink();
    initSidebar();
    initSidebarDropdown();
    initCounter();
    initCustomDropdown();
    initSubmitContact();
    initSubmitNewsletter();
});

// ===============================================
// 🔹 1. Load YT API sekali saja
// ===============================================

function loadYouTubeAPI() {
    if (!window.YT && !$("script[src*='youtube.com/iframe_api']").length) {
        $("<script>", { src: "https://www.youtube.com/iframe_api" }).appendTo("head");
    }
}

// Lazy-load the YouTube API only when a video nears the viewport (CWV Phase 1).
// Pages with no video container never load any YouTube JS.
// Robust to zero-area video containers (they have no box until the iframe fills
// them) by observing a sized ancestor, plus a first-interaction fallback so the
// API always loads even if the observer never fires.
function initLazyYouTube() {
    var els = document.querySelectorAll(
        "#banner-video-background, #testimonial-video-background, .project-video-bg, .service-video-bg, .cta-highlight-video"
    );
    if (!els.length) return;

    var loaded = false;
    var io = null;
    var events = ["scroll", "pointerdown", "touchstart", "keydown"];

    function cleanup() {
        if (io) io.disconnect();
        events.forEach(function(ev) { window.removeEventListener(ev, load); });
    }
    function load() {
        if (loaded) return;
        loaded = true;
        loadYouTubeAPI();
        cleanup();
    }

    try {
        io = new IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) { load(); break; }
            }
        }, { rootMargin: "200px" });
        els.forEach(function(el) { io.observe(el.parentElement || el); });
    } catch (e) { /* no IO support -> fall back to interaction */ }

    events.forEach(function(ev) {
        window.addEventListener(ev, load, { once: true, passive: true });
    });
}

// ===============================================
// 🔹 2. Callback tunggal untuk semua video
// ===============================================

window.onYouTubeIframeAPIReady = function() {
    initBannerVideo();
    initTestimonialBannerVideo();
    initProjectVideoBackgrounds();
    initServiceVideoBackground();
    initCtaHighlightVideo();
};

// ===============================================
// 🔹 3. Banner Video
// ===============================================

function initBannerVideo() {
    const $el = $("#banner-video-background");
    if (!$el.length) return;

    new YT.Player($el.attr("id"), {
        videoId: "pVA0G01aDfk",
        playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            loop: 1,
            playlist: "pVA0G01aDfk",
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            origin: window.location.origin
        },
        events: {
            onReady: (e) => e.target.playVideo(),
            onStateChange: (e) => {
                if (e.data === YT.PlayerState.ENDED) e.target.playVideo();
            }
        }
    });
}

// ===============================================
// 🔹 4. Testimonial Banner Video
// ===============================================

function initTestimonialBannerVideo() {
    const $el = $("#testimonial-video-background");
    if (!$el.length) return;

    new YT.Player($el.attr("id"), {
        videoId: "6J1XlyCxtPw",
        playerVars: {
            autoplay: 1,
            controls: 0,
            mute: 1,
            loop: 1,
            playlist: "6J1XlyCxtPw",
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            origin: window.location.origin
        },
        events: {
            onReady: (e) => e.target.playVideo(),
            onStateChange: (e) => {
                if (e.data === YT.PlayerState.ENDED) e.target.playVideo();
            }
        }
    });
}

// ===============================================
// 🔹 5. Project Video Backgrounds (multiple)
// ===============================================

function initProjectVideoBackgrounds() {
    const $videos = $(".project-video-bg");
    if (!$videos.length) return;

    $videos.each(function() {
        const $el = $(this);
        const id = $el.attr("id");
        const videoId = $el.data("video-id");

        new YT.Player(id, {
            videoId,
            playerVars: {
                autoplay: 1,
                mute: 1,
                controls: 0,
                loop: 1,
                playlist: videoId,
                playsinline: 1,
                modestbranding: 1,
                rel: 0,
                iv_load_policy: 3,
                origin: window.location.origin
            },
            events: {
                onReady: (e) => {
                    e.target.mute();
                    e.target.playVideo();
                }
            }
        });
    });
}

// ===============================================
// 🔹 6. Service Video Backgrounds (multiple)
// ===============================================

function initServiceVideoBackground() {
    const $videos = $(".service-video-bg");
    if (!$videos.length) return;

    $videos.each(function(i) {
        const $el = $(this);
        if (!$el.attr("id")) $el.attr("id", "service-video-" + i);

        const videoId = $el.data("video-id");
        const start = parseFloat($el.data("start")) || 0;
        const end = parseFloat($el.data("end")) || 0;
        const $container = $el.closest(".service-content-container");

        const player = new YT.Player($el.attr("id"), {
            videoId,
            playerVars: {
                autoplay: 1,
                mute: 1,
                controls: 0,
                playsinline: 1,
                modestbranding: 1,
                rel: 0,
                iv_load_policy: 3,
                start,
                end,
                origin: window.location.origin
            },
            events: {
                onReady: (e) => {
                    e.target.mute();
                    e.target.seekTo(start);
                    e.target.playVideo();
                },
                onStateChange: (e) => {
                    if (end > 0 && e.data === YT.PlayerState.ENDED) {
                        e.target.seekTo(start);
                        e.target.playVideo();
                    }
                }
            }
        });

        if ($container.length) {
            $container[0].ytplayer = player;
            $container[0].serviceEl = $el[0];
        }
    });
}

//  SUPPORT: Pause when accordion closed, and play when opened

function ytControl(iframe, command) {
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: command, args: [] }), "https://www.youtube.com");
    }
}

$(document).on("shown.bs.collapse", function(e) {
    const vid = $(e.target).find(".service-video-bg")[0];
    if (vid) ytControl(vid, "playVideo");
});

$(document).on("hidden.bs.collapse", function(e) {
    const vid = $(e.target).find(".service-video-bg")[0];
    if (vid) ytControl(vid, "pauseVideo");
});

// ===============================================
// 🔹 7. Utility — Resize video container
// ===============================================

function resizeVideo(containerSelector, playerInstance) {
const container = document.querySelector(containerSelector);
if (!container || !playerInstance) return;

const aspect = 16 / 9;
const width = container.offsetWidth;
const height = container.offsetHeight;
let newWidth, newHeight;

if (width / height > aspect) {
    newWidth = width;
    newHeight = width / aspect;
} else {
    newWidth = height * aspect;
    newHeight = height;
}

const iframe = playerInstance.getIframe();
iframe.width = newWidth;
iframe.height = newHeight;
}

// ===============================================
// 🔹 8. CTA Highlight Video (multiple)
// ===============================================

function initCtaHighlightVideo() {
    const $videos = $(".cta-highlight-video");
    if (!$videos.length) return;

    $videos.each(function(i) {
        const $el = $(this);

        if (!$el.attr("id")) $el.attr("id", "cta-highlight-video-" + i);

        const videoId = $el.data("video-id");
        const start = parseFloat($el.data("start")) || 0;
        const end = parseFloat($el.data("end")) || 0;

        const player = new YT.Player($el.attr("id"), {
            videoId,
            playerVars: {
                autoplay: 1,
                mute: 1,
                controls: 0,
                playsinline: 1,
                modestbranding: 1,
                rel: 0,
                iv_load_policy: 3,
                start,
                end,
                loop: end === 0 ? 1 : 0,
                playlist: videoId,
                origin: window.location.origin
            },
            events: {
                onReady: (e) => {
                    e.target.mute();
                    e.target.seekTo(start);
                    e.target.playVideo();
                },
                onStateChange: (e) => {
                    if (end > 0 && e.data === YT.PlayerState.ENDED) {
                        e.target.seekTo(start);
                        e.target.playVideo();
                    }
                }
            }
        });

        $el[0].ytplayer = player;
    });
}

// ===============================================
// 🔹 9. Heading Project Animations
// ===============================================


function initProjectHeading() {
    const $heading = $(".project-section-heading");
    if (!$heading.length) return;

    let lastScrollTop = $(window).scrollTop();

    $(window).on("scroll", function () {
        const currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            $heading.addClass("is-hidden");
        } else {
            $heading.removeClass("is-hidden");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}


// ===============================================
// 🔹 10. Sidebar
// ===============================================

function initSidebar() {
    const $menu = $(".nav-btn");
    const $close = $(".close-btn");
    const $overlay = $(".sidebar-overlay");
    const $sidebar = $(".sidebar");

    $menu.on("click", function() {
        $overlay.addClass("active");
        setTimeout(() => $sidebar.addClass("active"), 200);
    });

    $close.on("click", closeSidebar);
    $overlay.on("click", closeSidebar);

    function closeSidebar() {
        $sidebar.removeClass("active");
        setTimeout(() => $overlay.removeClass("active"), 200);
    }
}


function initSidebarDropdown() {
    const $dropdownButtons = $(".sidebar-dropdown-btn");

    $dropdownButtons.each(function() {
        $(this).on("click", function() {
            const $dropdownMenu = $(this).parent().next(".sidebar-dropdown-menu");
            const isOpen = $dropdownMenu.hasClass("active");

            $(".sidebar-dropdown-menu").not($dropdownMenu).removeClass("active");

            $dropdownMenu.toggleClass("active", !isOpen);
        });
    });
}

// ===============================================
// 🔹 11. Counter Animation
// ===============================================

function initCounter() {
    var $counters = $(".counter");

    function formatCount(num) {
        if (num >= 1_000_000) 
            return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M";
        if (num >= 1_000) 
            return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + "K";
        return num;
    }

    function updateCount($counter) {
        var target = $counter.data("target");
        var current = $counter.data("current") || 0;

        var duration = 1500;
        var steps = 30;
        var increment = Math.max(1, Math.ceil(target / steps));

        var nextCount = Math.min(target, current + increment);
        $counter.data("current", nextCount);

        $counter.text(formatCount(nextCount));

        if (nextCount < target) {
            setTimeout(function () {
                updateCount($counter);
            }, duration / steps);
        }
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting && !$(entry.target).data("counted")) {
                var $counter = $(entry.target);
                $counter.data("counted", true);
                updateCount($counter);
            }
        });
    }, { threshold: 0.5 });

    $counters.each(function () {
        var $counter = $(this);

        $counter.data("counted", false);
        $counter.data("current", 0);

        observer.observe(this);
    });
}

// ===============================================
// 🔹 12. Nav Link
// ===============================================

function initNavLink() {
    const currentUrl = window.location.href;
    $(".navbar-nav .nav-link").each(function() {
        if (this.href === currentUrl) {
            $(this).addClass("active");
        }
    });
    $(".navbar-nav .dropdown-menu .dropdown-item").each(function() {
        if (this.href === currentUrl) {
            $(this).addClass("active");
            $(this).closest(".dropdown").find(".nav-link.dropdown-toggle").addClass("active");
        }
    });
}

// ===============================================
// 🔹 5. Custom Dropdown
// ===============================================

function initCustomDropdown() {
    $('.dropdown-select').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const $container = $(this).closest('.dropdown-container');
        const $caretIcon = $(this).find('.fa-caret-down');
        $('.dropdown-container').not($container).removeClass('active');
        $('.fa-caret-down').not($caretIcon).removeClass('rotate');
        $container.toggleClass('active');
        $caretIcon.toggleClass('rotate');
    });

    $('.dropdown-option').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const $option = $(this);
        const $container = $option.closest('.dropdown-container');
        const $selectedText = $container.find('.selected-text');
        const $hiddenInput = $container.find('.dropdown-value');
        const $allOptions = $container.find('.dropdown-option');
        const selectedValue = $option.data('value');
        const selectedText = $option.text().trim();
        $selectedText.text(selectedText);
        $selectedText.addClass('has-value');
        $hiddenInput.val(selectedValue);
        $allOptions.removeClass('selected');
        $option.addClass('selected');
        $container.removeClass('active');
        $container.find('.fa-caret-down').removeClass('rotate');
        $hiddenInput.trigger('change');
        console.log('Selected:', selectedValue, selectedText);
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown-container').length) {
            $('.dropdown-container').removeClass('active');
            $('.fa-caret-down').removeClass('rotate');
        }
    });

    $('.dropdown-select').on('keydown', function(e) {
        const $container = $(this).closest('.dropdown-container');
        switch(e.key) {
            case 'Enter':
            case ' ':
                e.preventDefault();
                $(this).click();
                break;
            case 'Escape':
                $container.removeClass('active');
                $container.find('.fa-caret-down').removeClass('rotate');
                break;
            case 'ArrowDown':
            case 'ArrowUp':
                e.preventDefault();
                if (!$container.hasClass('active')) {
                    $container.addClass('active');
                    $container.find('.fa-caret-down').addClass('rotate');
                }
                const $options = $container.find('.dropdown-option');
                const $focused = $options.filter(':focus');
                let nextIndex;
                if ($focused.length === 0) {
                    nextIndex = e.key === 'ArrowDown' ? 0 : $options.length - 1;
                } else {
                    const currentIndex = $options.index($focused);
                    if (e.key === 'ArrowDown') {
                        nextIndex = currentIndex + 1 >= $options.length ? 0 : currentIndex + 1;
                    } else {
                        nextIndex = currentIndex - 1 < 0 ? $options.length - 1 : currentIndex - 1;
                    }
                }
                $options.eq(nextIndex).focus();
                break;
        }
    });

    $('.dropdown-option').attr('tabindex', '0');

    $('.dropdown-option').on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(this).click();
        }
    });

    window.resetDropdown = function(containerId) {
        const $container = $('#' + containerId);
        if ($container.length) {
            $container.find('.selected-text').text('Project Type').removeClass('has-value');
            $container.find('.dropdown-value').val('');
            $container.find('.dropdown-option').removeClass('selected');
            $container.removeClass('active');
            $container.find('.fa-caret-down').removeClass('rotate');
        }
    };

    window.getDropdownValue = function(containerId) {
        const $container = $('#' + containerId);
        return $container.find('.dropdown-value').val();
    };

    window.setDropdownValue = function(containerId, value) {
        const $container = $('#' + containerId);
        const $option = $container.find('.dropdown-option[data-value="' + value + '"]');
        if ($option.length) {
            $option.click();
        }
    };

    const testimonialRow = document.getElementById('testimonialRow');
    const testimonialPrev = document.querySelector('.testimonial-scroll-prev');
    const testimonialNext = document.querySelector('.testimonial-scroll-next');
    if (testimonialRow && testimonialPrev && testimonialNext) {
        const testimonialScrollAmount = function() {
            const card = testimonialRow.querySelector('.card-testimonial');
            return card ? card.getBoundingClientRect().width + 24 : 404;
        };
        testimonialPrev.addEventListener('click', function() {
            testimonialRow.scrollBy({ left: -testimonialScrollAmount(), behavior: 'smooth' });
        });
        testimonialNext.addEventListener('click', function() {
            testimonialRow.scrollBy({ left: testimonialScrollAmount(), behavior: 'smooth' });
        });
        const testimonialToggle = function() {
            testimonialPrev.style.visibility = testimonialRow.scrollLeft > 0 ? 'visible' : 'hidden';
            testimonialNext.style.visibility = 'visible';
        };
        testimonialToggle();
        testimonialRow.addEventListener('scroll', testimonialToggle);
        window.addEventListener('resize', testimonialToggle);

        const testimonialAutoAdvance = function() {
            const half = testimonialRow.scrollWidth / 2;
            if (testimonialRow.scrollLeft >= half) {
                testimonialRow.scrollLeft = testimonialRow.scrollLeft - half;
            }
            testimonialRow.scrollBy({ left: testimonialScrollAmount(), behavior: 'smooth' });
        };
        let testimonialAutoTimer = setInterval(testimonialAutoAdvance, 6000);
        const testimonialCarousel = testimonialRow.parentElement;
        testimonialCarousel.addEventListener('mouseenter', function() { clearInterval(testimonialAutoTimer); });
        testimonialCarousel.addEventListener('mouseleave', function() {
            clearInterval(testimonialAutoTimer);
            testimonialAutoTimer = setInterval(testimonialAutoAdvance, 6000);
        });
    }
}