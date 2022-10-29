window.onload = function () {
    // Get id
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("productid");
    console.log("param:", myParam);


    // Product detail
    (function getProductById(id) {
        let promise = axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
            method: "GET",
        });
        promise.then(function (res) {
            console.log(res.data.content);
            renderProductDetail(res.data.content);
        });
        promise.catch(function (err) {
            console.log("err:", err);
        });
    })(myParam);

    // List product
    ListProduct(Number(myParam));
};

// List product
import ListProduct from "./listproduct.js";

// Render detail
function renderProductDetail(product) {
    // Image
    document.querySelector("#imgProduct img").src = product.image;
    // Name
    document.querySelector("#detail .name").innerHTML = product.name;
    // Description
    document.querySelector("#detail .description").innerHTML =
        product.description;
    // Size
    (function renderSizeButton(items) {
        // On button
        function checkSize(id) {
            let onButton = document.getElementById(id);
            console.log(onButton);
            onButton.style.opacity = 1;
        };
        // Off button
        function nonCheckSize(button){
            button.forEach((item) => {
                let offButton = document.getElementById(item.id);
                offButton.style.opacity = 0.5;
            })
        }

        let html = "";
        for (let index in items) {
            html += `
                <button id="${index}" class="item">${items[index]}</button>
            `;
        }

        document.querySelector("#detail .size .list-item").innerHTML = html;
        let button = document.querySelectorAll('.list-item button');
        button.forEach((item) => {
            item.addEventListener('click', () => {
                nonCheckSize(button)
                checkSize(item.id);
            })
        })
    })(product.size);
    // Price
    (function renderPrice(price) {
        let input = document.querySelector("#detail .amount .number");
        let value = 0;
        updateValue(input.value);

        // Update value
        function updateValue(newValue) {
            value = Number(newValue) * price;
            document.querySelector("#detail .price").innerHTML = value + "$";
        }
        // Plus
        let plus = document.querySelector("#detail .amount .plus");
        plus.onclick = function () {
            input.value = Number(input.value) + 1;
            updateValue(input.value);
        };
        // Minus
        let minus = document.querySelector("#detail .amount .minus");
        minus.onclick = function () {
            input.value = Number(input.value) - 1;
            if (Number(input.value) < 0) {
                input.value = 0;
            }
            updateValue(input.value);
        };
        // Change text
        input.onkeyup = function () {
            if (Number(input.value) < 0) {
                input.value = 0;
            }
            updateValue(input.value);
        };
        input.onChange = function () {
            if (input.value == "") {
                input.value = 0;
            }
            updateValue(input.value);
        };
        //
    })(product.price);
}