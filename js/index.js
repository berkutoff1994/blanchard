/*выпадающий список header*/
{
let real = document.querySelector('.btn-real');
let realList =  document.querySelector('.list__real');

real.addEventListener('click', 
function() {
  realList.classList.toggle('list__real--active');
  real.classList.toggle('btn-real--active');
});

document.addEventListener( 'click', (e) => {
  let pruf = e.composedPath().includes(real);
	if (! pruf) {
		realList.classList.remove('list__real--active'); 
    real.classList.remove('btn-real--active');
	}
});
}
{
let real = document.querySelector('.btn-impr');
let realList =  document.querySelector('.list__impr');

real.addEventListener('click', 
function() {
  realList.classList.toggle('list__impr--active')
  real.classList.toggle('btn-impr--active');
});

document.addEventListener( 'click', (e) => {
  let pruf = e.composedPath().includes(real);
	if (! pruf) {
		realList.classList.remove('list__impr--active'); 
    real.classList.remove('btn-impr--active');
	}
})
}
{
  let real = document.querySelector('.btn-post');
  let realList =  document.querySelector('.list__post');
  
  real.addEventListener('click', 
  function() {
    realList.classList.toggle('list__post--active')
    real.classList.toggle('btn-post--active');
  });
  
  document.addEventListener( 'click', (e) => {
    let pruf = e.composedPath().includes(real);
    if (! pruf) {
      realList.classList.remove('list__post--active'); 
      real.classList.remove('btn-post--active');
    }
  });
}
{
  let real = document.querySelector('.btn-ava');
  let realList =  document.querySelector('.list__ava');
  
  real.addEventListener('click', 
  function() {
    realList.classList.toggle('list__ava--active')
    real.classList.toggle('btn-ava--active');
  });
  
  document.addEventListener( 'click', (e) => {
    let pruf = e.composedPath().includes(real);
    if (! pruf) {
      realList.classList.remove('list__ava--active');
      real.classList.remove('btn-ava--active'); 
    }
  })
}
{
  let real = document.querySelector('.btn-fut');
  let realList =  document.querySelector('.list__fut');
  
  real.addEventListener('click', 
  function() {
    realList.classList.toggle('list__fut--active')
    real.classList.toggle('btn-fut--active');
  });
  
  document.addEventListener( 'click', (e) => {
    let pruf = e.composedPath().includes(real);
    if (! pruf) {
      realList.classList.remove('list__fut--active'); 
      real.classList.remove('btn-fut--active'); 
    }
  })
}

/*Слайдер галереи*/
{
  const swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 38
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      // when window width is >=1516px
      1516: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      clickable: true,
    },
  });
}

/*селект галереи*/
{
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    /*renderChoiceLimit: 2,*///Задает количество элементов в списке, которые показываются
      /*addItems: false,*/// Делает список закрытым
      shouldSort: false,//отключает сортировку
      placeholder: true,
      placeholderValue: ":bdjgbcm",
  });
  }

/*Аккордеон*/
new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
  openOnInit: [0],
});

/*табы*/
let textName = document.querySelectorAll('.ac-text__name');
let tabContent = document.querySelectorAll('.ac-text__content');

textName.forEach(function(trigger) { 
  trigger.addEventListener('click', function() { 
  });
});

let jsTriggers = document.querySelectorAll('.js-tab-trigger');
jsTriggers.forEach(function(trigger) {
   trigger.addEventListener('click', function() {
      let id = this.getAttribute('data-tab'),
          content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
          activeTrigger = document.querySelector('.js-tab-trigger.active'),
          activeContent = document.querySelector('.js-tab-content.active');
      
      activeTrigger.classList.remove('active');
      trigger.classList.add('active');
      
      activeContent.classList.remove('active');
      content.classList.add('active');
   });
});

/*Слайдер событий*/
{
  const swiper = new Swiper('.events-swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: false,
    pagination: {
      el: '.events-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      // when window width is >=1516px
      1516: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    navigation: {
      nextEl: '.events-swiper-button-next',
      prevEl: '.events-swiper-button-prev',
    },
  });
}

/*Слайдер проектов*/
{
  const swiper = new Swiper('.projects-swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loop: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      // when window width is >=1516px
      1516: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });
}

/*form*/
{
  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999)999-99-99");
  im.mask(selector);
    
  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        },
      },
      mail: {
        required: true,
        email: true
      }, 
    },
    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Введите корректное имя'
      },
      tel: {
        required: 'Вы не ввели номер',
        function: 'Введите корректный номер'
      },

      mail: {
        required: 'Вы не ввели e-mail',
        email: 'Введите корректный  e-mail'
      }
    },
  });
}

/*Map*/
ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 15
    });

let myPlacemark1 = new ymaps.Placemark([55.758468, 37.601088], {}, {
  iconLayout: 'default#image',
  iconImageClipRect: [[0,0], [0,0]],
  iconImageHref: '/img/map-marker.png',
  iconImageSize: [20, 20],
  iconImageOffset: [-15, -27]
});

myMap.geoObjects.add(myPlacemark1); 
}

/*Burger*/
{
  let burgerIcon =  document.querySelector('.burger-icon');
  let burgerNav = document.querySelector('.header__nav')
  let menuLinks = document.querySelectorAll('.header__nav-item')
  
  burgerIcon.addEventListener('click', 
  function() {
    burgerNav.classList.toggle('header__nav--active')
    burgerIcon.classList.toggle('burger-icon__active')
    document.body.classList.toggle("stop-scroll")
  });
  
  menuLinks.forEach(function(el) {
    el.addEventListener("click", function() {
      burgerNav.classList.remove("header__nav--active");
      burgerIcon.classList.remove("burger-icon__active");
      document.body.classList.remove("stop-scroll");
    })
  })
}
/*поиск*/
{
  let search = document.querySelector('.header-search__button');
  let searchForm = document.querySelector('.search-form');
  let inputEnd = document.querySelector('.search-input__end');
  
  search.addEventListener('click',
  function() {
    searchForm.classList.toggle("search-form__active");
    search.classList.toggle("header-search__button--active");
  })

  inputEnd.addEventListener('click',
  function() {
    searchForm.classList.remove("search-form__active");
    search.classList.remove("header-search__button--active");
  })
  }
