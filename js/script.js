$(document).ready(function(){
    new WOW().init();

    var botao = $('#butao_menu');
    var fechar = $('#fechar');

    botao.on('click', function(){
    abrirMenu();    
    });

    fechar.on('click', function(){
    fecharMenu();
    });

    $('.fundo-menu').on('click', function(){
        fecharMenu();
    });

    function abrirMenu(){
        $('.fundo-menu').fadeIn('slow');
        $('body').css('overflow','hidden');
        $('.menu-list').animate({
            "left":"0"
        });   
    }

    function fecharMenu(){
        $('.fundo-menu').fadeOut('slow'); 
        $('body').css('overflow','scroll');
        $('.menu-list').animate({
            "left":"-20%"
        });
    }
})

