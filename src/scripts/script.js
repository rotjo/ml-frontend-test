function qS(selector) { return document.querySelector(selector); };
var zoom1 = new ch.Zoom(qS('#zoom-default'), {
  'offsetX': 0,
  'offsetY': 0
});

zoom1.container.style.height = '500px';
zoom1.container.style.width = '400px';

var carousel = new ch.Carousel(qS('#carousel'), {
  'limitPerPage': 3
});