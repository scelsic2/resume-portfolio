const me1 = document.querySelector('#me1')
const me2 = document.querySelector('#me2')

$(me1).hover (
    function(){ $(this).addClass('hide-me') },
    function(){ $(this).removeClass('hide-me') }
)