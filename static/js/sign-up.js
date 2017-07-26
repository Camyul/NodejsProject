$(window).load(function() {
    let emailMatcher = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    $('#form').submit(function(event) {

        event.preventDefault(); // prevent the default submit

        let name = $('#name').val();
        let email = $('#email').val();
        let username = $('#username').val();
        let password = $('#password').val();
        let confirm = $('#confirm').val();

        let nameOk = false;
        let emailOk = false;
        let passwordOk = false;
        let confirmOk = false;
        let usernameOk = false;

        if (name.length < 2) {
            toastr.error('Name too short! Must be at least 2 characters long.');
        } else {
            nameOk = true;
        }

        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);

        if (email.match(emailMatcher)) {
            emailOk = true;
        } else {
            toastr.error('Invalid email!')
        }

        if (username.length < 6) {
            toastr.error('Username must be at least 6 characters long!')
        } else {
            usernameOk = true;
        }

        if (password.length < 8) {
            toastr.error('Password must be at least 8 characters long!')
        } else {
            passwordOk = true;
        }

        if (confirm === password) {
            confirmOk = true;
        } else {
            toastr.error('Passwords don\'t match!');
        }

        if (nameOk && usernameOk && emailOk && passwordOk && confirmOk) {
            $(this).unbind('submit').submit(); // continue the submit unbind preventDefault
        } else {
            toastr.warning('Please make sure to fill all fields correctly before resubmitting.')
        }
    })
});