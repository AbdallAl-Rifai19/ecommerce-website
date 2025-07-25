// Fetch Data
fetch('products.json')
.then(response=> response.json())
.then(data=>{
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

// discount Products
const swaper_item_sale = document.getElementById('swaper-item-sale');
const swaper_electronic = document.getElementById('swaper-electronic');

const swaper_appliances = document.getElementById('swaper-appliances');

const swaper_mobiles = document.getElementById('swaper-mobiles');


data.forEach(product =>{
  if(product.old_price){

    const isInCart = cart.some(cartItem =>cartItem.id == product.id);

    // التقريب اللي اقرب رقم
    const discount = Math.floor((product.old_price - product.price) / product.old_price * 100);


    swaper_item_sale.innerHTML += `
    <div class="swiper-slide product">
            <span class="sale-present">%${discount}</span>

            <div class="img-product">
              <a href="#"><img src="${product.img}" alt=""></a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name-product"><a href="#">${product.name}</a></p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              <p class="old">$${product.old_price}</p>
            </div>

            <div class="icons">
              <span class="btn-add-cart ${isInCart? 'active': ""}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i> ${isInCart? 'Item In Cart': "Add To Cart"}
              </span>

              <span class="icon-product"><i class="fa-regular fa-heart"></i></span>

            </div>
          </div>


    `
    
  }

});

data.forEach(product =>{
  if(product.catetory == 'electronics'){
    const isInCart = cart.some(cartItem =>cartItem.id == product.id);

    const old_price_Pargraph = product.old_price? `<p class="old">$${product.old_price}</p>`: "";

     const discount = Math.floor((product.old_price - product.price) / product.old_price * 100);

    const discountPercent = product.old_price? `<span class="sale-present">%${discount}</span>`: "";

     

     swaper_electronic.innerHTML += `
    <div class="swiper-slide product">
            ${discountPercent}

            <div class="img-product">
              <a href="#"><img src="${product.img}" alt=""></a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name-product"><a href="#">${product.name}</a></p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_Pargraph}
            </div>

            <div class="icons">
               <span class="btn-add-cart ${isInCart? 'active': ""}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i> ${isInCart? 'Item In Cart': "Add To Cart"}
              </span>

              <span class="icon-product"><i class="fa-regular fa-heart"></i></span>

            </div>
          </div>


    `
  }
});

data.forEach(product =>{
  if(product.catetory == 'appliances'){
    const isInCart = cart.some(cartItem =>cartItem.id == product.id);

    const old_price_Pargraph = product.old_price? `<p class="old">$${product.old_price}</p>`: "";

     const discount = Math.floor((product.old_price - product.price) / product.old_price * 100);

    const discountPercent = product.old_price? `<span class="sale-present">%${discount}</span>`: "";

     

     swaper_appliances.innerHTML += `
    <div class="swiper-slide product">
            ${discountPercent}

            <div class="img-product">
              <a href="#"><img src="${product.img}" alt=""></a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name-product"><a href="#">${product.name}</a></p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_Pargraph}
            </div>

            <div class="icons">
               <span class="btn-add-cart ${isInCart? 'active': ""}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i> ${isInCart? 'Item In Cart': "Add To Cart"}
              </span>

              <span class="icon-product"><i class="fa-regular fa-heart"></i></span>

            </div>
          </div>


    `
  }
});

data.forEach(product =>{
  if(product.catetory == 'mobiles'){
    const isInCart = cart.some(cartItem =>cartItem.id == product.id);

    const old_price_Pargraph = product.old_price? `<p class="old">$${product.old_price}</p>`: "";

     const discount = Math.floor((product.old_price - product.price) / product.old_price * 100);

    const discountPercent = product.old_price? `<span class="sale-present">%${discount}</span>`: "";

     

     swaper_mobiles.innerHTML += `
    <div class="swiper-slide product">
            ${discountPercent}

            <div class="img-product">
              <a href="#"><img src="${product.img}" alt=""></a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name-product"><a href="#">${product.name}</a></p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_Pargraph}
            </div>

            <div class="icons">
              <span class="btn-add-cart ${isInCart? 'active': ""}" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i> ${isInCart? 'Item In Cart': "Add To Cart"}
              </span>

              <span class="icon-product"><i class="fa-regular fa-heart"></i></span>

            </div>
          </div>


    `
  }
});

});



