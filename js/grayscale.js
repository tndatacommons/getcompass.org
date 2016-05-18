/*!
 *
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 *
 * NOTE: this file has been modified from the original.
 *
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    if($("#logo").is(":hidden")) {
        $("#logo").fadeIn();
    } else if(window.scrollY === 0) {
        $("#logo").fadeOut();
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    // Hide the logo initially.
    $("#logo").hide();
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});


/*
 * GA event tracking for download button clicks.
 *
 * Requires that the <a> element on each page include the following:
 *
 *  id="download-link"
 *  data-value="1"  <-- must be an integer (default = 1)
 *
 */
function handleOutboundLinkClicks(event) {
  ga('send', 'event', {
    eventCategory: 'Download',
    eventAction: 'click',
    eventLabel: event.target.href,
    eventValue: parseInt($(this).data("value")) || 1,
    transport: "beacon",
  });
}
$(document).ready(function() {
  $("#download-link").click(handleOutboundLinkClicks);
});
