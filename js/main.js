$(document).ready(function () {
    jQuery.support.cors = true;
    var proxy = "https://cors-anywhere.herokuapp.com/";
    var url = "https://api.hgbrasil.com/finance";
    var full_url = proxy+url;
    console.log(full_url)

    fetch(full_url)
        .then(function (response) {
            return response.json()
        })
        .then(function(obj){
            $('.dolar').html("R$ " + obj.results.currencies.USD.buy);
        })
});