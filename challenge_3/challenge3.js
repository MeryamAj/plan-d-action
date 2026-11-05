let apprenants = [
    p1 = {
        "id" : 1,
        "nom" : "sara",
        "age" : 19,
        "note" : 14
    },
    p2 = {
        "id" : 2,
        "nom" : "imane",
        "age" : 16,
        "note" : 12

    },
    p3 = {
        "id" : 3,
        "nom" : "riim",
        "age" : 20,
        "note" : 17

    },
    p4 = {
        "id" : 4,
        "nom" : "oumaima",
        "age" : 21,
        "note" : 19

    },
    p5 = {
        "id" : 5,
        "nom" : "dana",
        "age" : 15,
        "note" : 13

    }
]

function Ajouter(arr) {
    let p6 = {
        "id" : 6,
        "nom" : "souad",
        "age" : 25,
        "note" : 20

    }
    arr.push(p6);
    
}
function modifier(arr)
{
    ida = 4;
   for(let i = 0; i <arr.length ; i++)
   {
    if(arr[i].id == ida)
    {
        arr[i].note = 5;
    }
   }

}
function supprimer(arr)
{
    ida = 2;
    let j = 0;
    for(let i = 0; i < arr.length ; i++)
    {
        if(arr[i].id == ida)
        {
            j = i;
            break;
        }
    }
    arr.splice(j,1);

    
}
function recherche(arr)
{
    let nom = "riim";
    for(let i = 0; i < arr.length ; i++)
    {
        if(arr[i].nom === nom)
            return (arr[i].nom)
    }
    return 0;
}

// Ajouter(apprenants);
// modifier(apprenants);
// supprimer(apprenants);
console.log(recherche(apprenants));

