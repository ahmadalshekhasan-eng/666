
const params =
new URLSearchParams(window.location.search);

const category =
params.get("category");


/*
مصفوفة المنتجات الحالية
*/
let currentProducts =
products[category];


/*
حاوية عرض المنتجات
*/
const container =
document.getElementById("productsContainer");



const counter =
document.getElementById("productCount");


/*
دالة عرض المنتجات
*/
function displayProducts(productList)
{

  
    container.innerHTML = "";


    counter.innerHTML =
    "عدد المنتجات : " +
    productList.length;


    productList.forEach(product =>
    {

        /*
        إنشاء بطاقة المنتج
        */
        const card =
        document.createElement("div");

        card.classList.add("product-card");


        card.innerHTML = `

            <img
            src="${product.image}"
            alt="${product.name}">

            <h3>

                ${product.name}

            </h3>

            <p>

                ${product.price}

            </p>

            <button
            onclick="showDetails(${product.id})">

                عرض التفاصيل

            </button>

        `;


        container.appendChild(card);

    });

}



displayProducts(currentProducts);




function searchProducts()
{

    const searchText =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();


    const filteredProducts =
    currentProducts.filter(product =>

        product.name
        .toLowerCase()
        .includes(searchText)

    );


   
    displayProducts(filteredProducts);

}




function showDetails(productId)
{

    /*
    البحث عن المنتج
    */
    const selectedProduct =
    currentProducts.find(product =>

        product.id === productId

    );


    
    localStorage.setItem(

        "selectedProduct",

        JSON.stringify(selectedProduct)

    );


    /*
    الانتقال لصفحة التفاصيل
    */
    window.location.href =
    "details.html";

}