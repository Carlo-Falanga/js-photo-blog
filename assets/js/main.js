const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

const rowEl = document.getElementById('js_row')

const getApiImages = () =>{
    rowEl.innerHTML = ''
    fetch(endpoint)
    .then(res=>res.json())
    .then(data=> {
    
        data.forEach(element=>{
            const {url} = element
            const markup = `
                    <div class="col position-relative">
                <img class="pin" src="./assets/img/pin.svg"  alt="" />
                <div class="card rounded-0">
                  <img
                    src="${url}"
                    class="card-img-top pt-3 px-3"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text pb-3">
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              `
              console.log(markup);
              
              rowEl.innerHTML += markup
        })
    })
}

getApiImages()
