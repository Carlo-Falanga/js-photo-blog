const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

const rowEl = document.getElementById("js_row");
const overlayBtnEl = document.getElementById('js_overlay_btn');
const overlayImgEl = document.getElementById('js_overlay_img')
const overlayEl = document.querySelector('.overlay')

// console.log(overlayBtnEl, overlayImgEl, overlayEl, cardImgEl);


const initGallery = () => {
  rowEl.innerHTML = "";
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const { url, title, date } = element;
        const markup = 
        `
         <div class="col position-relative">
            <img class="pin" src="./assets/img/pin.svg" alt="" />
            <div class="card rounded-0 shadow">
              <img src="${url}" class="card-img-top pt-3 px-3" alt="..." />
              <div class="card-body">
                <p class="cards_text card-text mb-0 text-secondary fw-medium">${date}</p>
                <h5 class="cards_title card-title text-uppercase fw-bolder mb-0">${title}</h5>
              </div>
            </div>
        </div>  
        ` ;
        rowEl.innerHTML += markup;
      });
    });
};

initGallery();

rowEl.addEventListener('click', (e) =>{
  console.log(e.target);
  if(e.target.classList.contains('card-img-top')){
    overlayEl.classList.remove("d-none")
  }
})

overlayBtnEl.addEventListener('click', ()=>{
  overlayEl.classList.add("d-none")
})
