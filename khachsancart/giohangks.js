const cart = [];

const product= [
  {
    "image": "./chuongchosize10kg.jpg",
    "title": "Phòng thường 10kg",
    "price": 150000
  },
  {
    "image": "./chuongchosize20kg.jpg",
    "title": "Phòng thường 20kg",
    "price": 200000
  },
  {
    "image": "./chuongchosize30kg.jpg",
    "title": "Phòng thường 30kg",
    "price": 250000
  },
  {
    "image": "./phongvip10kg.jpeg",
    "title": "Phòng vip 10kg",
    "price": 300000
  },
  {
    "image": "./phongvip20kg.jpg",
    "title": "Phòng vip 20kg",
    "price": 400000
  },
  {
    "image": "./phongvip30kg.jpg",
    "title": "Phòng vip 30kg",
    "price": 500000
  }
  
]
const categories=[...new Set(product.map((item)=>{return item}))]
let i=0
document.getElementById('root').innerHTML=categories.map((item, i)=>{
    var{image,title,price}=item;
    return `<div class='box'>
        <div class='img-box'>
        <img class='image' src=${image}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2> ${price}.00 VND</h2>`+
            "<button onclick='addtocard("+(i++)+")'>Add to card</button>"+
            `</div></div>`;
}).join('')

function addtocard(index) {
  const itemIndex = cart.findIndex(item => item.item == product[index]);
  if (itemIndex < 0) {
    cart.push({
      count: 1,
      item: product[index]
    });
  } else {
    cart[itemIndex].count++;
  }
  console.log(cart);
  renderCart();
}

function renderCart() {
  const div = document.getElementById("carditem");
  div.innerHTML = cart.map((item, i) => {
    return `<div class="card id=${i}">
      <div class="card-body">
      <img class="hinhanh" src="${item.item.image}"></img>
        <h5 class="card-title">${item.item.title}</h5>
        <p class="card-text">${item.item.price}VND  </p>
        <div class="themgiam">
        <button class="cainut " onclick="itemCount(0,${i})">+</button>
        <p class="card-text">${item.count}</p>
        <button class="cainut " onclick="itemCount(1,${i})">-</button>
        </div>
        <button class="nutxoa right" onclick="removeItem(${i})">Remove</button>
      </div>
    </div>`;
  }).join('');
  const cartTotal = cart.reduce((total, item) => {
    return total + item.item.price * item.count;
  }, 0);
  document.getElementById("total").innerHTML = cartTotal + " VND";
  document.getElementById("count").innerHTML = cart.length;
}

function removeItem(index){
//  var item = document.getElementsByClassName("card")[index];
//  cart[index].count = 0;
//  item.remove();
 cart.splice(index,1)
 renderCart()
}

function itemCount(type, index){
  // var item = document.getElementsByClassName("card")[index];

  // var itemcount = item.getElementsByTagName("p")[1];
  if(type == 0)
  {
      cart[index].count++;
  }
  else
  {
      cart[index].count--;
  }



  // itemcount.innerHTML = cart[index].count;

  if(cart[index].count == 0){
    // item.remove();
    cart.splice(index,1)
  }
    renderCart()
}


renderCart();

