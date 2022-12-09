// function reload(){
//   location.reload;
// }

let add = document.querySelectorAll(".btn1");


let products = [
  {
    name: "naruto",
    prix: 150.00,
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
 
        <img src="./imgs/plats.jpg" width="25px">
         <span>${item.name}</span>
        </div>
        <div class="price">${item.prix} </div>
        <div class="quantite">
        
      <span>${item.num}</span>
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
function confermie(){
  console.log("hi");
  localStorage.clear();
  alert("merci sur commend");
  location.reload();
  
}
function submet(){
  alert("thanks for our message");
  location.reload();
}


onloadecart();
displaycart();
