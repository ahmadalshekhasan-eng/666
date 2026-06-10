


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

    `;

}




function buyProduct()
{

    /*
    رسالة للمستخدم
    */
    alert(

        "شكراً لك، تم إرسال طلب الشراء بنجاح."

    );

}