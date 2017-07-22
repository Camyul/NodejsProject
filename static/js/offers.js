$(function() {
    fetch('/api/offers/country')
        .then((res) => {
            return res.json();
        })
        .then((offers) => {
            var names = offers.map((offer) => offer.country);

            const uniq = names.filter((el, i, arr) => {
                return names.indexOf(el) === i;
            });
            console.log(uniq);
            $("#autocompleteCountry").typeahead({ source: uniq });
        });
});
$(function() {
    fetch('/api/offers/city')
        .then((res) => {
            return res.json();
        })
        .then((offers) => {
            var names = offers.map((offer) => offer.city);

            const uniq = names.filter((el, i, arr) => {
                return names.indexOf(el) === i;
            });
            console.log(uniq);
            $("#autocompleteCity").typeahead({ source: uniq });
        });
});
