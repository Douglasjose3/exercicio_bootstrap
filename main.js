$(document).ready(function() {
    $('#tel').mask('(000) 0 0000-0000', {placeholder: "( __ )  _ ____ - ____"});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                required: true, email: true
            }
        }
    })
})