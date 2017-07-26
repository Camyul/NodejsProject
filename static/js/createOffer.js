$(window).load(function() {
    toastr.info('Toastr and jquery are armed and ready');

    $('#form').submit(function(event) {
        event.preventDefault(); // prevent the default submit

        const availableCountries = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'The Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City', ]

        let country = $('#country').val();
        let city = $('#city').val();
        const price = $('#price').val();
        const duration = $('#duration').val();

        country = country.toLowerCase();
        country = country.charAt(0).toUpperCase() + country.slice(1);
        city = city.toLowerCase();
        city = city.charAt(0).toUpperCase() + city.slice(1);

        $('#country').val(country);
        $('#city').val(city);

        let countryOk = false;
        let cityOk = false;
        let priceOk = false;
        let durationOk = false;

        if (availableCountries.includes(country)) {
            countryOk = true;
        } else {
            toastr.error('Not a valid European country!')
        }

        if (city.length < 2) {
            toastr.error('City name too short.')
        } else {
            cityOk = true;
        }

        if (isNaN(price)) {
            toastr.error('Invalid price! Make sure you have entered a valid number');
        } else {
            priceOk = true;
        }

        if (isNaN(duration)) {
            toastr.error('Invalid duration. Make sure you have entered a valid number.')
        } else {
            durationOk = true;
        }

        if (countryOk && cityOk && priceOk && durationOk) {
            $(this).unbind('submit').submit(); // continue the submit unbind preventDefault
        } else {
            toastr.warning('Please correct all the errors before resubmitting.')
        }
    })
});