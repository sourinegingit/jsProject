const API="https://63aaa498fdc006ba6047c407.mockapi.io/address2";
const main=document.querySelector('.main')
let data;
console.log(API)
async function readProducts() {
    main.innerHTML="";
try {
    let res=await fetch(`${API}`);
     data=await res.json();
    data.forEach(addToDom)
}catch (e) {
    console.log(e);
}
}
readProducts();

function addToDom(item) {
    console.log(data)
main.innerHTML += ` <div class="card" style="padding: 0 2rem">
            <div class="l">
                <img src="img/firstShoes.jpg" height="50px" width="50px">
               <div style="display:flex;flex-direction: column">
                   <span id="place">${item.address}</span>
                   <p id="address">${item.place}</p>
               </div>
            </div>
            <div class="r">
                <input type="radio">
            </div>`
}

