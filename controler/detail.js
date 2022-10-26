window.onload = function(){
    // Get id
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('param:', myParam);

    // Product detail
    

    // List product
    ListProduct(Number(myParam));
}

// List product
import ListProduct from './listproduct.js';