const cart = [];

const product= [
  {
    "image": "./pedigree3.jpg",
    "title": "Pedigree sốt bò",
    "price": 290
  },
  {
    "image": "./product_01.jpg",
    "title": "Hương vị thịt gà",
    "price": 300
  },
  {
    "image": "./product_02.jpg",
    "title": "Hương vị thịt bò",
    "price": 190
  },
  {
    "image": "./product_03.jpg",
    "title": "Hương vị thịt cừu",
    "price": 255
  },
  {
    "image": "./product_04.jpg",
    "title": "Hương vị bò nướng",
    "price": 255
  },
  {
    "image": "./product_05.jpg",
    "title": "Hương vị cá hồi tươi",
    "price": 276
  },
  {
    "image": "./product_06.jpg",
    "title": "Venison cao cấp",
    "price": 278
  },
  {
    "image": "./whiskas.jpg",
    "title": "Whiskas mới",
    "price": 318
  },
  {
    "image": "./minimo.jpg",
    "title": "Minino chất lượng",
    "price": 189
  },
  {
    "image": "./meo2.jpg",
    "title": "Thức ăn mèo Me-O",
    "price": 346 
  },
  {
    "image": "./pate_01.png",
    "title": "Meow Mix bánh mì",
    "price": 155 
  },
  {
    "image": "./pate_02.jpg",
    "title": "Aatas Cat vị cá ngừ và thịt bò",
    "price": 130  
  },
  {
    "image": "./pate_03.jpg",
    "title": "Aatas Cat vị cá ngừ và Tilapia",
    "price": 172 
  },
  {
    "image": "./pate_04.png",
    "title": "Sữa dê cho bé mèo",
    "price": 145  
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
            <h2>${price},000</h2>`+
            "<button onclick='addtocard("+(i++)+")'>Chọn mua</button>"+
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
      <img class="hinhsp" src="${item.item.image}"></img>
        <h5 class="card-title">${item.item.title}</h5>
        <p class="card-text">${item.item.price},000 </p>
        <div class="themgiam">
        <button class="cainut " onclick="itemCount(1,${i})">-</button>
		<p class="card-text">${item.count}</p>
		<button class="cainut " onclick="itemCount(0,${i})">+</button>
        
        </div>
        <button class="nutxoa right" onclick="removeItem(${i})">Xóa</button>
      </div>
    </div>`;
  }).join('');
  const cartTotal = cart.reduce((total, item) => {
    return total + item.item.price * item.count;
  }, 0);
  document.getElementById("total").innerHTML = cartTotal + ",000 VNĐ";
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

