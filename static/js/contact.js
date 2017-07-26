$(window).load(function() {
    let emailMatcher = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let numberMatcher = /^[+]?[0-9]+/;

    $('#form').submit(function(event) {

        event.preventDefault(); // prevent the default submit

        let name = $('#name').val();
        let email = $('#email').val();
        let number = $('#number').val();
        let message = $('#message').val();

        let nameOk = false;
        let emailOk = false;
        let numberOk = false;
        let messageOk = false;

        if (name.length < 2) {
            toastr.error('Name too short! Must be at least 2 characters long.');
        } else {
            nameOk = true;
        }

        if (email.match(emailMatcher)) {
            emailOk = true;
        } else {
            toastr.error('Invalid email!')
        }

        if (!(number.match(numberMatcher))) {
            toastr.error('Invalid number')
        } else {
            numberOk = true;
        }

        if (message.length < 90) {
            toastr.error('Message must be at least 90 characters long.')
        } else {
            messageOk = true;
        }

        if (nameOk && messageOk && emailOk && numberOk) {
            $(this).unbind('submit').submit(); // continue the submit unbind preventDefault
        } else {
            toastr.warning('Please make sure to fill all fields correctly before resubmitting.')
        }
    })
});