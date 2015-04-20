$(document).ready(function(){

  $(".red").hover(function() {
    $(this).toggleClass("green");
  });

  $("#btn-bg").click(function() {
    $('body').toggleClass('bg');
  });

  $("body").dblclick(function() {
    alert("I was double clicked")
  });

  $("#hotdog").click(function() {
    for(var i=0; i<1000; i++) {
      $("#hotdog").clone().appendTo(this.parentElement);
    }
  });

  $("#up").click(function() {
    $("p").slideUp();
  });

  $("#list").click(function() {
    $($(this).children()[0]).css('color', 'red');
    $($(this).children()[1]).css('color', 'green');
    $($(this).children()[2]).css('color', 'blue');
  });

  $("#random").click(function() {
    var color = ['green', 'red', 'blue', 'purple', 'orange', 'pink']
    var rando = color[Math.floor(Math.random()*color.length)]
    $(this).css('color', rando)
  });

  $("#number").click(function() {
    $(this).replaceWith("<div id ='number'>8. <strong></strong></div>")
    for(var i=0; i<=50; i++){
    var number = Math.floor(Math.random() * 1000) + 1
    $('#number').append(number + ' ')
    };
  });

});
