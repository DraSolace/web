//1.1
let Number = '123';
let length = Number.length - 1;
let temp = '';
for(let i = length; i >= 0; i--){
  temp+= Number[i];
}
alert(parseInt(temp));

//1.2
Number = '111333456';
temp = '';
for (let i = 0; i < Number.length; i++) {
    if (temp.includes(Number[i]) === false) {
        temp += Number[i]
    }
}
alert(parseInt(temp));

//1.3
Number = '1355567';
alert(Number.split("5").length - 1);

//1.4
Number = parseInt((Math.random() * 100 )).toString(2);
temp = '';
length = 1;
let arr = []
for (let i = 0; i < Number.length; i++){
   if (Number[i] === Number[i+1]){
      length++;
   } else {
      if (arr.every(v => v < length)){
         temp = Number[i] + length;
      }
      arr.push(length);
      length = 1;
   }
}
alert(!temp?['',0]:[temp.slice(0,1),temp.slice(1)*1]);

//2.1 
Number = 'фывфавыапрс';
for (let i = 0; i < Number.length; i++) {
    if (Number.indexOf(Number[i]) === Number.lastIndexOf(Number[i])) {
        alert(Number[i]);
        break;
    }
}

//2.2
alert(Math.random().toString(36).slice(2, 7));

//2.3
Number = 'позволяеткопироватьтекстиз';
temp = '';
for (let i = 0; i < Number.length; i++) {
    if (temp.includes(Number[i]) === false) {
        temp += Number[i];
    }
}
alert(temp);