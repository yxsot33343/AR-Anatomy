// Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Theme Toggle: alterna la clase 'light-theme' en body y actualiza el icono
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      if(document.body.classList.contains("light-theme")){
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });

    // AR Popup
    const floatingAR = document.getElementById("floating-ar");
    const arPopup = document.getElementById("ar-popup");
    const arPopupClose = document.getElementById("ar-popup-close");
    floatingAR.addEventListener("click", () => {
      arPopup.classList.add("active");
    });
    arPopupClose.addEventListener("click", () => {
      arPopup.classList.remove("active");
    });

    // Loader Hide
    window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      loader.classList.add("hidden");
    });

    // GSAP Animations
    gsap.to(".hero-title", { opacity: 1, duration: 1, delay: 0.5 });
    gsap.to(".hero-subtitle", { opacity: 1, duration: 1, delay: 0.7 });
    gsap.to(".cta-button", { opacity: 1, duration: 1, delay: 0.9 });
    gsap.to(".model-viewer-container", { opacity: 1, duration: 1, delay: 1 });
    gsap.to(".section-title", { opacity: 1, duration: 1, delay: 1.2 });
    gsap.utils.toArray(".card, .testimonial, .feature-card, .model-card").forEach(item => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: item, start: "top 80%" }
      });
    });

    // Funciones para Model Controls en el modelo principal
    const mainModel = document.getElementById("mainModel");
    const resetBtn = document.getElementById("resetBtn");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    resetBtn.addEventListener("click", () => {
      // Reiniciamos la posición de la cámara (método de model-viewer)
      mainModel.resetCameraOrbit();
    });

    fullscreenBtn.addEventListener("click", () => {
      // Solicitamos pantalla completa (model-viewer tiene el método enterFullscreen)
      if(mainModel.enterFullscreen){
        mainModel.enterFullscreen();
      } else {
        alert("Función de pantalla completa no soportada en este navegador.");
      }
    });

    // Slider en Galería de Modelos
    const modelsGallery = document.getElementById("modelsGallery");
    const sliderLeft = document.getElementById("sliderLeft");
    const sliderRight = document.getElementById("sliderRight");

    sliderLeft.addEventListener("click", () => {
      modelsGallery.scrollBy({ left: -320, behavior: "smooth" });
    });
    sliderRight.addEventListener("click", () => {
      modelsGallery.scrollBy({ left: 320, behavior: "smooth" });
    });
