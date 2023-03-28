$(document).ready(function () {
    $('.tarefa').click(function () {
        $(this).toggleClass('tarefa-feita');
    });

    $('#meu-formulario').submit(function (event) {
        // Previne o envio padrão do formulário
        event.preventDefault();

        // Obtém o valor digitado no campo "nova-tarefa"
        const novaTarefa = $('#nova-tarefa').val();

        // Cria um novo item na lista com a nova tarefa
        const novoItem = $('<li>').text(novaTarefa);
        $('#lista').append(novoItem);

        // Limpa o campo "nova-tarefa" após a adição da tarefa
        $('#nova-tarefa').val('');

        // Ao clicar na nova tarefa, ela é marcada como feita
        novoItem.click(function () {
            $(this).toggleClass('tarefa-feita');
        }
        );
    });

    // Ao clicar no botão "limpar", a lista é limpa
    $('#limpar').click(function () {
        $('#lista').empty();
    } );

});
