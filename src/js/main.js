document.addEventListener("DOMContentLoaded", function () {
  const bannerContent = document.querySelector(".banner-content");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const direction = scrollTop > lastScrollTop ? -1 : 1;
    lastScrollTop = scrollTop;

    const currentLeft = parseFloat(getComputedStyle(bannerContent).left) || 0;
    const newLeft = currentLeft + direction * 10; // Ajustez cette valeur pour contrôler la vitesse de déplacement

    bannerContent.style.left = newLeft + "px";
  });
});
