$(window).load(() => {
    console.log('jQuery Loaded')
    $('#myTabs a').click(function(e) {
        console.log('cuk')
        e.preventDefault()
        $(this).tab('show')
    })
});