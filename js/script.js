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
        $('body').css('overflow','visible');
        $('.menu-list').animate({
            "left":"-20%"
        });
    }

    var image = $('#section-galeria img');
    image.on('click', function(){
        var atributo = $(this).attr('src');
        var modaImagem =  $('.modal-header img');   
        modaImagem.attr('src', atributo);     
        $('.modal').fadeIn('ease'); 
        //$('body').css('overflow','hidden');       
    });
    
    $('.fechar-modal').on('click', function(){
        $('.modal').fadeOut('ease'); 
        //$('body').css('overflow','scroll'); 
    });


 
    
})

