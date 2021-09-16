//add X button
$(document).ready(function() {
    $('#newSkill').click(function() {
        var myList = $('#input').val();
        $('#list').append('<li>'+'<button id="remove">'+'X'+'</button>'+myList+'</li>');
    });
});

$(document).ready(function() {
    $('#newSkill').click(function() {
        $('#input').val('');
    })
});

// removes when clicking X
$(document).on('click','li', function(){
    $(this).remove();    
  });