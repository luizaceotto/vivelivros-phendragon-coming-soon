// JavaScript Document

// contact form
$(document).ready(function() {
	$('form#form').submit(function() {
	$('form#form .error').remove();
	var hasError = false;
	$('.requiredField').each(function() {
	if(jQuery.trim($(this).val()) == '') {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">Campo obrigatório</span>');
    $(this).addClass('inputError');
    hasError = true;
    } else if($(this).hasClass('email')) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(jQuery.trim($(this).val()))) {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">Endereço de email inválido</span>');
    $(this).addClass('inputError');
    hasError = true;
    }
    }
    });
    if(!hasError) {
    $('form#form input.submit').fadeOut('normal', function() {
    $(this).parent().append('');
    });
    var formInput = $(this).serialize();
    $.post($(this).attr('action'),formInput, function(data){
    $('form#form').slideUp("fast", function() {
    $(this).before('<div class="success">Seu email foi enviado com sucesso!</div>');
    });
    });
    }
    return false;
    });
});