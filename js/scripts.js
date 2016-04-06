var mainNav = document.querySelector('.main-nav__list');
var closeBtn =
document.querySelector('.main-nav__close');
var sandwichBtn = document.querySelector('.main-nav__sandwich');

mainNav.classList.add('main-nav__list--closed');
sandwichBtn.classList.remove('main-nav__sandwich--hide');

sandwichBtn.addEventListener('click', function(event){
  mainNav.classList.remove('main-nav__list--closed');
  closeBtn.classList.remove('main-nav__close--hide');
  sandwichBtn.classList.add('main-nav__sandwich--hide');
});

closeBtn.addEventListener('click', function(event){
  mainNav.classList.add('main-nav__list--closed');
  closeBtn.classList.add('main-nav__close--hide');
  sandwichBtn.classList.remove('main-nav__sandwich--hide');
});

var myMap;
ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('yandex_map', {
  center: [34.865966, -111.763806],
  controls: ['zoomControl'],
  zoom: 8
  });
  myMap.geoObjects.add(new ymaps.Placemark( [34.865966, -111.763806], {
    balloonContentHeader: '<strong>Sedona</strong>'
    , balloonContentBody: 'Because the Grand<br> Canyon sucks'
    }, {
      iconLayout: 'default#image',
      iconImageSize: [27, 27],
      iconImageHref: 'img/icon-map-marker.svg'

    }));
  myMap.behaviors.disable('scrollZoom');
}
