
var modal = document.getElementById('myModal');
var btn = document.getElementById("info");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$( function() {
    $('.font').click( function() {
      $(this).css('opacity', '1.0')
    } );
  } );