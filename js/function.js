$(function(){

    abrirJanela();
    clickFechar();

    function abrirJanela() {
         $('.icon-mobile').click(function(e){
            e.stopPropagation();
           $('.modal').fadeIn();
        })
    }

    function clickFechar() {
        var el = $('body,.btn-fechar');
        el.click(function(){
            $('.modal').fadeOut();
        })
    }

    $('.modal').click(function(e){
        e.stopPropagation();
    })
})