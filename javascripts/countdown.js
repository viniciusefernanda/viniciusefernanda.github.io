(function() {
    function update() {
        var start = new Date(2006, 04, 20)
        ts = countdown(start);

        $('.years').text(ts.years);
        $('.days').text(ts.days);
        $('.hours').text(ts.hours);
        $('.minutes').text(ts.minutes);
        $('.seconds').text(ts.seconds);
    }
    window.setInterval(function() {
        update();
    }, 1000);
})();
