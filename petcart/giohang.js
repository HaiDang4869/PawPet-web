const cart = [];

const product= [
  {
    "image": "./meoaicap.jpg",
    "title": "Mèo Ai Cập",
    "price": 12000000
  },
  {
    "image": "./meoanhlongdai.jpg",
    "title": "Mèo Anh lông dài",
    "price": 3000000
  },
  {
    "image": "./meobatu.jpg",
    "title": "Mèo Ba Tư",
    "price": 10000000
  },
  {
    "image": "./meochanngan.jpg",
    "title": "Mèo chân ngắn",
    "price": 2000000
  },
  {
    "image": "./meomop.jpg",
    "title": "Mèo mướp",
    "price": 200000
  },
  {
    "image": "./meomun.jpg",
    "title": "Mèo Mun",
    "price": 1000000
  },
  {
    "image": "./meoradoll.jpg",
    "title": "Mèo Radoll",
    "price": 15000000
  },
  {
    "image": "./meovang.png",
    "title": "Mèo vàng",
    "price": 200000
  },
  {
    "image": "./meoxiem.jpg",
    "title": "Mèo xiêm",
    "price": 3000000
  },
  {
    "image": "./choalatka.jpg",
    "title": "Chó Alaska",
    "price": 10000000
  },
  {
    "image": "./chochiquaqua.jpg",
    "title": "Chó Chihuahua",
    "price": 5000000 
  },
  {
    "image": "./choxucxich.jpg",
    "title": "Chó Hotdog",
    "price": 2000000  
  },
  {
    "image": "./chohussky.jpg",
    "title": "Chó Husky",
    "price": 7000000
  },
  {
    "image": "./chohatde.jpg",
    "title": "Chó hạt dẻ",
    "price": 8000000 
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
        <p class="card-text">${item.item.price} VND  </p>
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

