document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  // Додатковий виклик при завантаженні
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
