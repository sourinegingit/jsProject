const API_URL="https://63ab0175fdc006ba6052beeb.mockapi.io/shoes/shoes";
const Nike=document.querySelector('#Nike');
const puma=document.querySelector('#puma');
const searchShoes=document.querySelector('#searchShoes')
const searchbtn=document.querySelector('#searchbtn')
const shopList=document.querySelector('#shopList')


async function readProduct(id){
  try{
      const res=await fetch(`https://63ab0175fdc006ba6052beeb.mockapi.io/shoes//${id}`);
      return res.json();
  }catch(e){
      console.log(e.message);
  }
  
  }

// tabler.innerHTML=''
// console.log(shopList)

let newdata



searchShoes.addEventListener('change',(e)=>{
  // console.log(e)
  newdata=data.filter(shoe=>shoe.name.includes(e.target.value))
  addToDom(newdata)
})


// search operation with search button--------------


// searchbtn.addEventListener('click',(e)=>{
//   e.preventDefault()
//   console.log(e.target.parentElement.parentElement.children[0].value)
//   newdata=data.filter(shoe=>shoe.name.includes(e.target.parentElement.parentElement.children[0].value) && shoe)
//   addToDom(newdata)
// })


// end search operation with search button--------------


let data
async function readProducts(){
   try{
    const res=await fetch(API_URL);
    
     data=await res.json();
    
    // console.log(data);
    addToDom(data);
}catch(e){
console.log(e.message);
   }}



Nike.addEventListener

readProducts();
let newpro

function categoryHandler(i){
 newpro=data.filter((shoe)=>{
  return shoe.brand==i})
  console.log(newpro)
 addToDom(newpro)
 
}

function allShoesHandler(){
  addToDom(data)
}
puma.innerHTML+=` <li class="active"><a    onclick="allShoesHandler()" data-toggle="tab">All</a></li> 
<li ><a  onclick="categoryHandler('nike')" href="#men" data-toggle="tab">nike</a></li>
              <li><a  onclick="categoryHandler('puma')" data-toggle="tab">puma</a></li>
              <li><a    onclick="categoryHandler('adidas')" data-toggle="tab">adidas</a></li> 
`

function addToDom(products){
    // console.log(products);
// console.log(products)
    


    Nike.innerHTML="";
 products.forEach(item=>{
  let name=item.name
  
    Nike.innerHTML+=` <li>
    <figure>
      <a class="aa-product-img" href="#"><img style="width:100%;height:100%" src="${item.img}" alt="polo shirt img"></a>
      <a onclick="addToCartHandler(this.parentElement)" class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
      <figcaption>
        <h4 class="aa-product-title"><a href="#">${item.name}</a></h4>
        <h4 class="aa-product-title"><a href="#">${item.brand}</a></h4>
        <span class="aa-product-price">${item.price}</span><span
          class="aa-product-price"><del>$65.50</del></span>
      </figcaption>
    </figure>
    <div class="aa-product-hvr-content">
       <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span
           class="fa fa-heart-o"></span></a>
           <i class="search-btn"  data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></i>                          
    
    </div>    
    

  </li>`
let searchBtnModal=document.querySelectorAll('.search-btn');
// console.log(searchBtnModal);
console.log(searchBtnModal[searchBtnModal.length-1])
if(searchBtnModal[searchBtnModal.length-1]){
  
  searchBtnModal[searchBtnModal.length-1].addEventListener('click',()=>{
console.log('hoiiiiiiii');
detailProduct(item)
})
}


})

}
shopList.innerHTML=""
function addToCartHandler(e){
  let storage=JSON.parse( localStorage.getItem('data'))

 
  // console.log(e.children[2].children[0].children[0].innerHTML )
  shopList.innerHTML+=`
   <li >
                      <a class="aa-cartbox-img" href="#"><img src=${e.children[0].children[0].src} alt="img"></a>
                      <div class="aa-cartbox-info">
                        <h4><a href="#">${e.children[2].children[0].children[0].innerHTML}</a></h4>
                        <p>${e.children[2].children[2].innerHTML}</p>
                      </div>
                      <a onclick="removeHandler('${e.children[2].children[0].children[0].innerHTML}')" class="aa-remove-product" href="#"><span class="fa fa-times"></span></a>
                    </li> 
  `
  localStorage.setItem('data',JSON.stringify( localStorage.getItem('data') ? [...JSON.parse(localStorage.getItem('data')),{name:e.children[2].children[0].children[0].innerHTML,img:e.children[0].children[0].src,price:e.children[2].children[2].innerHTML}]:
  [{name:e.children[2].children[0].children[0].innerHTML,img:e.children[0].children[0].src,price:e.children[2].children[2].innerHTML}]))
  
}
function removeHandler(name){
  let aim
  
  for(let child of shopList.children){
    if (child.children[1].children[0].children[0].innerHTML==name) {
      aim=child
    }
  }
  shopList.removeChild(aim)
  

}




async function detailProduct(product){
  console.log(product);
// const productWithDetails=await readProduct(product.id);
// // console.log(readProduct)
const viewModal=document.querySelector("#aa-product-view-content");
console.log(viewModal);
viewModal.querySelector('#title').innerHTML=product.name;
viewModal.querySelector('#price').innerHTML=product.price;
viewModal.querySelector('#brand').innerHTML=product.brand;
viewModal.querySelector('#pic').innerHTML=product.image;
// console.log('hi')
}




// payment--------------------------
const API_PAY=''
async function pay() {
    const products = await fetch(API_URL)
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const order = {
        name: user.name ,
        address: user.address,
        items: products
    }
   await fetch(API_PAY, {
        method: "POST",
        "Content-Type":"application/json",
        body:JSON.stringify(order)
    })
}

