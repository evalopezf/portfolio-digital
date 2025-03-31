$(document).ready(function () {
    $(".open-window").click(function (e) {
        e.preventDefault();
        const target = $(this).data("target");

        // Oculta otras ventanas si quieres efecto "una a la vez"
        // $(".window").hide();

        // Eleva el z-index de la ventana seleccionada
        $(".window").css("z-index", "3000");
        $(target).css("z-index", "4000").fadeIn();

        // Opcional: centra la ventana en pantalla
        // $(target).css({
        //     top: "10vh",
        //     left: "calc(50% - " + ($(target).outerWidth() / 2) + "px)"
        // });
    });

    $(".close-button").click(function () {
        $(this).closest(".window").fadeOut();
    });
});



function mostrarDiploma(event) {
  event.preventDefault(); // evita que el enlace recargue la página
const ventana = document.getElementById("ventana-diploma");
ventana.style.display = ventana.style.display === "block" ? "none" : "block";
}


// social window
function toggleSocialSubmenu(event) {
    event.preventDefault();
    const submenu = document.getElementById("social-submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  }

  function mostrarMensaje(e) {
    e.preventDefault(); // Evita que el enlace recargue la página
    const mensaje = document.getElementById('mensaje-proximamente');
    mensaje.style.display = 'inline';
  
    // Opcional: ocultarlo después de unos segundos
    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 2500);
  }
  
  // draggable

$(document).ready(function() {
    $(".open-window").click(function(e) {
        e.preventDefault();
        let target = $(this).data("target");
        $(target).show();
    });

    $(".close-button").click(function() {
        $(this).closest(".window").hide();
    });

    // 💡 Hacer todas las ventanas .window movibles por su barra
    $(".window").draggable({
        handle: ".window-bar",
        containment: "body"
    });
});
$(document).ready(function () {
  const $slides = $('#carrousel-window .slide');
  let currentSlide = 0;

  function mostrarSlide(index) {
    $slides.removeClass('activo');
    $slides.eq(index).addClass('activo');
  }

  $('#carrousel-window .prev').click(function () {
    currentSlide = (currentSlide - 1 + $slides.length) % $slides.length;
    mostrarSlide(currentSlide);
  });

  $('#carrousel-window .next').click(function () {
    currentSlide = (currentSlide + 1) % $slides.length;
    mostrarSlide(currentSlide);
  });

  mostrarSlide(currentSlide); // inicializa
});
