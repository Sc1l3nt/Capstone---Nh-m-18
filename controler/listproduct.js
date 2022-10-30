function getAllProduct(id) {
    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
    });

    promise.then(function (res) {
        console.log('res');
        renderProductCard(res.data.content, id);
    });

    promise.catch(function (err) {
        console.log('err:', err);
    });
};

function renderProductCard(arrProduct, id){
    let htmlProductCard = arrProduct.reduce((html, item) => {
        if(item.id === id){
            html += '';
        } else {
            html += `
                <div class="col col-lg-4 col-md-6 col-sm-12 col-12">
                    <div class="item">
                        <div class="img"><img src="${item.image}" alt=""></div>
                        <div class="info">
                            <h3>${item.name}</h3>
                            <p>${item.shortDescription}</p>
                        </div>
                        <div class="buttons">
                            <a href="./detail.html?productid=${item.id}"><p>Buy now</p></a>
                            <div>
                                <h5>${item.price}$</h5>
                            </div>
                        </div>
                    </div>
                </div>            
            `;
        }
        return html;
    }, '');
    document.getElementById('list-product').innerHTML = htmlProductCard;
}

export default getAllProduct;