let prix_produit1 = 10;
let prix_produit2 = 500;
let prix_produit3 = 15;
let quantite1 = 4;
let quantite2 = 6;
let quantite3 = 2;
let somme = ((prix_produit1 * quantite1) + (prix_produit2 * quantite2) + (prix_produit3 * quantite3));
let final = 0;
if(somme > 500)
{
    final = somme * (10/ 100);
}
console.log(final);
