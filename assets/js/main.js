const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

const rowEl = document.getElementById("js_row");

const getApiImages = () => {
  rowEl.innerHTML = "";
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const { url, title, date } = element;
        const markup = `
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
            
        `;
        rowEl.innerHTML += markup;
      });
    });
};

getApiImages();
