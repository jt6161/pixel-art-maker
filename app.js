// function that builds a grid in the "container"
$(document).ready(function() {


  createGrid(50)

  function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
      for (let columns = 0; columns < x; columns++) {
        $("#container").append("<div class='grid'></div>");
      };
    };
    $(".grid").width(800 / x);
    $(".grid").height(650 / x);
  };

  $('.grid').mouseover(function() {
    $(this).css('background-color', 'red')
  });


  function colorChanged(value) {
    document.getElementById("colorValue").innerHTML = value;
    document.getElementById("colorCanvas").style.backgroundColor = value;
  }

  $('input[type="color"]').on('change', function() {
    colorChanged($(this).val())
  });

  $('.grid').mouseover(function() {
    $(this).css('background-color', document.getElementById('picked').value)
  });








})
