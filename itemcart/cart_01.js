const cart = [];

const product= [
  {
    "image": "./Ao_01.jpg",
    "title": "Đồ bộ cho cún cưng",
    "price": 290
  },
  {
    "image": "./Ao_02.jpg",
    "title": "Đồ bộ nâu hình gấu",
    "price": 300
  },
  {
    "image": "./Ao_05.jpg",
    "title": "Rọ mõm an toàn",
    "price": 190
  },
  {
    "image": "./Ao_07.jpg",
    "title": "Đai lưng",
    "price": 255
  },
  {
    "image": "./Ao_09.jpg",
    "title": "Dây dắt chó bền bỉ - nâu",
    "price": 255
  },
  {
    "image": "./Ao_10.jpg",
    "title": "Đai dắt chó bền bỉ - đỏ",
    "price": 276
  },
  {
    "image": "./Ao_11.jpg",
    "title": "Đai dắt chó bền bỉ - đen",
    "price": 278
  },
  {
    "image": "./Ao_12.jpg",
    "title": "Vòng xích cổ",
    "price": 318
  },
  {
    "image": "./Ao_13.jpg",
    "title": "Áo và dây dắt - xanh",
    "price": 189
  },
  {
    "image": "./Ao_14.jpg",
    "title": "Áo và dây dắt - nâu",
    "price": 346 
  },
  {
    "image": "./Ao_15.jpg",
    "title": "Áo và dây dắt - cà phê",
    "price": 155 
  },
  {
    "image": "./Ao_16.jpg",
    "title": "Áo và dây dắt",
    "price": 130  
  },
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

