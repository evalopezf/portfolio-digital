$(document).ready(function () {
  $(".open-window").click(function (e) {
    e.preventDefault();
    const target = $(this).data("target");

    $(target).fadeIn(); // Asegúrate de que se muestre

    // Calcular el z-index más alto actual entre ventanas
    let maxZ = 3000;
    $(".window").each(function () {
        const z = parseInt($(this).css("z-index")) || 0;
        if (z > maxZ) maxZ = z;
    });

    // Elevar la ventana seleccionada
    $(target).css("z-index", maxZ + 1);
});
    $(".close-button").click(function () {
      const ventana = $(this).closest(".window");
  
      // Detener todos los videos dentro de la ventana
      ventana.find("video").each(function () {
          this.pause();
          this.currentTime = 0; // opcional: vuelve al inicio
      });
  
      ventana.fadeOut();
  });
});






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
