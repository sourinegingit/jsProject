// let data;
// console.log(data);
let totalprice
let totalExpense
let total=document.querySelectorAll('.totalprice')

total.innerHTML=totalExpense


const orders=document.querySelector('#orders')
// console.log(orders);
orders.innerHTML=''

let value=1
// let lastvalue

function readOrders(){
    data= JSON.parse( localStorage.getItem('data'))
    data.map((el,index)=>{
        orders.innerHTML+=`
        <tr >
        <td ><a onclick="removeHandler('${el.name}')" class="remove" href="#">
            <fa class="fa fa-close"></fa>
          </a></td>
        <td><a  href="#"><img src=${el.img} alt="img"></a></td>
        <td><a class="aa-cart-title" href="#">${el.name}</a></td>
        <td>${el.price}</td>
        <td><input onchange="changeHandler(this)" id="${index}" class="aa-cart-quantity" type="number" value='${value}'></td>
        <td>${totalprice?totalprice:el.price}</td>
        </tr>
        `
    })
  
}
readOrders()
totalExpense=0
for(let child of orders.children){
    console.log(child.children[5].innerHTML);
    totalExpense+= +child.children[5].innerHTML
}
total[0].innerHTML=`${totalExpense}`
total[1].innerHTML=`${totalExpense}`
 

function changeHandler(val,index){
    console.log(val.parentElement.parentElement.children[5]);
    console.log(val.value);
    value=val.value
    val.parentElement.parentElement.children[5].innerHTML=val.value  *data[val.id].price
    
    
     totalExpense=0
    for(let child of orders.children){
        console.log(child.children[5].innerHTML);
        totalExpense+= +child.children[5].innerHTML
    }
    total[0].innerHTML=`${totalExpense}`
    total[1].innerHTML=`${totalExpense}`
}
function removeHandler(name){
    data=data.filter(element=>element.name!=name)
    localStorage.setItem('data',JSON.stringify([...data]))
    // readOrders()
    location.reload();
}
