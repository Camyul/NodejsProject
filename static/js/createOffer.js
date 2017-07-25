$(window).load(function() {
    toastr.info('Toastr and jquery are armed and ready');

    $('#form').submit(function(event) {

        event.preventDefault(); // prevent the default submit

        // code goes here

        $(this).unbind('submit').submit(); // continue the submit unbind preventDefault
    })
});