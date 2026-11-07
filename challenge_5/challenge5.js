const counter = document.getElementById("counter");


const buttons = document.querySelectorAll("button");

let conte = 0;
document.addEventListener("click", (event) => {

    const augment = event.target.closest("#augbtn");
    const diminuer = event.target.closest("#dimbtn");
    const Reinitialiser = event.target.closest("#reinbtn");
    if (augment) {
        conte++;
        if (conte >= 10) {
            counter.style.color = "red";
        }

        counter.innerHTML = `${conte}`;

    }
    else if (diminuer) {

        if (conte > 0) {
             conte--;
            if (conte < 10) {

                counter.style.color = "black";
            }
           
        }
        counter.innerHTML = `${conte}`;
    }
    else if (Reinitialiser) {
        conte = 0;
        counter.style.color = "black";
        counter.innerHTML = `${conte}`;
    }

});