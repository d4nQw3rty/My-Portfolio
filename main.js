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
    mImg: 'img/comunity-app_p.png',
    dImg: 'img/comunity_appd.jpg',
    orderA: 0,
    orderB: 1,
    title1: 'Gestión Comunitaria',
    title2: 'Gestión Comunitaria',
    client1: 'Community',
    client2: 'Community',
    position1: 'Full Stack Dev',
    position2: 'Full Stack Dev',
    year1: '2023',
    year2: '2023',
    p1: 'A robust and user-friendly solution, for a comunity members data management.',
    p2: 'A robust and user-friendly solution, featuring an elegant design, to seamlessly manage all aspects of hotel service bookings.A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p3: `A rails-based application has been thoughtfully designed to assist communities in effectively managing resident information, registering families, and maintaining pertinent data regarding resource allocation and human resources.`,
    p4: `A rails-based application has been thoughtfully designed to assist communities in effectively managing resident information, registering families, and maintaining pertinent data regarding resource allocation and human resources.`,
    modal1: '#',
    source: 'https://github.com/d4nQw3rty/gestion_comunitaria/tree/app_modals',
    live: '#',
    skills: ['html', 'css', 'JavaScript', 'ruby', 'rails', 'git', 'github'],

  },
  {
    id: 2,
    mImg: 'img/room-hotel.jpg',
    dImg: 'img/hotel-room-2.jpg',
    orderA: 0,
    orderB: 1,
    title1: 'Hotel Booking App',
    title2: 'Hotel Booking App',
    client1: 'CAPSTONE',
    client2: 'CAPSTONE',
    position1: 'Full Stack Dev',
    position2: 'Full Stack Dev',
    year1: '2023',
    year2: '2023',
    p1: 'A robust and user-friendly solution, featuring an elegant design, to seamlessly manage all aspects of hotel service bookings.',
    p2: 'A robust and user-friendly solution, featuring an elegant design, to seamlessly manage all aspects of hotel service bookings.A daily selection of privately personalized reads; no accounts or sign-ups required.',
    p3: `The hotel services booking platform is a sophisticated and elegant solution, combining powerful
    functionality with a user-friendly interface. With an array of features to help you manage bookings
    and a stunning design to match, it's the ultimate tool for any hotel seeking to streamline its operations
    and deliver exceptional service to its guests`,
    p4: `The hotel services booking platform is a sophisticated and elegant solution, combining powerful
         functionality with a user-friendly interface. With an array of features to help you manage bookings
         and a stunning design to match, it's the ultimate tool for any hotel seeking to streamline its operations
         and deliver exceptional service to its guests`,
    modal1: '#',
    source: 'https://github.com/d4nQw3rty/Marriott-Reservation-Frontend',
    live: 'https://marriott-reservation-frontend.vercel.app/',
    skills: ['html', 'css', 'JavaScript', 'ruby', 'rails', 'react', 'react', 'git', 'github'],

  },
  {
    id: 3,
    mImg: 'img/countries.jpg',
    dImg: 'img/countries-d.jpg',
    orderA: 1,
    orderB: 0,
    title1: 'Countries Stats',
    title2: 'Countries Stats',
    client1: 'CAPSTONE',
    client2: 'CAPSTONE',
    position1: 'Front End Dev',
    position2: 'Front End Dev',
    year1: '2022',
    year2: '2022',
    p1: 'Application with mobile design, which shows the most relevant information of the countries.',
    p2: 'Application with mobile design, which shows the most relevant information of the countries.',
    p3: `This mobile application offers a sleek design and provides users with relevant information about
     different countries, making it both educational and entertaining. Whether you're looking to learn about
      world cultures or simply have fun exploring new destinations, our application has something for everyone..`,
    p4: `This mobile application offers a sleek design and provides users with relevant information about
    different countries, making it both educational and entertaining. Whether you're looking to learn about
     world cultures or simply have fun exploring new destinations, our application has something for everyone..`,
    modal1: '#',
    source: 'https://github.com/d4nQw3rty/south-amican-countries',
    live: 'https://southamerica-countries.netlify.app/',
    skills: ['html', 'css', 'JavaScript', 'react', 'git', 'github'],
  },
  {
    id: 4,
    mImg: 'img/rocket.jpg',
    dImg: 'img/dragon.jpg',
    orderA: 0,
    orderB: 1,
    title1: 'Space Traveler\'s Hub',
    title2: 'Space Traveler\'s Hub',
    client1: 'CAPSTONE',
    client2: 'CAPSTONE',
    position1: 'Front End Dev',
    position2: 'Front End Dev',
    p3: `This application is built with React and Redux and utilizes the SpaceX API to provide users with a seamless experience for reserving rockets, 
    dragons, and joining available missions. Our application offers a user-friendly interface with advanced features, including real-time updates on rocket and dragon availability, 
    detailed mission information, and secure payment processing. With our application, users can easily browse and reserve their desired rocket or dragon and join upcoming missions with ease.`,
    p4: `This application is built with React and Redux and utilizes the SpaceX API to provide users with a seamless experience for reserving rockets, 
    dragons, and joining available missions. Our application offers a user-friendly interface with advanced features, including real-time updates on rocket and dragon availability, 
    detailed mission information, and secure payment processing. With our application, users can easily browse and reserve their desired rocket or dragon and join upcoming missions with ease.`,
    year1: '2022',
    year2: '2022',
    p1: 'Exploring the space and the future, reserve the different rockets or dragons, join a mission and start the jurney to reach other planets.',
    p2: 'Exploring the space and the future, reserve the different rockets or dragons, join a mission and start the jurney to reach other planets.',
    html: 'html',
    css: 'css',
    js: 'JavaScript',
    github: 'github',
    react: 'react',
    git: 'git',
    modal1: '#',
    onOff: 'closePopUp()',
    skills: ['html', 'css', 'JavaScript', 'react', 'git', 'github'],
    live: 'https://space-travelers-hub-phoenix-team.netlify.app/',
    source: 'https://github.com/d4nQw3rty/space-travelers-hub',

  },
  {
    id: 5,
    mImg: 'img/meeting.jpg',
    dImg: 'img/summit.png',
    orderA: 1,
    orderB: 0,
    title1: 'Global Summit',
    title2: 'Global Summit',
    client1: 'CAPSTONE',
    client2: 'CAPSTONE',
    position1: 'Front End Dev',
    position2: 'Front End Dev',
    year1: '2022',
    year2: '2022',
    p1: 'A beautiful responsive application, adaptable to any event or topic.',
    p2: 'A beautiful responsive application, adaptable to any event or topic.',
    p3: 'Abeautiful resposive designed application, flexible and adaptable to any kind of event or topic.',
    p4: 'Abeautiful resposive designed application, flexible and adaptable to any kind of event or topic.',
    modal1: '#',
    skills: ['html', 'css', 'JavaScript', 'git', 'github'],
    live: 'https://d4nqw3rty.github.io/WorldDevelopersEvent2015/',
    source: 'https://github.com/d4nQw3rty/WorldDevelopersEvent2015',
  },
];

const formCheck = document.querySelector('#form');
const errormsg = document.querySelector('#error');
const emailInput = document.querySelector('#email-input');
const nameInput = document.querySelector('#name-input');
const textInput = document.querySelector('#message-input');
const ldownArrow = document.querySelector('#lng-darrow');
const lrightArrow = document.querySelector('#lng-rarrow');
const lgList = document.querySelector('#lg-list');

ldownArrow.addEventListener('click', () => {
  ldownArrow.classList.add('hide-item');
  lrightArrow.classList.add('show-item');
  lrightArrow.classList.remove('hide-item');
  lgList.classList.remove('show-skills');
  lgList.classList.add('hide-skills');
});

lrightArrow.addEventListener('click', () => {
  lrightArrow.classList.add('hide-item');
  lrightArrow.classList.remove('show-item');
  ldownArrow.classList.remove('hide-item');
  lgList.classList.remove('hide-skills');
  lgList.classList.add('show-skills');
});

const fwrkDownArrow = document.querySelector('#fwrk-d-arrow');
const fwrkRightArrow = document.querySelector('#fwrk-r-arrow');
const fwrkList = document.querySelector('#fwrk-list');

fwrkRightArrow.addEventListener('click', () => {
  fwrkRightArrow.classList.add('hide-item');
  fwrkDownArrow.classList.remove('hide-item');
  fwrkList.classList.remove('hide-skills');
  fwrkList.classList.add('show-skills');
});

fwrkDownArrow.addEventListener('click', () => {
  fwrkDownArrow.classList.add('hide-item');
  fwrkRightArrow.classList.remove('hide-item');
  fwrkList.classList.remove('show-skills');
  fwrkList.classList.add('hide-skills');
});

const skillDownArrow = document.querySelector('#skill-d-arrow');
const skillRightArrow = document.querySelector('#skill-r-arrow');
const skillList = document.querySelector('#skill-list');

skillRightArrow.addEventListener('click', () => {
  skillRightArrow.classList.add('hide-item');
  skillDownArrow.classList.remove('hide-item');
  skillList.classList.remove('hide-skills');
  skillList.classList.add('show-skills');
});

skillDownArrow.addEventListener('click', () => {
  skillDownArrow.classList.add('hide-item');
  skillRightArrow.classList.remove('hide-item');
  skillList.classList.remove('show-skills');
  skillList.classList.add('hide-skills');
});

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

const skills = (arr) => {
  let lang = '';
  arr.forEach((item) => {
    lang += `<li class="txt-tags">${item}</li>`;
    return lang;
  });
  return lang;
};

projectInfo.forEach((item) => {
  cards.innerHTML += `<div data-aos-duration="1000" data-aos="zoom-in" class="card order-${item.id - 1} pd-0 mrg-0" id=${item.id}>
    <div class="block-img order-0 dsktp-order-${item.orderA}">
      <img src=${item.mImg} class="mbl-to-hide img-new" alt="image that display a of the project photo" >
      <img src=${item.dImg} class="dsktp-to-hide dsktp-crd-img" alt="image that display a of the project photo">
    </div>
    <div class="block-txt order-1 pd-0 mrg-0 dsktp-order-${item.orderB}">
      <div class="primary-txt order-0">
        <h1 class="pd-0 mrg-0 txt-4 tx mbl-to-hide">${item.title1}</h1>
        <h1 class="pd-0 mrg-0 txt-4-dsktp dsktp-to-hide dsktp-to-show">${item.title2}</h1>
        <ul class="list-stl pd-0 flx-rw mrg-0">
          <li class="txt-5 mbl-to-hide">${item.client1}</li>
          <li class="txt-5-dsktp dsktp-to-hide dsktp-to-show">${item.client2}</li>
          <li><img src="img/Counter.png" alt="A dot image to separate elements"></li>
          <li class="txt-6 txt-6-dsktp mbl-to-hide">${item.position1}</li>
          <li class="txt-6-dsktp dsktp-to-hide dsktp-to-show">${item.position2}</li>
          <li><img src="img/Counter.png" alt="A dot image to separate elements"></li>
          <li class="txt-6 txt-6-dsktp mbl-to-hide">${item.year1}</li>
          <li class="txt-6-dsktp dsktp-to-hide dsktp-to-show">${item.year2}</li>
        </ul>
      </div>
      <p class="mrg-0 txt-7 order-1 mbl-to-hide">${item.p1}</p>
      <p class="mrg-0 txt-7-dsktp order-1 dsktp-to-hide dsktp-to-show">${item.p2}</p>
            
      <ul class="justify-center tags order-2 list-stl flx-rw mrg-0 pd-0">
        ${skills(item.skills, item)}
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
            <li><img src="img/Counter.png" alt="A dot image to separate elements"></li>
            <li class="txt-6 txt-6-dsktp mbl-to-hide">${item.position1}</li>
            <li class="txt-6-dsktp dsktp-to-hide dsktp-to-show">${item.position2}</li>
            <li><img src="img/Counter.png" alt="A dot image to separate elements"></li>
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
            <ul class="justify-center popUpLst">
            ${skills(item.skills, item)}
            </ul>
            <div class="popUpSeparator">
              <img src="img/popUpSeparator.png" alt="Flat line seaprator">
            </div>
            <div class="popUpAction">
              <a type="button" href="${item.live}" target="_blank" rel="noopener noreferrer" class="popUpActionBtn mobile-btn-txt PopUpCloser">See live<img
                  src="img/Normal-Button/Tertiary/seeLive.svg" alt="See live button">
              </a>
              <a type="submit" href="${item.source}" target="_blank" rel="noopener noreferrer" class="popUpActionBtn mobile-btn-txt PopUpCloser">See source<img
                  src="img/Normal-Button/Tertiary/gitHubBlue.png" alt="gitHub image logo">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    }
  });
}

const displayPopUp = document.getElementsByClassName('.displayModal');