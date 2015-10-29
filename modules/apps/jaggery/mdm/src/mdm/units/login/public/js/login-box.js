$( document ).ready(function() {
    var currentHash = window.location.hash;
    if(currentHash=="#auth-failed") {
        $('.wr-validation-summary p').text("Sorry!, Please make sure to enter correct username and password");
        $('.wr-validation-summary').removeClass("hidden");
    }else if(currentHash=="#error"){
        $('.wr-validation-summary p').text("Sorry!, Error occured");
        $('.wr-validation-summary').removeClass("hidden");
    }
    $('.btn-download-agent').click(function(){
        submitLoginForm();
    });
});

function submitLoginForm() {
    if(event.keyCode==13){
        var username = $("input#username").val();
        var password = $("input#password").val();

        if (!username) {
            $('.wr-validation-summary p').text("Sorry!, Username cannot be empty.");
            $('.wr-validation-summary').removeClass("hidden");
        } else if (!password){
            $('.wr-validation-summary p').text("Sorry!, Password cannot be empty.");
            $('.wr-validation-summary').removeClass("hidden");
        } else {
            $('.form-login-box').submit();
        }
    }
}
