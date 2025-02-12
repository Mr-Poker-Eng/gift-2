const products = [
    {name: "Laptop", category: "Electronics", price: 140000},
    {name: "T-Shirt", category: "Clothing", price: 1400},
    {name: "Headphones", category: "Electronics", price: 3400},
    {name: "Jeans", category: "Clothing", price: 2400},
];

let categorizedProducts = {
    electronics: [],
    clothing: [],
}

for(let i=0; i<products.length; i++){

    const singleProduct = products[i];
    if(singleProduct.category === "Electronics"){
        categorizedProducts.electronics.push(singleProduct.price);
    }else if(singleProduct.category === "Clothing"){
        categorizedProducts.clothing.push(singleProduct.name);
    }
}

console.log(categorizedProducts);