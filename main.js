const btn = document.querySelector('#btn-menu');

function displayMobileMenu() {
  document.querySelector('#overlay').style.display = 'block';
}

btn.addEventListener('click', displayMobileMenu);

const closeMenu = document.querySelectorAll('.close-menu');
function closeMobileMenu() {
  document.querySelector('#overlay').style.display = 'none';
}
for (let i = 0; i < closeMenu.length; i += 1) {
  closeMenu[i].addEventListener('click', closeMobileMenu);
}

const projectInfo = [
  {
    id: 1,
    mImg: 'img/mobile-cards-img/Snapshoot-Portfolio-card-1.png',
    dImg: 'img/desktop-version/Portoflio-Card/Snapshoot-Portfolio-desktop-01.png',
    orderA: 0,
    orderB: 1,
    title1: 'Tonic',
    title2: 'Tonic',
    client1: 'CANOPY',
    client2: 'CANOPY',
    position1: 'Back End Dev',
    position2: 'Back End Dev',
    year1: '2015',
    year2: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    modal1: '#',
    onOff: '#',

  },
  {
    id: 2,
    mImg: 'img/mobile-cards-img/Snapshoot-Portfolio-card-2.png',
    dImg: 'img/desktop-version/Portoflio-Card/Snapshoot-Portfolio-desktop-02.png',
    orderA: 1,
    orderB: 0,
    title1: 'Multi-Post<br>Stories',
    title2: 'Multi-Post Stories',
    client1: 'CANOPY',
    client2: 'FACEBOOK',
    position1: 'Back End Dev',
    position2: 'Full Stack Dev',
    year1: '2015',
    year2: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    modal1: '#',
    onOff: '#',
  },
  {
    id: 3,
    mImg: 'img/mobile-cards-img/Snapshoot-Portfolio-card-3.png',
    dImg: 'img/desktop-version/Portoflio-Card/Snapshoot-Portfolio-desktop-03.png',
    orderA: 0,
    orderB: 1,
    title1: 'Tonic',
    title2: 'Facebook 360',
    client1: 'CANOPY',
    client2: 'FACEBOOK',
    position1: 'Back End Dev',
    position2: 'Full Stack Dev',
    year1: '2015',
    year2: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p2: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    modal1: '#',
    onOff: '#',

  },
  {
    id: 4,
    mImg: 'img/mobile-cards-img/Snapshoot-Portfolio-card-4.png',
    dImg: 'img/desktop-version/Portoflio-Card/Snapshoot-Portfolio-desktop-04.png',
    orderA: 1,
    orderB: 0,
    title1: 'Multi-Post<br>Stories',
    title2: 'Uber Navigation',
    client1: 'CANOPY',
    client2: 'Uber',
    position1: 'Back End Dev',
    position2: 'Lead Developer',
    year1: '2015',
    year2: '2018',
    p1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    modal1: '#',
    onOff: '#',

  },
];

const cards = document.querySelector('.works');

projectInfo.forEach((item) => {
  cards.innerHTML += `<div class="card order-${item.id - 1} pd-0 mrg-0" id=${item.id}>
<div class="block-img order-0 dsktp-order-${item.orderA}">
  <img src=${item.mImg} class="mbl-to-hide mbl-crd-img"
    alt="project 1 image">
  <img src=${item.dImg} class="dsktp-to-hide dsktp-crd-img" alt="project 1 desktop image">
</div>
<div class="block-txt order-1 pd-0 mrg-0 dsktp-order-${item.orderB}">
  <div class="primary-txt order-0">
    <h2 class="pd-0 mrg-0 txt-4 tx mbl-to-hide">${item.title1}</h2>
    <h2 class="pd-0 mrg-0 txt-4-dsktp dsktp-to-hide dsktp-to-show">${item.title2}</h2>
    <ul class="list-stl pd-0 flx-rw mrg-0">
      <li class="txt-5 mbl-to-hide">${item.client1}</li>
      <li class="txt-5-dsktp dsktp-to-hide dsktp-to-show">${item.client2}</li>
      <li><img src="img/Counter.png" alt="Separator image"></li>
      <li class="txt-6 txt-6-dsktp mbl-to-hide">${item.position1}</li>
      <li class="txt-6-dsktp dsktp-to-hide dsktp-to-show">${item.position2}</li>
      <li><img src="img/Counter.png" alt="Separator image"></li>
      <li class="txt-6 txt-6-dsktp mbl-to-hide">${item.year1}</li>
      <li class="txt-6-dsktp dsktp-to-hide dsktp-to-show">${item.year2}</li>
    </ul>
  </div>
  <p class="mrg-0 txt-7 order-1 mbl-to-hide">${item.p1}</p>
  <p class="mrg-0 txt-7-dsktp order-1 dsktp-to-hide dsktp-to-show">${item.p2}</p>
        
  <ul class="tags order-2 list-stl flx-rw mrg-0 pd-0">
    <li class="txt-tags">${item.html}</li>
    <li class="txt-tags">${item.css}</li>
    <li class="txt-tags">${item.js}</li>
  </ul>
  <div class="action order-3">
    <button type="submit" class="mobile-btn mobile-btn-txt" href="${item.modal1}" onclick="${item.onOff}">See Project</button>
  </div>
</div>
</div>`;
});
