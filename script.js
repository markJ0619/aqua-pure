document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
 
    
    const revealOnScroll = () => {
      fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.style.opacity = "1";
          el.style.animation = "fadeIn 1s forwards";
        }
      });
    };
 
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
 
    
    const contactForm = document.getElementById("contactForm");
    const formMsg = document.getElementById("formMsg");
 
    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMsg.classList.remove("hidden");
        formMsg.textContent = "✅ Message sent! We'll reply soon.";
 
        
        setTimeout(() => {
          contactForm.reset();
          formMsg.classList.add("hidden");
        }, 2000);
      });
    }
  });