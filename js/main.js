let categoryNavList =  document.querySelector('.category-nav-list');
function openCategoryList() {
  categoryNavList.classList.toggle('active');
}


var cart = document.querySelector('.cart');
function open_close_cart() {
  cart.classList.toggle('active');
}


// Open Menu
let navLinks = document.querySelector('.nav-links');

function openMenu() {
  navLinks.classList.toggle("active");

}


// fetch data from json

fetch('products.json')
.then((response)=> response.json())
.then((data)=>{
  const addToCartButtons = document.querySelectorAll('.btn-add-cart');

  addToCartButtons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
      const productId = event.target.getAttribute('data-id');

      selectedProduct = data.find((product)=> product.id == productId);
      console.log(selectedProduct);

      // add product to cart
      addToCart(selectedProduct);

      const AllmatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);

      AllmatchingButtons.forEach((btn)=>{
        btn.classList.add('active');
        btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in Cart`;

      });
      

    });
  });
  
  
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push({...product , Quantity: 1});
  
  // add to localstorage
  localStorage.setItem('cart' , JSON.stringify(cart));

  updateCart();
}

function updateCart(){
  const cart_items = document.getElementById('cart-items');
  cart_items.innerHTML = '';

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const checkoutItems = document.getElementById('checkout-items');

  if(checkoutItems ){
    checkoutItems.innerHTML = '';
  }

  var totalPrice = 0 ;
  var totalCount = 0;


  cart.forEach((item , index)=>{
    let totalPriceItem = item.price * item.Quantity;
    totalPrice += totalPriceItem ;
    totalCount += item.Quantity ;
    
    cart_items.innerHTML += `
    <div class="item-cart">
        <img src="${item.img}" alt="">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price-cart">$${totalPriceItem}</p>
          <div class="quantity-control">
            <button class="decrease-quantity" data-index="${index}">&minus;</button>
            <span class="quantity">${item.Quantity}</span>
            <button class="increase-quantity" data-index="${index}">&plus;</button>
          </div>
        </div>

        <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
      
      </div>
    `

    if(checkoutItems) {
      checkoutItems.innerHTML += `
       <div class="item-cart">
        <div class="img-name">
                <img src="${item.img}" alt="">
                <div class="content">
                  <h4>${item.name}</h4>
                  <p class="peice-cart">$${totalPriceItem}</p>
                  <div class="quantity-control">
                    <button class="decrease-quantity" data-index="${index}">&minus;</button>
                    <span class="quantity">${item.Quantity}</span>
                    <button class="increase-quantity" data-index="${index}">&plus;</button>
                  </div>
                </div>
              </div> 

              <button class="delete-item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>

             
       </div>
      `;
    }




  })



  const priceCartTotal = document.querySelector(".price-cart-total");
  const countItemCart = document.querySelector(".count-item-cart");
  const countItemHeader  = document.querySelector(".count-item-header");





  priceCartTotal.innerHTML = `$${totalPrice}`;
  countItemCart.innerHTML = `${totalCount}`;
  countItemHeader.innerHTML = `${totalCount}`;


  if(checkoutItems) {
    const subTotalCheckout = document.querySelector('.sub-total-checkout');
    const totalCheckout = document.querySelector('.total-checkout');

    subTotalCheckout.innerHTML = `$${totalPrice}` ;
    totalCheckout.innerHTML = `$${totalPrice + 20}`;
  }

  // increase and decrease ;

  const  increaseButtons = document.querySelectorAll('.increase-quantity');
  const decreaseButtons = document.querySelectorAll('.decrease-quantity');

  increaseButtons.forEach((button)=>{
    button.addEventListener('click' , (event)=>{
      const itemIndex = event.target.getAttribute('data-index');
      increaseQuantity(itemIndex);

    });

  });
  decreaseButtons.forEach((button)=>{
    button.addEventListener('click' , (event)=>{
      const itemIndex = event.target.getAttribute('data-index');
      decreaseQuantity(itemIndex);

    });

  });

  const deleteButtons = document.querySelectorAll('.delete-item');
  deleteButtons.forEach((button)=>{
    button.addEventListener('click' , (event)=>{
      const itemIndex = event.target.closest('button').getAttribute('data-index');
      removeFromecart(itemIndex) ;
    })
  })

}


// increase Quantity
function increaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart[index].Quantity += 1;
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCart();
}
// decrease Quantity
function decreaseQuantity(index) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if(cart[index].Quantity > 1){
      cart[index].Quantity -= 1;

  }
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCart();

}

function removeFromecart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const removeProduct = cart.splice(index , 1)[0] ;
  localStorage.setItem('cart' , JSON.stringify(cart));
  updateCart();
  updateButtonsState(removeProduct.id);

}

function updateButtonsState(productId) {
  const AllmatchingButtons = document.querySelectorAll(`.btn-add-cart[data-id="${productId}"]`);
  AllmatchingButtons.forEach((button)=>{
    button.classList.remove('active');
     button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add To Cart`;
  })


}
updateCart();
