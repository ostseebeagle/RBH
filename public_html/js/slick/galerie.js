/* Fotogalerie aktivieren */
$(document).ready(function(){
    $('.fotogalerie').slick({
        dots: true,         /* Anzeige der Punkte unter der Galerie */
        infinite: true,
        speed: 500,
        fade: true,         /* Fading beim Bilderwechsel */
        cssEase: 'linear',
        autoplay: true,     /* Autoplayeinschalten */
        autoplaySpeed: "7000",
        adaptiveHeight: true /* automatische Höhenanpassung */
    });
});

