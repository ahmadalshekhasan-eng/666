/*
====================================
      صفحة عرض المنتجات
====================================
*/


/*
جلب القسم المختار من الرابط

مثال:

products.html?category=laptops

سنحصل على laptops
*/

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


/*
عنصر عداد المنتجات
*/
const counter =
document.getElementById("productCount");


/*
دالة عرض المنتجات
*/
function displayProducts(productList)
{

    /*
    تنظيف الحاوية
    */
    container.innerHTML = "";


    /*
    تحديث العداد
    */
    counter.innerHTML =
    "عدد المنتجات : " +
    productList.length;


    /*
    المرور على جميع المنتجات
    */
    productList.forEach(product =>
    {

        /*
        إنشاء بطاقة المنتج
        */
        const card =
        document.createElement("div");

        card.classList.add("product-card");


        /*
        محتوى البطاقة
        */
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


        /*
        إضافة البطاقة للصفحة
        */
        container.appendChild(card);

    });

}


/*
عرض المنتجات عند فتح الصفحة
*/
displayProducts(currentProducts);



/*
====================================
      البحث عن المنتجات
====================================
*/

function searchProducts()
{

    /*
    النص الذي كتبه المستخدم
    */
    const searchText =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();


    /*
    تصفية النتائج
    */
    const filteredProducts =
    currentProducts.filter(product =>

        product.name
        .toLowerCase()
        .includes(searchText)

    );


    /*
    عرض النتائج
    */
    displayProducts(filteredProducts);

}



/*
====================================
      الانتقال للتفاصيل
====================================
*/

function showDetails(productId)
{

    /*
    البحث عن المنتج
    */
    const selectedProduct =
    currentProducts.find(product =>

        product.id === productId

    );


    /*
    حفظ المنتج داخل LocalStorage
    */
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