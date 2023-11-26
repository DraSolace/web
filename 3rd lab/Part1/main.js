//1
let admin, name;
name = 'John';
admin = name;
alert(admin)

//2
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(parseInt(a) + parseInt(b)); 

//3
for (let temp = 1; temp<=10; temp++){
    if (temp % 2 == 0){
        alert(temp)
    }
}

//4
let i = 0;
while(i < 3){
    i++;
    alert(`number ${i}!`);    
}

//5
let number = prompt(">100");
if( number < 100){
    while(number < 100){
        if(number == null || number > 100){
            break;
        }
        number = prompt(">100");
    }
}

let n = prompt();
let temp = 0;

for (let p = 1; p <= n; p++){
    for(let k = 1; k <= n; k++){
        if (p % k == 0){
            temp++;
        }
    }
    if(temp == 2){
        alert(p);
    }
    temp = 0;
}