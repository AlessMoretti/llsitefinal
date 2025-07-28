document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });

  // Закрытие при клике на ссылку
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      mobileNav.classList.remove("active");
    });
  });
});

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;

  const offsetX = (e.clientX - centerX) / centerX;
  const offsetY = (e.clientY - centerY) / centerY;

  document.querySelectorAll(".money").forEach((el, i) => {
    const factor = (i + 1) * 5; // Разная скорость
    el.style.transform = `translate(${offsetX * factor}px, ${offsetY * factor}px)`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.3 // можно изменить чувствительность
  });

  document.querySelectorAll('.section.about').forEach(section => {
    observer.observe(section);
  });
});


  fetch("https://servers-frontend.fivem.net/api/servers/single/br5rad")
    .then(res => res.json())
    .then(data => {
      const online = data.Data.clients;
      const max = data.Data.sv_maxclients;
      document.getElementById("serverOnline").textContent = `${online} / ${max} игроков онлайн`;
    })
    .catch(() => {
      document.getElementById("serverOnline").textContent = "Недоступно";
    });
