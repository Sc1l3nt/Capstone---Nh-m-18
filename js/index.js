(function getAllProduct() {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    });

    promise.then(function (res) {
        console.log('res:', res);
        renderProductCard(res.data.content);
    });

    promise.catch(function (err) {
        console.log('err:', err);
    });
})();

function renderProductCard(arrProduct){
    let htmlProductCard = arrProduct.reduce((html, item) => {
        html += `
            <div class="col col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="item">
                    <div class="img"><img src="${item.image}" alt=""></div>
                    <div class="info">
                        <h3>${item.name}</h3>
                        <p>${item.shortDescription}</p>
                    </div>
                    <div class="buttons">
                        <button>Buy now</button>
                        <div>
                            <h5>${item.price}$</h5>
                        </div>
                    </div>
                </div>
            </div>            
        `;
        return html;
    }, '');
    document.getElementById('list-product').innerHTML = htmlProductCard;
}