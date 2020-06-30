$(".barsbtn").click(function () {
    $(".menu").delay(6000).toggle();
    let dis = $(".menu").css('display')

    if (dis == 'flex') {
        $("#i").removeClass()
        $("#i").addClass("fa fa-times")
    } else {
        $("#i").removeClass()
        $("#i").addClass("fa fa-bars")
    }
})
$(".menu").hide()

$('collapse').hide();

$(".inweb").hide()
$(".inpyt").hide()
$(".inds").hide()

$('#cs1').click(function () {
    $('#collapse1').delay(6000).toggle();
    let dis = $("#collapse1").css('display')

    if (dis == 'none') {
        $("#c1").removeClass()
        $("#c1").addClass("fa fa-plus")
    } else {
        $("#c1").removeClass()
        $("#c1").addClass("fa fa-minus")
    }

})
$('#cs2').click(function () {
    $('#collapse2').delay(6000).toggle();
    let dis = $("#collapse2").css('display')

    if (dis == 'none') {
        $("#c2").removeClass()
        $("#c2").addClass("fa fa-plus")
    } else {
        $("#c2").removeClass()
        $("#c2").addClass("fa fa-minus")
    }
})
$('#cs3').click(function () {

    $('#collapse3').delay(6000).toggle();

    let dis = $("#collapse3").css('display')

    if (dis == 'none') {
        $("#c3").removeClass()
        $("#c3").addClass("fa fa-plus")
    } else {
        $("#c3").removeClass()
        $("#c3").addClass("fa fa-minus")
    }
})


$(".in1").mouseover(function () {
    $(".inweb").show()
})

$(".in2").mouseover(function () {
    $(".inpyt").show()
})


$(".in3").mouseover(function () {
    $(".inds").show()
})


$(".in1").mouseout(function () {
    $(".inweb").hide()
})

$(".in2").mouseout(function () {
    $(".inpyt").hide()
})


$(".in3").mouseout(function () {
    $(".inds").hide()
})