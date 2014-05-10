jQuery(function($) {  

  $( "#login_btn" ).on("touchend",function() {
   $.ajax({

      url: "http://meerkat.buzz4healthtest.c66.me/api/v1/sessions",

      type: 'POST',

      processData: false,

      contentType: false,

      dataType: 'json',

      data: {"user[name]" :"shubhamjaiswal1860@gmail.com", "user[password]" : "shubham" },

      success : function(data) {

        alert("success");

      }

    });
  });
});
