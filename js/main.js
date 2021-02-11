$(document).ready(() => {
    $('#run_question1').click(() => {
        $('#css_question1').text($('#code_question1').val());
    });
    $('#run_question2').click(() => {
        $('#btn_extenso').off("click");
        eval($('#code_question2').val());
    });
    $('#run_question3').click(() => {
        eval($('#code_question3').val());
    });

    $('#btn_extenso').click(() => {
        let digit = parseInt($("#digit").val());
        if (digit === NaN) {
            $("#extenso").text('Não é um número');
        } else {
            if (digit === '0') {
                $("#extenso").text('Zero');
            } else if (digit === '1') {
                $("#extenso").text('Um');
            } else if (digit === '2') {
                $("#extenso").text('Dois');
            } else if (digit === '3') {
                $("#extenso").text('Três');
            } else if (digit === '4') {
                $("#extenso").text('Quatro');
            } else if (digit === '5') {
                $("#extenso").text('Cinco');
            } else if (digit === '6') {
                $("#extenso").text('Seis');
            } else if (digit === '7') {
                $("#extenso").text('Sete');
            } else if (digit === '8') {
                $("#extenso").text('Oito');
            } else if (digit === '9') {
                $("#extenso").text('Nove');
            }   
        }
    });
});



