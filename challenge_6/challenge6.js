const livers = [
    {
        id : 10,
        title  : "Don Quixote",
        author : "Miguel de Cervantes",
        prix : 200
    },
    {
        id : 11,
        title  : "The Adventures of Huckleberry Finn",
        author : "Mark Twain",
        prix : 150
    },
    {
        id : 12,
        title  : "Treasure Island	Robert",
        author : "Louis Stevenson",
        prix : 300
    },
    {
        id : 10,
        title  : "Pride and Prejudice",
        author : "Jane Austen",
        prix : 170
    },

]

const liverss = document.getElementById("livres");

livers.forEach((ele) => {
    liverss.innerHTML += `<div id="divliv"> 
            <div class="titre">${ele.title}</div>
            <div class="auteur">${ele.author}</div>
            <div class="prix"> ${ele.prix}</div>
        </div>`

})






