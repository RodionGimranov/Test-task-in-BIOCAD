//Плавный переход между страницами "main.html" и "analytics.html"
document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = e.currentTarget.getAttribute('href');

        if (target.startsWith('./')) {
          e.preventDefault();

          document.body.classList.add('fade-effect');

          setTimeout(function () {
            window.location.href = target;
          }, 100);
        }
      });
    });

    document.body.classList.add('fade-effect');
    setTimeout(function () {
      document.body.classList.remove('fade-effect');
      document.body.style.animation = 'fadeIn 0.5s';
    }, 500);
  });

  // Изменение цвета текста и нижний линии при переходе на другую страницу
  document.addEventListener('DOMContentLoaded', function() {

    const currentPage = window.location.pathname.split('/').pop();

    const mainBtn = document.getElementById('mainBtn');
    const analyticsBtn = document.getElementById('analyticsBTN');
    const mainUnderline = document.getElementById('mainUnderline');
    const analyticsUnderline = document.getElementById('analyticsUnderline');

    mainBtn.classList.remove('active');
    analyticsBtn.classList.remove('active');
    mainUnderline.classList.remove('active');
    analyticsUnderline.classList.remove('active');

    if (currentPage === 'main.html' || currentPage === "") {
        mainBtn.classList.add('active');
        mainUnderline.classList.add('active');
    } else if (currentPage === 'analytics.html') {
        analyticsBtn.classList.add('active');
        analyticsUnderline.classList.add('active');
    }
});