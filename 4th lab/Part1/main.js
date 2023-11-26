//1.1
let arr = [];
arr.length = Math.floor(Math.random() * 100);
for (let i = 0; i <= arr.length - 1 ; i++){
    arr[i] = Math.floor(Math.random() * 100);
}
arr.sort((a,b) => a-b);
alert(arr[arr.length-1] - arr[0]);

//1.2
let temp = "";
arr = [1, 4, 34, 1, 20, 6, 6, 12, 8, 6];
for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i]) === false) {
        temp += arr[i]
    }
}
arr = Array.from(temp);
alert(arr);


//1.3
arr = 
    [
    {id: 1, idDone: true}, 
    {id: 2, idDone: false},
    {id: 3, idDone: true}
    ]
for(let i = 0; i <= arr.length - 1 ; i++){
    if(arr[i].idDone === true){
        alert(arr[i]);
    }
}

//2.1
arr = [];
arr.length = Math.floor(Math.random() * 10);
let PickedNumber = parseInt(Math.floor(Math.random() * 10) / 2);
for (let i = 0; i <= arr.length - 1; i++){
    arr[i] = Math.floor(Math.random() * 10);
}
console.log(`Массив:" ${arr}\nВыбранное число: ${PickedNumber} \nЧисла, больше выбранного числа: ${arr.filter(item => item > PickedNumber)} `);




//2.2
arr = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];
arr.depth; 
alert(arr.flat(2));

//2.3
arr = [];
arr.length = Math.floor(Math.random() * 50 + 10);
for (let i = 0; i <= arr.length - 1; i++){
    arr[i] = Math.round(Math.random()* 198) - 99;
}
//alert(arr);
temp = 0;
for (let i = 0; i <= arr.length - 1; i++){
    for (let j = i + 1; j <= arr.length - 1;j++){
        if (arr[i] + arr[j] === 0){
            //alert(`Пара:${arr[i]} ${arr[j]}`)
            temp++;
            arr.splice(j, 1);
            arr.splice(i, 1);
            i--;
        }
    }
}
alert(`Количество пар: ${temp}`);

//2.4
arr = [];
arr.length = Math.floor(Math.random() * 50 + 10);
for (let i = 0; i <= arr.length - 1; i++){
    arr[i] = Math.round(Math.random()* 198) - 99;
}
//alert(arr);
temp = 0;
for (let i = 0; i <= arr.length-1; i++){
        for (let j = i+1; j <= arr.length-1;j++){
            for (let k = j+1; k <= arr.length-1; k++){
                if (arr[i] + arr[j] + arr[k] === 0){
                    //alert(`Триплет:${arr[i]} ${arr[j]} ${arr[k]}`)
                    temp++;
                    arr.splice(k, 1);
                    arr.splice(j, 1);
                    arr.splice(i, 1);
                }
            }
        }
}
alert(`Количество триплетов: ${temp}`);