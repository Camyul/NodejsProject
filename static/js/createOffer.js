$(window).load(function() {
    toastr.info('Toastr and jquery are armed and ready');

    $('#form').submit(function(event) {

        event.preventDefault(); // prevent the default submit

        const country = $('#country').val();
        const city = $('#city').val();
        const price = $('#price').val();
        const duration = $('#duration').val();

        let countryOk = false;
        let cityOk = false;
        let priceOk = false;
        let durationOk = false


        $(this).unbind('submit').submit(); // continue the submit unbind preventDefault
    })
});