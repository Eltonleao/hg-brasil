$(document).ready(function(){
    var url = "https://api.hgbrasil.com/finance";
    $('.atualizar-cotacao').click(function(){
        console.log('clicked');
        $.ajax({
            method: "GET",
            url: url,
          })
            .done(function( data ) {
                console.log(data)
            });
    });
});