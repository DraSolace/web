//1.1
function Counter(n) {
	let timer = setInterval(()=> {
		if(n>-1){
			alert(n)
			n--;
		}
		else {
			clearInterval(timer)
		}
		}, 1000)
}

Counter(prompt("Чиcло"));


function CreateCounter(n) {
	let counter = n;
	let timer;
	const start = () => {
		clearInterval(timer);
		timer = setInterval(() => {
		console.log(counter);
		counter--;
		}, 1000);
	};
	const pause = () => {
		clearInterval(timer);
	};
	const stop = () => {
		clearInterval(timer);
		counter = n;
	};
	return {
		start,
		pause,
		stop
	};
}
let CounterInstance = CreateCounter(15);
CounterInstance.start();
CounterInstance.stop();

//2.1
function DelayCounter(n) {
	while(n>0){
		alert(n)
		n--;
		delay(15) 
	}	
}
DelayCounter(10)

