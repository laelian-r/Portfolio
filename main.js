document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal-close');
  const images = document.querySelectorAll('.article-image');

  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      modal.classList.add('open');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    modalImg.src = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      modalImg.src = '';
    }
  });
});


// carrousel

const next = document.querySelector('#button-next');
const imageCarrousel = document.querySelector('#image-carrousel');
const prev = document.querySelector('#button-prev');
let counter = 0;

const images = [
  {
    "img": "g404.jpg",
    "name": "Garage404",
  },
  {
    "img": "eden-school.jpg",
    "name": "EDEN School",
  }
];

function inner(e) {
  imageCarrousel.innerHTML =`
    <img src="./public/assets/images/parcours/${images[e].img}" alt="${images[e].name}" class="carrousel-picture"/>
    <div class="bg-carrousel">
      <h3>${images[e].name}</h3>
    </div>
  `;
}
inner(counter);

next.addEventListener('click', () => {
  ++counter;
  
  if(counter === images.length) {
    counter = 0;
  }

  inner(counter);
});

prev.addEventListener('click', () => {
  if(counter === 0) {
    counter = images.length - 1;
  } else {
    --counter;
  }

  inner(counter);
});