let produits = [
    p1 = {
        "id" : 10,
        "nom" : "pants",
        "prix" : 14,
        "categorie" :  "clothes"
    },
    p2 = {
        "id" : 11,
        "nom" : "skirt",
        "prix" : 200,
        "categorie" : "clothes"
    },
    p3 = {
        "id" : 12,
        "nom" : "orange",
        "prix" : 10,
        "categorie" : "fruit"
    },
    p4 = {
        "id" : 13,
        "nom" : "phone",
        "prix" : 500,
        "categorie" : "electroniq"
    },
    p5 = {
        "id" : 14,
        "nom" : "jeans",
        "prix" : 30,
        "categorie" : "clothes"
    },
    p6 = {
        "id" : 15,
        "nom" : "banana",
        "prix" : 5,
        "categorie" : "fruit"
    }

]

let produitmoins = produits.filter(elemnt => elemnt.prix < 200);
console.log( "les produits à moins de 200 DH: ", produitmoins);
let idproduit = produits.find((produit) => produit.id === 14);
console.log( " un produit par son ID",idproduit);

let noms = produits.map((elemnt) => elemnt.nom );
console.log(" les noms : ",noms);

let somme = produits.reduce((somme,elemnt) => {
    return somme + elemnt.prix;},0);

console.log( "la somme des prix de tous les produits : ",somme);


