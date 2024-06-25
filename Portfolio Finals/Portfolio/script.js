script.js
document.addEventListener('DOMContentLoaded', () => {
    const introduction1 = document.querySelector('.introduction-1');
    const introduction2 = document.querySelector('.introduction-2');
    const img = document.querySelector('img');

    const observerOptions = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    observer.observe(introduction1);
    observer.observe(introduction2);
    observer.observe(img);
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function openHome() {
    window.location.href = "home.html";
}

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

document.addEventListener('DOMContentLoaded', function () {
  
  animateProgressBars();

  document.getElementById('nav-skills-tab').addEventListener('click', animateProgressBars);
});

function animateProgressBars() {
  const progressBars = document.querySelectorAll('#nav-skills .progress-bar');
  progressBars.forEach((bar) => {
      const width = bar.getAttribute('style').match(/width: (\d+)%/)[1];
      bar.style.width = '0';
      setTimeout(() => {
          bar.style.width = width + '%';
      }, 100); 
  });
}