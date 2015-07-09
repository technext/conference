/*
 * Change Navbar color while scrolling
*/

var menu = $('#site-nav');
var origOffsetY = menu.offset().top;

function navbarAnimation() {
    if ($(window).scrollTop() > origOffsetY) {
        $('#site-nav').addClass('navbar-solid');
    } else {
        $('#site-nav').removeClass('navbar-solid');
    }

}

$(window).scroll(function() {
    navbarAnimation();
});

/*
 * Isotop for Photos
*/

$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
    }
})

$('#registration-form').submit(function(e){
    e.preventDefault();
    
    var postForm = { //Fetch form data
            'fname'     : $('#registration-form #fname').val(),
            'lname'     : $('#registration-form #lname').val(),
            'email'     : $('#registration-form #email').val(),
            'cell'      : $('#registration-form #cell').val(),
            'address'   : $('#registration-form #address').val(),
            'zip'       : $('#registration-form #zip').val(),
            'city'      : $('#registration-form #city').val(),
            'program'   : $('#registration-form #program').val()
    };

    $.ajax({
            type      : 'POST',
            url       : './assets/php/contact.php',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            if (data.success) {
                                $('#registration-msg .alert').html("Registration Successful");
                                $('#registration-msg .alert').removeClass("alert-danger");
                                $('#registration-msg .alert').addClass("alert-success");
                                $('#registration-msg').show();
                            }
                            else
                            {
                                $('#registration-msg .alert').html("Registration Failed");
                                $('#registration-msg .alert').removeClass("alert-success");
                                $('#registration-msg .alert').addClass("alert-danger");
                                $('#registration-msg').show();
                            }
                        }
        });
});

/*
 * SmoothScroll
*/

smoothScroll.init();