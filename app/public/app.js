
//Information Modal
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
// Survey

var currentURL = window.location.origin;
console.log(currentURL)

$('#submit').on('click', function(){
    // event.preventDefault();

    if( ($('#name').val().trim() !== '') && ($('#photo').val().trim() !== '')) {
        var newFriend = {
            name: $('#name').val(),
            photo: $('#photo').val(),
            scores:[$('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
                ]
        }

    $.post(currentURL + "/api/friends", newFriend, function(data){
        $('#matchName').text(data.name);
        $('#matchImage').attr('src', data.photo);

        $('#resultsModal').modal('toggle');
        $('#name').val('');
        $('#photo').val('');
    });
    } else {
        $(".modal-title").text("Missing required information");
        $(".modal-body").html("<h2>Please answer all the questions before submitting</h2>");
        $("#resultsModal").modal('toggle');
    }
    return false;
});

$('.font').on('click', function() {
    $(this).css('opacity','1.0');
});

$('#closeModal').click(function(){
    $.get('/', function(req,res){
        location.replace(res);
    })
});



  