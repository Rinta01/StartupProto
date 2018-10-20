$("#contactsA").on("click",function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#contacts").offset().top
    }, 2000);

    console.log("HI")
});