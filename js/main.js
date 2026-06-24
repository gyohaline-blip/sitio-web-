// ============================================
// CALPULALPAN, JILOTEPEC — Script compartido
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  var btnMenu = document.querySelector(".btn-menu");
  var nav = document.querySelector("nav.principal");
  if (btnMenu && nav) {
    btnMenu.addEventListener("click", function () {
      nav.classList.toggle("abierta");
      var abierto = nav.classList.contains("abierta");
      btnMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
  }

  // Año dinámico en el pie de página
  var anioEl = document.querySelector("[data-anio-actual]");
  if (anioEl) {
    anioEl.textContent = new Date().getFullYear();
  }

  // Lightbox de galería
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var imgLightbox = lightbox.querySelector("img");
    var leyenda = lightbox.querySelector(".leyenda");
    var botonCerrar = lightbox.querySelector(".cerrar");

    document.querySelectorAll(".galeria-item").forEach(function (item) {
      item.addEventListener("click", function () {
        var img = item.querySelector("img");
        if (!img) return;
        imgLightbox.src = img.src;
        imgLightbox.alt = img.alt || "";
        if (leyenda) leyenda.textContent = img.alt || "";
        lightbox.classList.add("activo");
      });
    });

    function cerrarLightbox() {
      lightbox.classList.remove("activo");
      imgLightbox.src = "";
    }

    if (botonCerrar) botonCerrar.addEventListener("click", cerrarLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) cerrarLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") cerrarLightbox();
    });
  }

  // Formulario de contacto (demo local, sin backend)
  var formContacto = document.querySelector("#form-contacto");
  if (formContacto) {
    formContacto.addEventListener("submit", function (e) {
      e.preventDefault();
      var mensajeEstado = document.querySelector("#estado-form");
      if (mensajeEstado) {
        mensajeEstado.textContent = "Gracias. Tu mensaje quedó registrado. Si configuras un correo de destino o un servicio de formularios, este mensaje se enviará automáticamente.";
        mensajeEstado.style.display = "block";
      }
      formContacto.reset();
    });
  }
});
