$("form button").click(function(event){
  event.preventDefault();

  var input = $("#shopping-list-entry").val();
  appendToList(input);
});


function appendToList(input){
  var listItem = "<li><span class=\"shopping-item\">" + input + "</span><div class=\"shopping-item-controls\"><button class=\"shopping-item-toggle\"><span class=\"button-label\">check</span></button> <button class=\"shopping-item-delete\"><span class=\"button-label\">delete</span></button></div></li>"
  $("ul").append(listItem);
}


$("ul li div").on("click", ".shopping-item-toggle", function(event){
  event.preventDefault();
  //parentText.css("text-decoration", "line-through");
  //console.log(parentText);
  var li = $(this).closest("li");

  if(li.find("span:first").hasClass("shopping-item__checked")){
    var span = li.find("span:first").removeClass("shopping-item__checked");
  }
  else{
    var span = li.find("span:first").addClass("shopping-item__checked");
  }
});

$("ul li div").on("click", ".shopping-item-delete",function(event){
  event.preventDefault();
  var li = $(this).closest("li");
  li.remove();
});
