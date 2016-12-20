$("#head-title").typed({
	strings: ["burgery^1000", "frytki^1000" , "tortille^1000","pizze^1000"],
	typeSpeed: 50,
	loop: true,
	startDelay: 100
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
