$(document).ready(function() {
  //for form
  $("#contact-form").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
      
    } else {
    
      event.preventDefault();
      formSuccess();
    }
  });

  function submitForm() {
    
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
      type: "POST",
      url: "php/form-process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success: function(text) {
        if (text == "success") {
          formSuccess();
        }
      }
    });
  }

  function formSuccess() {
    $("#form-feedback").css({
      opacity: 1,
      marginRight: "20px"
    });
  }

});