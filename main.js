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
    p3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    p4: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took
    a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it
    1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the relea`,
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    github: 'github',
    ruby: 'ruby',
    bootstraps: 'Bootstrap',
    modal1: '#',
    onOff: 'closePopUp()',

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
    p3: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining essent`,
    p4: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took
    a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it
    1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the relea`,
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    github: 'github',
    ruby: 'ruby',
    bootstraps: 'Bootstrap',
    modal1: '#',
    onOff: 'closePopUp()',
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
    p3: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining essent`,
    p4: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took
    a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it
    1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the relea`,
    year1: '2015',
    year2: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p2: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    github: 'github',
    ruby: 'ruby',
    bootstraps: 'Bootstrap',
    modal1: '#',
    onOff: 'closePopUp()',

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
    p3: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining essent`,
    p4: `Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
    releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took
    a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it
    1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the relea`,
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    github: 'github',
    ruby: 'ruby',
    bootstraps: 'Bootstrap',
    modal1: '#',
    onOff: 'closePopUp()',

  },
];

const formCheck = document.querySelector('#form');
const errormsg = document.querySelector('#error');
const emailInput = document.querySelector('#email-input');
const nameInput = document.querySelector('#name-input');
const textInput = document.querySelector('#message-input');

const formDefault = JSON.parse(localStorage.getItem('Contact'));
if (formDefault != null) {
  nameInput.value = formDefault.name;
  emailInput.value = formDefault.mail;
  textInput.value = formDefault.message;
}

formCheck.addEventListener('submit', (e) => {
  const email = emailInput.value;

  if (email !== email.toLowerCase()) {
    errormsg.style.display = 'block';
    errormsg.innerHTML = 'email must be in lower case';
    setTimeout(() => { errormsg.style.display = 'none'; }, 2000);
    e.preventDefault();
    return false;
  }
  formCheck.submit();
  return false;
});

formCheck.addEventListener('input', () => {
  const name = nameInput.value;
  const mail = emailInput.value;
  const message = textInput.value;
  localStorage.setItem('Contact', JSON.stringify({ name, mail, message }));
});

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
    <button type="submit" class="mobile-btn mobile-btn-txt displayModal" onclick="popUpOpen(${item.id})">See Project</button>
  </div>
</div>
</div>`;
});

const popUp = document.querySelector('#popUp');

function closePopUp() {
  popUp.style.display = 'none';
}

const popUpCloser = document.getElementsByClassName('.PopUpCloser');

popUpCloser.addEventListener('click', closePopUp);

function popUpOpen(id) {
  popUp.style.display = 'flex';
  projectInfo.forEach((item) => {
    if (id === item.id) {
      popUp.innerHTML = `<div class="popUpContent">
      <div class="popUpHeader">
        <div class="popUpTitle">
          <h2 class="pd-0 mrg-0 txt-4 tx mbl-to-hide">${item.title1}</h2>
          <h2 class="pd-0 mrg-0 txt-4-dsktp dsktp-to-hide dsktp-to-show">${item.title2}</h2>
          <img src="img/Normal-Button/Tertiary/closeModal.png" onclick="closePopUp()" class="PopUpCloser" alt="close menu image">
        </div>
        <div class="popUpWorkList">
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
        <div class="popUpBlockImg">
          <img src="${item.mImg}" class="mbl-to-hide mbl-crd-img"
            alt="project 1 image">
          <img src="${item.dImg}"
            class="dsktp-to-hide dsktp-crd-img" alt="project 1 desktop image">
        </div>
        <div class="popUpTxtBlock">
          <div class="popUpBlock1">
            <p class="mrg-0 txt-7  mbl-to-hide">${item.p3}</p>
            <p class="mrg-0 popUpTxt dsktp-to-hide dsktp-to-show">${item.p4}</p>
          </div>
          <div class="popUpBlock2">
            <ul class="popUpLst">
              <li class="popUpLstItem">${item.html}</li>
              <li class="popUpLstItem">${item.css}</li>
              <li class="popUpLstItem">${item.js}t</li>
            </ul>
            <ul class="popUpLst popUpHide popUpTop12Bottom20">
              <li class="popUpLstItem">${item.github}</li>
              <li class="popUpLstItem">${item.ruby}</li>
              <li class="popUpLstItem">${item.bootstraps}</li>
            </ul>
            <div class="popUpSeparator">
              <img src="img/popUpSeparator.png" alt="Flat line seaprator">
            </div>
            <div class="popUpAction">
              <button type="submit" href="#" onclick="${item.onOff}" class="popUpActionBtn mobile-btn-txt PopUpCloser">See live<img
                  src="img/Normal-Button/Tertiary/seeLive.svg" alt="See live button"> </button>
              <button type="submit" href="#" onclick="${item.onOff}" class="popUpActionBtn mobile-btn-txt PopUpCloser">See source<img
                  src="img/Normal-Button/Tertiary/gitHubBlue.png" alt="gitHub image logo"></button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    }
  });
}

const displayPopUp = document.getElementsByClassName('.displayModal');
displayPopUp.addEventListener('onclick', popUpOpen);
