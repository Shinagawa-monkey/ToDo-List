// no error handling and no caching of the jQuery objects
// $(function() {
//   $("#add").on("click", function() {
//     var val = $("input").val();
//     if(val !== '') {
//      var elem = $("<li></li>").text(val);
//      $(elem).append("<button class='rem'>X</button>");
//      $("#mylist").append(elem);
//      $("input").val("");
//      $(".rem").on("click", function() {
//       $(this).parent().remove();
//      });
//     }
//   });
// });
// $("#item").click(function() {
//   $("#submenu").slideToggle(500);
// }); 


//more robust code
$(function() {
  var $input = $("input");
  var $mylist = $("#mylist");
  var $submenu = $("#submenu");

  if ($input.length === 0) {
    console.error("Error: input field not found.");
    return;
  }

  if ($mylist.length === 0) {
    console.error("Error: list element not found.");
    return;
  }
  
  if ($submenu.length === 0) {
    console.error("Error: submenu element not found.");
    return;
  }

 $("#add").on("click", function() {
    var val = $input.val();
    if(val !== '') {
      var elem = $("<li></li>").text(val);
      elem.append("<button class='rem'>X</button>");
      $mylist.append(elem);
      $input.val("");
    }
  });

  $mylist.on("click", ".rem", function() {
    $(this).parent().remove();
  });

  $("#item").on("click", function() {
    $submenu.slideToggle(500);
  });
});
