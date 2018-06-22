
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

// Emoticons fades 
$('.font').on('click', function() {
    var questionGroup = $(this).data('question');
    var answerPoints = $(this).find("img").attr("value")

    $('.font[data-question="'+ questionGroup +'"]').css('opacity','0.3');
    $(this).css('opacity','1.0');
    $(this).parent().parent().attr("data-value", answerPoints);
});

// Survey



$('#submit').on('click', function(){
    event.preventDefault();

    if( ($('#name').val().trim() !== '') && ($('#photo').val().trim() !== '')) {
        var newFriend = {
            name: $('#name').val(),
            photo: $('#photo').val(),
            scores:[$('#q1').data("value"),
                    $('#q2').data("value"),
                    $('#q3').data("value"),
                    $('#q4').data("value"),
                    $('#q5').data("value"),
                    $('#q6').data("value"),
                    $('#q7').data("value"),
                    $('#q8').data("value"),
                    $('#q9').data("value"),
                    $('#q10').data("value"),
                ]
        }


    $.post("/api/friends", newFriend, function(data){
        $('#matchName').text(data.name);
        $('#matchImage').attr('src', data.photo);

        $('#modalResults').modal('toggle');
        $('#name').val('');
        $('#photo').val('');
        $(".font").css('opacity', '0.3')


    });
    } else {
        $(".modal-title").text("Missing required information");
        $(".modal-body").html("<h2>Please answer all the questions before submitting</h2>");
        $("#resultsModal").modal('toggle');
    }

});



$('#closeModal').click(function(){
    $.get('/', function(req,res){
        location.replace(res);
    })
});



  