let products = {
    productName :[ "Fifa2023","JustCause","COD","MK9"],
    productDisc : "PlayStation4",
    productPrice : 59.99,
    productTax : 67.99,
    productCompany : "Fifa",
    productColor: {
        Fifa2023Color : ["blue","yello"],
        JustCauseColor : ["right","Green"],
        MK9Color : ["black","orange"],
        CodColor : ["grey","white"],
    },
    add : function(productPrice,productTax) {
        let result = productPrice + productTax;
        console.log(result)
    }
}
// products.add(products.productPrice,products.productTax)

// for (let a in products) {
//     console.log(a)
// }
 for (a=0 ; a < products.productName.length; a++){
     document.write(`
     <h1>${products.productName[a]}</h1>
     <h1>${products.productDisc}</h1>
     <h1>${products.productPrice}</h1>
     <h1>${products.productTax}</h1>
     <h1>${products.productCompany}</h1>
     <h1>${products.productColor.Fifa2023Color[0]}</h1>
     `)
 } 