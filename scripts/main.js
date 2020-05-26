$(document).ready(function() {

  // Set the event handler focus (#email-user)

  $('#email-user').focus(function(){
    $(".form").css({
      borderTop: "2px solid #781241",
      borderBottom: "2px solid #781241"
    });
  });

  // Validation email

  $('.form-button').click(function(event){

    var str = $('.form input[name=email]').val().trim();
    var correct = str.length >= 6
    && str.includes('@')
    && str.includes('.');

    if(!correct){
      event.preventDefault();
      $(".form").css({
        borderTop: "2px solid #ff0000",
        borderBottom: "2px solid #ff0000"
      });
    } else{
    // Signup form submission

    $('.form').submit(function(event) {
      event.preventDefault();
      // Get data from form and store it
      var pfbSignupEMAIL = $('#email-user').val();
      $('.form input[name=email]').val("");
      // Create JSON variable of retreived data
      var pfbSignupData = {
        'emailname': pfbSignupEMAIL
      };

      // Send data to PHP script via .ajax() of jQuery
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'mailchimp-signup.php',
        data: pfbSignupData,
        success: function (results) {
          console.log('success', results);
        },
        error: function (results) {
          console.log('error', results);
        }
      });
    }); //.form-button.click

    // $('.form input[name=email]').val("");

    //border form - green
    $(".form").css({
      borderTop: "2px solid green",
      borderBottom: "2px solid green"
    });

    //border form - gray
    setTimeout(
      function(){
        $(".form").css({
         borderTop: "2px solid #666666",
         borderBottom: "2px solid #666666"
       });
      }, 1500);
    }
  })

   //Return border - default

  $(function(){
    $(document).click(function(event) {
      if ($(event.target).closest(".form").length) return;
      $(".form").css({
        borderTop: "2px solid #666666",
        borderBottom: "2px solid #666666"
      });
      event.stopPropagation();
    });
  });

  //slick-slider

  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
