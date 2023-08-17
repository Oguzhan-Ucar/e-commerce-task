let sayac = 0;
let selectedProduct= "./images/img1.png";
let selectedImageCard = document.getElementById("selected-image-element");
let selectedTitle = document.getElementById("selected-title");
let badge = document.getElementById("badge");
let cardsContainer = document.getElementById("cards-container");

const products = [
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
  {
    image: "images/bej.png",
    title: "ERKEK 7-9 YAŞ HAM CEKET - BEJ",
    price: "7.75$",
    originalPrice: "8.75$",
    availableSizes: "7-8-9 YAŞ",
  },
];

products.forEach((element,index) => {
  cardsContainer.innerHTML += 
   `
    <div id="cards">
    <div class="card" style="width: 18rem;height:15rem">
      <img src="${element.image}" class="card-img-top" id="selected-image-element-${index}" alt="bej" style="width: 18rem;height:15rem" >
    </div>
    <div class="card-body">
      <h5 class="card-title"><strong>${element.price + " "}</strong><del style="color: gray;">${element.originalPrice}</del></h5>
      <p class="card-text" id="selected-title-${index}">${element.title}</p>
      <P style="margin-top:-15px">${element.availableSizes}</P>
      <div id="imagesdiv">
        <div class="images" onClick="changeSelectedProduct('images/bej.png',${index})">
          <img src="images/bej.png" alt="">
          <p style="font-size:9px">BEJ</p>
        </div>
        <div class="images" onClick="changeSelectedProduct('images/siyah.jpg',${index})">
          <img src="images/siyah.jpg" alt="">
          <p  style="font-size:9px">SİYAH</p>
        </div>
        <div class="images" onClick="changeSelectedProduct('images/lacivert.jpg',${index})">
          <img src="images/lacivert.jpg" alt="">
          <p  style="font-size:9px">LACİVERT</p>
        </div>
      </div>
    
      <div class="product-box">
        <div class="btn-group">
          <button class="btn btn-danger btn-sm" onclick="sayacazalt(${index})">-</button>
          <span class="form-control sayac" id="sayac-${index}">0</span>
          <button class="btn btn-success btn-sm" onclick="sayacartır(${index})">+</button>
          <button id="sepeteekle" class="btn btn-primary btn-sm" onclick="sepeteekle(${index})">Sepete Ekle</button>
        </div>
      </div>
    </div>
  </div>
    `

  
});


// Miktarı azaltan fonksiyon
function sayacazalt(index) {
    if(+document.getElementById(`sayac-${index}`).textContent>0){
      document.getElementById(`sayac-${index}`).textContent = +document.getElementById(`sayac-${index}`).textContent -1
  }
}

// Miktarı artıran fonksiyon
function sayacartır(index) {
    document.getElementById(`sayac-${index}`).textContent = +document.getElementById(`sayac-${index}`).textContent +1  
}

// Ürünü sepete ekleyen fonksiyon
function sepeteekle(index) {
  sayac += +document.getElementById(`sayac-${index}`).textContent
  badge.innerText = sayac;
  document.getElementById(`sayac-${index}`).innerText = "0";
  alert(`${sayac} adet Ürün  sepete eklendi!`);
}
 
function changeSelectedProduct(productName,index){
  selectedProduct = productName;
  console.log(selectedProduct,"selectedProduct")
  let selectedImageCard = document.getElementById(`selected-image-element-${index}`);
  selectedImageCard.setAttribute("src",productName)
  let selectedTitle = document.getElementById(`selected-title-${index}`);
  if(productName==='images/bej.png'){
    selectedTitle.innerText = "ERKEK 7-9 YAŞ HAM CEKET - BEJ"
  }
  if(productName==='images/siyah.jpg'){
    selectedTitle.innerText = "ERKEK 7-9 YAŞ HAM CEKET - SİYAH"
  }
  if(productName==='images/lacivert.jpg'){
    selectedTitle.innerText = "ERKEK 7-9 YAŞ HAM CEKET - LACİVERT"
  }
}


function showProductName(productName){
  if( productName === "images/bej.png"){
   return "Bej Ceket"
  }
  if( productName === "images/siyah.jpg"){
    return "Siyah Ceket"
  }
  if( productName === "images/lacivert.jpg"){
    return "Lacivert Ceket"
  }
}


const clearCart = () =>{
  const result = confirm("Sepet Boşaltılsın mı?")
  if(result){
    sayac = 0;
    badge.innerText = 0;
  }
}