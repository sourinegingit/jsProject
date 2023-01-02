// const searchModal=document.querySelector('.searchModal');
// const modal_URL="https://63ab0175fdc006ba6052beeb.mockapi.io/shoes/shoes";

// async function readProducts() {
//   searchModal.innerHTML="";
// try {
//   let res=await fetch(`${modal_URL}`);
//   let data=await res.json();
//   data.forEach(addToDom)
// }catch (e) {
//   console.log(e);
// }
// }
// readProducts();

// function searchFunc(item) {
//   console.log(data)
//   searchModal.innerHTML += `
//   <div class="modal-dialog">
//                     <div class="modal-content">
//                       <div class="modal-body">
//                         <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
//                         <div class="row">
//                           <!-- Modal view slider -->
//                           <div class="col-md-6 col-sm-6 col-xs-12">
//                             <div class="aa-product-view-slider">
//                               <div class="simpleLens-gallery-container" id="demo-1">
//                                 <div class="simpleLens-container">
//                                   <div class="simpleLens-big-image-container">
//                                     <a class="simpleLens-lens-image"
//                                       data-lens-image="img/view-slider/large/polo-shirt-1.png">
//                                       <img src="img/1.jpg" class="simpleLens-big-image">
//                                     </a>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <!-- Modal view content -->
//                           <div class="col-md-6 col-sm-6 col-xs-12">
//                             <div class="aa-product-view-content">
//                               <h3 id="title">T-Shirt</h3>
//                               <div class="aa-price-block">
//                                 <span class="aa-product-view-price" id="price">$34.99</span>
//                                 <p class="aa-product-avilability" id="brand">Avilability: <span>In stock</span></p>
//                               </div>
//                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis
//                                 quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
//                               <h4>Size</h4>
//                               <div class="aa-prod-view-size">
//                                 <a href="#">S</a>
//                                 <a href="#">M</a>
//                                 <a href="#">L</a>
//                                 <a href="#">XL</a>
//                               </div>
//                               <div class="aa-prod-quantity">
//                                 <form action="">
//                                   <select name="" id="">
//                                     <option value="0" selected="1">1</option>
//                                     <option value="1">2</option>
//                                     <option value="2">3</option>
//                                     <option value="3">4</option>
//                                     <option value="4">5</option>
//                                     <option value="5">6</option>
//                                   </select>
//                                 </form>
//                                 <p class="aa-prod-category">
//                                   Category: <a href="#">shoes</a>
//                                 </p>
//                               </div>
//                               <div class="aa-prod-view-bottom">
//                                 <a href="#" class="aa-add-to-cart-btn"><span class="fa fa-shopping-cart"></span>Add To
//                                   Cart</a>
//                                 <a href="#" class="aa-add-to-cart-btn">View Details</a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div><!-- /.modal-content -->
//                   </div>`
// }
