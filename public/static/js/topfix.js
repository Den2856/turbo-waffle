document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const underLine = document.querySelector('.hr');
  const offsetTrigger = header.offsetHeight;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > offsetTrigger) {
      header.classList.add('fixed');
      underLine.classList.add('fixed'); 
    } else {
      header.classList.remove('fixed');
      underLine.classList.remove('fixed');
    }
  });

  document.getElementById("about").addEventListener("click", function () {
    const target = document.querySelector(".about-section");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    header.classList.add('fixed')
  });

  document.getElementById("tours").addEventListener("click", function () {
    const target = document.querySelector(".tour-section");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    header.classList.add('fixed')
  });

  document.getElementById("contacts").addEventListener("click", function () {
    const target = document.querySelector(".contact-info");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    header.classList.add('fixed')
  });

  document.getElementById("testimonial").addEventListener("click", function () {
    const target = document.querySelector(".testimonials");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    header.classList.add('fixed')
  });

  document.getElementById("inspiration").addEventListener("click", function () {
    const target = document.querySelector(".inspiration");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    header.classList.add('fixed')
  });

  document.getElementById("eco-tours").addEventListener("click", function () {
    const target = document.querySelector(".eco-tours");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    header.classList.add('fixed')
  });

});