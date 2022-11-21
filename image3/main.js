let item = [
  {
    img: "./image/69V42nb.jpg",
    name: "MacBook Pro 14' M1 Max (64GB RAM | 4TB) ",
    price: "USD 4,699 ",
    monney: 4699,
    amount: 0,
  },
  {
    img: "./image/CugpEfY.jpg",
    name: "PS 5",
    price: " USD 599",
    monney: 599,
    amount: 0,
  },
  {
    img: "./image/HgPROm3.jpg",
    name: "Xbox Series X ",
    price: "USD 5,699 ",
    monney: 5699,
    amount: 0,
  },
  {
    img: "./image/XrStrbb.jpg",
    name: "Razer Blade 14 Top spec (2022) ",
    price: "USD 9,699 ",
    monney: 9699,
    amount: 0,
  },
  {
    img: "./image/TaO01Rv.jpg",
    name: "2022 Mac Studio M1 Ultra (128GB RAM | 8TB)",
    price: "USD 12,699 ",
    monney: 12699,
    amount: 0,
  },
  {
    img: "./image/SH7FrjV.jpg",
    name: "Iphone 14 Pro Max - 1TB",
    price: "USD 10,699 ",
    monney: 10699,
    amount: 0,
  },
  {
    img: "./image/LUyQhmF.jpg",
    name: "Nintendo Switch",
    price: "USD 9,699 ",
    monney: 9699,
    amount: 0,
  },
  {
    img: "./image/Kx4cEmk.jpg",
    name: "Mac Pro Top spec (2022) (28 Cores, 8TB SSD, 1TB RAM, 32GB Video)",
    price: "USD 59,699 ",
    monney: 59699,
    amount: 0,
  },
  {
    img: "./image/jImRpPw.jpg",
    name: "AirPods Pro",
    price: "USD 99,699 ",
    monney: 99699,
    amount: 0,
  },
  {
    img: "./image/PXJj7z0.jpg",
    name: "Pro Gaming PC(AMD 5950X, RTX 3090, 64GB, 4TB SSD)",
    price: "USD 99,699 ",
    monney: 99699,
    amount: 0,
  },
];
function showItem(item) {
  let divItem = "";
  for (const i in item) {
    divItem += `
    <div class="infor-item" >
    <img src="${item[i].img}"
    alt="${item[i].img}"">
    <p id="name"> ${item[i].name}</p>
    <span id="price"> ${item[i].price}</span>
    <div class="buyAndSell" data-price >
    <button class="sell-btn"  onclick="tru${i}()">Sell</button>
    <span class="amount${i}"> ${item[i].amount}</span>
    <button class="buy-btn" onclick="cong${i}()" >Buy</button>
    </div>
    </div>
    `;
  }
  document.getElementById("allElements").innerHTML = divItem;
}

showItem(item);
let tien1 = "";
function cong0() {
  tien1 = 4699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount0").innerHTML =
    Number(document.querySelector(".amount0").innerHTML) + 1;
}
function cong1() {
  tien1 = 599 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount1").innerHTML =
    Number(document.querySelector(".amount1").innerHTML) + 1;
}
function cong2() {
  tien1 = 5699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount2").innerHTML =
    Number(document.querySelector(".amount2").innerHTML) + 1;
}
function cong3() {
  tien1 = 9699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount3").innerHTML =
    Number(document.querySelector(".amount3").innerHTML) + 1;
}
function cong4() {
  tien1 = 12699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount4").innerHTML =
    Number(document.querySelector(".amount4").innerHTML) + 1;
}
function cong5() {
  tien1 = 10699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount5").innerHTML =
    Number(document.querySelector(".amount5").innerHTML) + 1;
}
function cong6() {
  tien1 = 9699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount6").innerHTML =
    Number(document.querySelector(".amount6").innerHTML) + 1;
}
function cong7() {
  tien1 = 59699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount7").innerHTML =
    Number(document.querySelector(".amount7").innerHTML) + 1;
}
function cong8() {
  tien1 = 99699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount8").innerHTML =
    Number(document.querySelector(".amount8").innerHTML) + 1;
}
function cong9() {
  tien1 = 99699 + Number(tien1);
  sum(tien1);
  document.querySelector(".amount9").innerHTML =
    Number(document.querySelector(".amount9").innerHTML) + 1;
}

function tru0() {
  if (Number(document.querySelector(".amount0").innerHTML) > 0) {
    tien1 = Number(tien1) - 4699;
    sum(tien1);
    document.querySelector(".amount0").innerHTML =
      Number(document.querySelector(".amount0").innerHTML) - 1;
  }
}
function tru1() {
     if (Number(document.querySelector(".amount1").innerHTML)>0) {
  tien1 = Number(tien1) - 599;
  sum(tien1);
  document.querySelector(".amount1").innerHTML =
    Number(document.querySelector(".amount1").innerHTML) - 1;
     }
}
function tru2() {
     if (Number(document.querySelector(".amount2").innerHTML)>0) {
  tien1 = Number(tien1) - 5699;
  sum(tien1);
  document.querySelector(".amount2").innerHTML =
    Number(document.querySelector(".amount2").innerHTML) - 1;
     }
}
function tru3() {
     if (Number(document.querySelector(".amount3").innerHTML)>0) {
  tien1 = Number(tien1) - 9699;
  sum(tien1);
  document.querySelector(".amount3").innerHTML =
    Number(document.querySelector(".amount3").innerHTML) - 1;
     }
}
function tru4() {
     if (Number(document.querySelector(".amount4").innerHTML)>0) {
  tien1 = Number(tien1) - 12699;
  sum(tien1);
  document.querySelector(".amount4").innerHTML =
    Number(document.querySelector(".amount4").innerHTML) - 1;
     }
}
function tru5() {
     if (Number(document.querySelector(".amount5").innerHTML)>0) {
  tien1 = Number(tien1) - 10699;
  sum(tien1);
  document.querySelector(".amount5").innerHTML =
    Number(document.querySelector(".amount5").innerHTML) - 1;
     }
}
function tru6() {
     if (Number(document.querySelector(".amount6").innerHTML)>0) {
  tien1 = Number(tien1) - 9699;
  sum(tien1);
  document.querySelector(".amount6").innerHTML =
    Number(document.querySelector(".amount6").innerHTML) - 1;
     }
}
function tru7() {
     if (Number(document.querySelector(".amount7").innerHTML)>0) {
  tien1 = Number(tien1) - 59699;
  sum(tien1);
  document.querySelector(".amount7").innerHTML =
    Number(document.querySelector(".amount7").innerHTML) - 1;
     }
}
function tru8() {
     if (Number(document.querySelector(".amount8").innerHTML)>0) {
  tien1 = Number(tien1) - 99699;
  sum(tien1);
  document.querySelector(".amount8").innerHTML =
    Number(document.querySelector(".amount8").innerHTML) - 1;
     }
}
function tru9() {
     if (Number(document.querySelector(".amount9").innerHTML)>0) {
  tien1 = Number(tien1) - 99699;
  sum(tien1);
  document.querySelector(".amount9").innerHTML =
    Number(document.querySelector(".amount9").innerHTML) - 1;
     }
}

function sum(tien) {
  let sum = "";
  if (tien >= 0) {
    sum = Number(sum) + Number(tien);
  }
  document.getElementById("spended").innerHTML = `${(
    (sum / 217000000000) *
    100
  ).toFixed(6)}%`;
  document.getElementById("total").innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
