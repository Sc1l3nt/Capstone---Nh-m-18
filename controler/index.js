// Carousel
(function getAllProduct(id) {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    });

    promise.then(function (res) {
        console.log('res');
        renderCarousel2(res.data.content, 2);
    });

    promise.catch(function (err) {
        console.log('err:', err);
    });
})();

function renderCarousel1(arrProduct, number) {
    let product = [];
    for(let index = 0; index <= number; index++){
        product.push(arrProduct[index]);
    }
    let htmlCarousel = product.reduce((html, item) => {
        html += `
            <div>
                <div class="item" id="0">
                    <div class="w-100"><img class="w-75" style="margin-top: -10%;" src="${item.image}"></div>
                    <div class="info">
                        <h3>${item.name}</h3>
                        <p>${item.shortDescription}</p>
                        <a href="./detail.html?productid=${item.id}">Buy now</a>
                    </div>
                </div>
            </div>
        `;
        return html;
    }, '');
    document.getElementById(`carousel-slick`).innerHTML = htmlCarousel;
}

function renderCarousel2(arrProduct, number) {
    let product = [];
    for(let index = 0; index <= number; index++){
        product.push(arrProduct[index]);
    }
    product.forEach((item, index) => {
        let html = `
        <div class="w-100"><img class="w-75" style="margin-top: -10%;" src="${item.image}"></div>
            <div class="info">
                <h3>${item.name}</h3>
                <p>${item.shortDescription}</p>
                <a href="./detail.html?productid=${item.id}">Buy now</a>
            </div>
        `;
        document.getElementById(`${index}`).innerHTML = html;
    });
}

// List product
import ListProduct from './listproduct.js';
ListProduct();