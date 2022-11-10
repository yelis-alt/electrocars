$('.weather__temp-number').keyup(function() {
    if ($('.weather__temp-number').val() <= -20)
        {
            $('.spending__temp-number').val(20*1.3);
        }

    if (($('.weather__temp-number').val() <= -10) && ($('.weather__temp-number').val() > -20))
        {
            $('.spending__temp-number').val(20*1.2);
        }

        if (($('.weather__temp-number').val() <= 0) && ($('.weather__temp-number').val() > -10))
        {
            $('.spending__temp-number').val(20*1.1);
        }
    if (($('.weather__temp-number').val() <= 10) && ($('.weather__temp-number').val() > 0))
        {
            $('.spending__temp-number').val(20*1.05);
        }
    if (($('.weather__temp-number').val() > 10))
        {
            $('.spending__temp-number').val(20);
        }

});