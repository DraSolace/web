//1.1 
function* randomizer(min, max){
    while(true){
        i = Math.round(Math.random() * (+max - +min) + +min);
        yield i
    }
    
}
let min = prompt("Начало диапазона")
let max = prompt("Конец диапазона")
Result = randomizer(min,max)
NumberOfNumbers = prompt("Количество чисел")
for (let i = 0; i < NumberOfNumbers; i++){
    alert(Result.next().value)
}
