const product = document.getElementById("addp");
const buttone = document.getElementById("btnsubmit");



const listproducts = [];
const listproductsdiv  = document.querySelector(".listproducts")
buttone.addEventListener("click",(event) => {

    event.preventDefault();
   let inputvalue = product.value;
   if(inputvalue != "")
   {
    listproducts.push(add(inputvalue));
   }
    

    listproductsdiv.innerHTML = "";
    listproducts.forEach((element) =>{

    listproductsdiv.innerHTML += `<div class="items">
                <div> ${element.item}</div>
                <button id="supprime">supprime</button>
                <button id="achete">marqué comme acheté</button>
            </div>`

 })

});



function add(val)
{
   let itep = {
        id : listproducts.length,
        item :  val
    }
    return itep;

}
