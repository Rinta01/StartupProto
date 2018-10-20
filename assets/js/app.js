$(".contactsA").on("click",function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#contacts").offset().top
    }, 2000);

    console.log("HI")
});

$("#toursA").on("click",function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#tours").offset().top
    }, 2000);

    console.log("HI")
});

$("#aboutA").on("click",function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);

    console.log("HI")
});