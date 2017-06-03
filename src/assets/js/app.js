$(document).foundation();
$('[data-toggle-dia]').click( function (ev){
    const panel = $(this).data('toggleDia');
    $('#lineup-tabs').foundation('selectTab',panel);
});

const $offCanvas = $('#offCanvas');
$offCanvas.find('li').click(function (ev){
    $offCanvas.foundation('close');
});

function animateInViernes(){
    var $animation1 = $("#guns-uno").data("animation");
    var $animation2 = $("#guns-dos").data("animation");
    var $animation3 = $("#guns-tres").data("animation");
    var $animation4 = $("#guns-cuatro").data("animation");
    Foundation.Motion.animateIn($("#guns-uno"), $animation1);
    Foundation.Motion.animateIn($("#guns-dos"), $animation2);
    Foundation.Motion.animateIn($("#guns-tres"), $animation3);
    Foundation.Motion.animateIn($("#guns-cuatro"), $animation4);
}

function animateInSabado(){
    var $animation1 = $("#beatles-uno").data("animation");
    var $animation2 = $("#beatles-dos").data("animation");
    var $animation3 = $("#beatles-tres").data("animation");
    var $animation4 = $("#beatles-cuatro").data("animation");
    Foundation.Motion.animateIn($("#beatles-uno"), $animation1);
    Foundation.Motion.animateIn($("#beatles-dos"), $animation2);
    Foundation.Motion.animateIn($("#beatles-tres"), $animation3);
    Foundation.Motion.animateIn($("#beatles-cuatro"), $animation4);
}

function animateInDomingo(){
    var $animation1 = $("#queen-uno").data("animation");
    var $animation2 = $("#queen-dos").data("animation");
    var $animation3 = $("#queen-tres").data("animation");
    var $animation4 = $("#queen-cuatro").data("animation");
    Foundation.Motion.animateIn($("#queen-uno"), $animation1);
    Foundation.Motion.animateIn($("#queen-dos"), $animation2);
    Foundation.Motion.animateIn($("#queen-tres"), $animation3);
    Foundation.Motion.animateIn($("#queen-cuatro"), $animation4);
}

const $tabViernes = $('#viernes, #viernes-sticky, #viernes-canvas');
$tabViernes.click(function(eve){
    animateInViernes();
});

const $tabSabado = $('#sabado, #sabado-sticky, #sabado-canvas');
$tabSabado.click(function(eve){
    animateInSabado();
});

const $tabDomingo = $('#domingo, #domingo-sticky, #domingo-canvas');
$tabDomingo.click(function(eve){
    animateInDomingo();
});

animateInViernes();

