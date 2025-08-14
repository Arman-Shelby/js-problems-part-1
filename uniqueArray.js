//array has some duplicate elements




const biryaniKhor = ['abul' , 'babul', 'cabul', 'dabul', 'babul', 'eabul', 'fabul', 'gabul', 'habul', 'babul', 'cabul','abul' , 'babul', 'cabul', 'dabul', 'babul', 'eabul', 'fabul', 'gabul', 'habul', 'babul', 'cabul'];

const numbers = [1 , 5 , 85 ,61, 5 , 85 , 1, 5 , 85 , 61, 5 , 85 , 1, 5 , 85 , 61, 5 , 85 , 1, 5 , 85 , 61, 5 , 85];


function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if(unique.includes(item) === false)    {
            unique.push(item);
}}

    return unique;
}
// const uniqueArray = noDuplicate(biryaniKhor);
const uniqueArray = noDuplicate(numbers);
console.log('Unique array:', uniqueArray);

