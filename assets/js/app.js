$(function () {

  $(".close-sidebar").click(function () {
    $(".sidebar").removeClass("active");
    $(".toggle-sidebar").removeClass("active");
    $(this).fadeOut();
  });

  $(".menu li a").click(function (e) {
    e.preventDefault();
    $(".menu li a").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 40
      },
      200
    );
  });

  $(".menu-nav").click(function (e) {
    e.preventDefault();
    $(".menu-nav").removeClass("active");
    $(this).addClass("active");

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 40
      },
      200
    );
  });

  $(window).on("scroll", function () {
    var windowScrollTop = $(window).scrollTop();

    if (windowScrollTop > 0) {
      $(".nav-bar").addClass("fixed");
      $(".top-toggle").fadeIn();
    } else {
      $(".nav-bar").removeClass("fixed");
      $(".top-toggle").fadeOut();
    }

    if ($("#skill").offset().top < windowScrollTop + 100) {
      $(".progress-skill").each(function () {
        $(this)
          .find(".progress-bar")
          .css("width", $(this).data("progress"));
      });
    }
  });

  if ($(window).scrollTop() > 0) {
    $(".nav-bar").addClass("fixed");
    $(".top-toggle").fadeIn();
  } else {
    $(".nav-bar").removeClass("fixed");
    $(".top-toggle").fadeOut();
  }

  if ($("#skill").offset().top < $(window).scrollTop() + 100) {
    $(".progress-skill").each(function () {
      $(this)
        .find(".progress-bar")
        .css("width", $(this).data("progress"));
    });
  }

  $(".toggle-sidebar").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".sidebar").removeClass("active");
      $(".close-sidebar").fadeOut();
    } else {
      $(this).addClass("active");
      $(".sidebar").addClass("active");
      $(".close-sidebar").fadeIn();
    }
  });

  $(".top-toggle").click(function () {
    $("html, body").animate({
        scrollTop: 0
      },
      200
    );
  });

  var $container = $(".portfolio-inner").isotope({
    itemSelector: ".card",
    filter: "*",
    percentPosition: true,
    layoutMode: "masonry"
  });

  $container.imagesLoaded().progress(function () {
    $container.isotope("layout");
  });

  $(".portfolio-toggle").on("click", "button", function () {
    var filter = $(this).data("filter");

    $container.isotope({
      filter: filter
    });

    $(this)
      .parent()
      .find("button")
      .removeClass("active");
    $(this).addClass("active");
  });

  $('body').on('click', ' .full-view-image', function () {
    $('.full-view-image').removeClass('active');
    $('.full-view-image').find('img').attr('src', '');
  });

  $('[data-toggle="full-view-image"]').css({
    cursor: "pointer",
  });

  $('body').on('click', '[data-toggle="full-view-image"]', function () {
    $('.full-view-image').addClass('active');
    $('.full-view-image').find('img').attr('src', $(this).attr('src'));
  });
});