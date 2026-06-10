/*
========================================
      صفحة تفاصيل المنتج
========================================
*/


/*
جلب المنتج المحفوظ
من Local Storage
*/
const product =
JSON.parse(

    localStorage.getItem(
        "selectedProduct"
    )

);


/*
الحصول على الحاوية
*/


const detailsContainer =
document.getElementById(
    "detailsContainer"
);


/*
إذا كان هناك منتج محفوظ
*/
if(product)
{

    /*
    إنشاء محتوى الصفحة
    */
    detailsContainer.innerHTML = `

        <div class="details-card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <h2>

                ${product.name}

            </h2>

            <h3>

                السعر : ${product.price}

            </h3>

            <p>

                المواصفات :

                ${product.description}

            </p>

            <button
            onclick="buyProduct()">

                شراء المنتج

            </button>

        </div>
    


<br><br>

<button
onclick="addToCart(${product.id})">
إضافة للسلة
</button>

    `;


    

}




/*
========================================
      دالة شراء المنتج
========================================
*/

function buyProduct()
{

    /*
    رسالة للمستخدم
    */
    alert(

        "شكراً لك، تم إرسال طلب الشراء بنجاح."

    );

}
/*
=========================
إضافة منتج للسلة
=========================
*/

function addToCart(productId)
{
    const product =
    currentProducts.find(item =>
    item.id === productId);

    let cart =
    JSON.parse(
    localStorage.getItem("cart"))
    || [];

    cart.push(product);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    alert("تمت إضافة المنتج إلى السلة");
}