//1.1
let arr = [1, 6, -1, 22, 13];
alert(Math.min(...arr));
alert(Math.max(...arr));

//1.2.1
let temp = "!тевирП";
alert(temp.split('').reverse().join(''));

//1.2.2
temp = prompt("Строку")
alert(temp.split('').reverse().join(''));

//1.3
arr = [3, 5, 8, 13, 21, 42];
temp = 0;
for (i = 0; i < arr.length - 1; i++){
	if(arr[i] % 2 == 0){
		temp+= Math.sqrt(arr[i]);
	}
}
alert(temp);

//1.4
function Anagramm(FirstStr, SecondStr) {
	FirstStr = FirstStr.toLowerCase().split('').sort().join();
	SecondStr = SecondStr.toLowerCase().split('').sort().join();
	return FirstStr == SecondStr
}
alert(Anagramm("Лунь", "нуль")); 
alert(Anagramm("Лунь", "ноль"));


//1.5
function Palindrome(str){
	str = str.toLowerCase().replaceAll(' ','');
	return str === str.split('').reverse().join('');
}
alert(Palindrome("Не гни папин ген"));
alert(Palindrome("123"));

//1.6
function Fibonacci(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return Fibonacci(n - 1) + Fibonacci(n - 2);
}
temp = 0;
let timer = setInterval(()=> {
		//if(temp < 100){
		console.log(Fibonacci(temp))
		temp++
		//}
	},1000)

//1.7
function Delay(n) {
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve();
		}, n * 1000);
	});
}
//Delay(10);

//1.8
function intersect(FirstArr, SecondArr) {
	let TempArr = [];
	for (let i = 0; i < FirstArr.length; i++) {
		if (SecondArr.includes(FirstArr[i])) {
			TempArr.push(FirstArr[i])
		}
	}
	return TempArr
}
arr = [];
let SecondArr = [];
arr.length, SecondArr.length = Math.floor(Math.random() * 100);
	for (let i = 0; i <= arr.length - 1 ; i++){
    	arr[i] = Math.floor(Math.random() * 100);
		SecondArr[i] = Math.floor(Math.random() * 100);
	}
alert(`${arr} \n ${SecondArr}`);
alert(intersect(arr, SecondArr));

//1.10
let i;
for(i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 4 4 4

for(let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 1 2 3
