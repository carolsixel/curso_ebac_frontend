$(document).ready(function(){

    $('#task-list').empty();

    $('form').on('submit', function(e) {
        e.preventDefault();

        const newTask = $('#new_task').val();

        if (newTask) {
        const newItem = $('<li> </li>').text(newTask);
        $('#task-list').append(newItem);
        $('#new_task').val('');
        $('#task-list').removeClass('no-items');
        }

        $('ul').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through');
            $(this).css('color', '#2be192');
        });

        $('ul').on('dblclick', 'li', function() {
            $(this).css('text-decoration', 'none');
            $(this).css('color', 'black');
        });

        $('#cancel-button').on('click', function() {
            $('li').remove();
        });

    });
});