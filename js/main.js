function consultaCep(){
    $(".cep").hide();
    $(".barra-progresso").show();
    
    setTimeout(function() {
        $(".cep").show();
        var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response){
            $("#titulo_cep").html("CEP: " + response.cep);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $(".cep").show();
        }
    });

      }, 700);

    setTimeout(function() {
        $(".barra-progresso").hide();
      }, 500);
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});