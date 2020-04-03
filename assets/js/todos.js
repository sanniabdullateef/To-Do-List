// checking off your list
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// making the delete button works on the list after being done

$('ul').on('click','span', function(evet){
    $(this).parent().fadeOut(3000, function(){
        $(this).remove()
    })
    event.stopPropagation();
});

// To listen to keypress for input value and add to the list

$('input').keypress(function(event){
    if(event.which === 13 ){
        // Grabbing new element to ul in li
        var todoText = $(this).val()
        $(this).val();
        $('ul').append('<li> <span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>')
        input.reset();
    }
});

$('.fa-plus').click(function(){
    $('input').fadeToggle();
});