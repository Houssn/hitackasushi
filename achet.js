let toggl = document.getElementById("shop");
let mydiv1 = document.getElementById("navbar");

toggl.addEventListener("click" ,function () {
    document.querySelector(".products-container").classList.toggle("active");
})





let confermie = document.querySelector(".cofermie");

confermie.addEventListener("click", ()=>{
  console.log("hi");
  localStorage.clear();
  alert("merci sur commend");
  location.reload();
})
let add = document.querySelectorAll(".btn1");


let products = [
  {
    name: "salad1",
    prix: 100.00,
    num: 0,
  },
  {
    name: "salad2",
    prix: 100.00,
    num: 0,
  },
  {
    name: "salad3",
    prix: 100.00,
    num: 0,
  },
  {
    name: "plat1",
    prix: 100.00,
    num: 0,
  },
  {
    name: "plat2",
    prix: 100,
    num: 0,
  },
  {
    name: "plat3",
    prix: 100,
    num: 0,
  },
  {
    name: "obento1",
    prix: 100,
    num: 0,
  },
  {
    name: "obento2",
    prix: 100,
    num: 0,
  },
  {
    name: "obento3",
    prix: 100,
    num: 0,
  },
];

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", () => {
    cartNumbrs(products[i]);
    totalcost(products[i]);
    location.reload();
  });
}
function onloadecart() {
    let productnumber = localStorage.getItem("cartNumbrs");
    if(productnumber){
        document.querySelector("#shop > span").textContent = productnumber;
    }
}
function cartNumbrs(product) {
    
  let productnumber = localStorage.getItem("cartNumbrs");
 
  productnumber = parseInt(productnumber);

 
  if (productnumber) {
    localStorage.setItem("cartNumbrs", productnumber + 1);
    document.querySelector("#shop > span").textContent =productnumber + 1;
  } else {
    localStorage.setItem("cartNumbrs", 1);
    document.querySelector("#shop > span").textContent = 1;
  }
  setItems(product)
}

function setItems (product){
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].num += 1;
    }else{
           product.num = 1;
         cartItems = {
        [product.name]: product
        }

    }


    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}
 function totalcost(product) {
    let cartconst = localStorage.getItem("totalcost");
  if(cartconst != null){
    cartconst = parseInt(cartconst);
     localStorage.setItem("totalcost", cartconst + product.prix);
  }else {
    localStorage.setItem("totalcost", product.prix);
  }
   
 }
 function displaycart() {
  let cartconst = localStorage.getItem("totalcost");
   let cartItems = localStorage.getItem("productsIncart");
   cartItems =JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
   if(cartItems && productContainer) {
       
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div id="cartachat">
        <div class="product">
        <svg class="icon" width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 6 6 18"></path>
  <path d="m6 6 12 12"></path>
</svg>  
        <img src="./imgs/plats.jpg" width="25px">
         <span>${item.name}</span>
        </div>
        <div class="price">${item.prix} </div>
        <div class="quantite">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
        <path d="M12 8v8"></path>
        <path d="M8 12h8"></path>
      </svg>
      <span>${item.num}</span>
      <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
  <path d="M8 12h8"></path>
</svg>
        </div>
       
        <div class="total">
            ${item.num * item.prix}
        </div> 
        </div>
        `
      })

      productContainer.innerHTML +=`
      <div class="basketTotalTitle">
      <h4 class="basketTotalTitele">
      total :
      </h4>
      <h4 class="basketTotal">
      $${cartconst}
      </h4>
      </div>
      `

   }
 }



onloadecart();

displaycart();
