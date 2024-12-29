function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
if (typeof(backgroundSizePolyfill) !== "undefined") {
    backgroundSizePolyfill.init();
}
