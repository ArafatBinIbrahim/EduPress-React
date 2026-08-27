// ======= jscript ==========
$(document).ready(function() {

});
//text change
function textChange() {

    document.getElementById('tc').innerHTML = "Free";

}



// ======= jquery ============
$(function() {


    // preloader strat
    $(window).load(function() {
        $("#loading").fadeOut(400);
    });
    // preloader end
    // counter strat
    $('.count').counterUp({
        delay: 15,
        time: 1500
    });
    // counter end

})