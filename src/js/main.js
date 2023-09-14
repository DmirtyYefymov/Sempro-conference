const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// header sticky menu
const header = document.querySelector(".header"),
      sticky = header.offsetTop;
function stickHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
}

window.onscroll = function () {
  stickHeader();
};

const burgerBtn = document.querySelector('.burger'),
      mobileMenu = document.querySelector('.header_nav_links');

burgerBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});


const showMoreItems = (trigger, wrapper) => {
  const cards = document.querySelectorAll(wrapper),
        btn = document.querySelector(trigger);

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden_item');
        });
        btn.remove();
    });
};

showMoreItems('.show_more_item', '.speaker_item');

const popup = document.getElementById('popup');

function showPopup() {
  popup.classList.add('show');
}
function closePopup() {
  popup.classList.remove('show');
}
setTimeout(showPopup, 4000);

const closePopupButton = document.querySelector('.popup_close');
closePopupButton.addEventListener('click', closePopup);



const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', function (e) {
      mobileMenu.classList.toggle('active');
      burgerBtn.classList.toggle('active');
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
