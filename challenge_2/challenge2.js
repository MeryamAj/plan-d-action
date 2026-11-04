function moyenne(arr) {
    let somme = 0;
    let i = 0;
    while(i < arr.length)
    {
        somme = somme + arr[i];
        i++;
    }
    let moyenne = 0;
    moyenne = somme / arr.length;
    return moyenne;
    
}
function meilleure(arr)
{
    
    let i = 1;
    let max = arr[0];
    while(i < arr.length)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
        i++;
    }
    return max;
}
function  superieures(arr)
{
    let i = 0;
    let count = 0;
    while(i < arr.length)
    {
        if(arr[i] >= 10)
        {
            count++;
        }
        i++;
    }
    return count
}
function m_superieres(arr)
{
    if(moyenne(arr) >= 10)
    {
        return 1;
    }
    return 0;

}



let notes = [19, 9, 14, 13, 17];

console.log("la moyenne = " ,moyenne(notes));
console.log("la meilleure note : " , meilleure(notes));
console.log("les notes supérieures ou égales à 10 : ",superieures(notes));
if(m_superieres(notes))
{
    console.log("Oui  la moyenne de la classe est supérieure ou égale à 10");

}
else
{
    console.log("Non  la moyenne de la classe est supérieure ou égale à 10");
}



