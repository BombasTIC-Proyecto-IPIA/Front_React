import $ from 'jquery'
$(document).ready(function () {
    const testimonies = $(".testimony__body");
    let currentIndex = 0;

    // Función para mostrar el testimonio siguiente
    $("#next").click(function () {
        testimonies.eq(currentIndex).removeClass("testimony__body--show");
        currentIndex = (currentIndex + 1) % testimonies.length;
        testimonies.eq(currentIndex).addClass("testimony__body--show");
    });

    // Función para mostrar el testimonio anterior
    $("#before").click(function () {
        testimonies.eq(currentIndex).removeClass("testimony__body--show");
        currentIndex = (currentIndex - 1 + testimonies.length) % testimonies.length;
        testimonies.eq(currentIndex).addClass("testimony__body--show");
    });
});


