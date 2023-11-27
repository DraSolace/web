const createBtn = document.getElementById("submit")
const list = document.getElementById("list")
const input1 = document.getElementById("title")
const done = document.getElementById("doneLink")
const Notdone = document.getElementById("!doneLink")
const all = document.getElementById("allLink")
const notes = []
const date = document.getElementById("date")
const clear = document.getElementById("Clear")



createBtn.onclick = function(){
    if(input1.value != 0){
        const newNote = {title: input1.value, complited: false, date: date.value, counter: false}
        notes.push(newNote)
        render()
        title.value = null
    }
    else{ return }
}

list.onclick = function(event){
    if(event.target.dataset.index ){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === "toggle"){
            notes[index].complited = !notes[index].complited
        }
        
        if(type === "remove"){
            notes.splice(index,1)
        }
    }
    render()
}

clear.onclick = function(){
    notes.length = 0;
    render();
}

done.onclick = function(){
    render("Done")
}

Notdone.onclick = function(){
    render("NotDone")
}

all.onclick = function(){
    render();
}

function renderLinks(){
    let arr = [0, 0];
    for (let i = 0; i <= notes.length-1; i++){
        if(notes[i].complited === true){
        arr[0] ++;
        continue
        }
        arr[1] ++;
    }
    all.innerHTML = `Все<sub>(${notes.length})</sub>`
    done.innerHTML = `Сделано<sub>(${arr[0]})</sub>`
    Notdone.innerHTML = `Не сдеално<sub>(${arr[1]})</sub>`

}

function render(mode){
    list.innerHTML = ''
    if(notes.length === 0){ 
        list.innerHTML = `<p>Нет элементов</p>`; 
        renderLinks();
        return
    }
    renderLinks();
    if(mode === "Done"){
        for (let i = 0; i <= notes.length-1; i++){
            if(notes[i].complited == true){
            list.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i], i));
        }
    }
    return
    }

    if(mode === "NotDone"){
        for (let i = 0; i <= notes.length-1; i++){
            if(notes[i].complited == false){
            list.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i], i));
        }
    }
    return
    }

    for (let i = 0; i <= notes.length-1; i++){
        list.insertAdjacentHTML('beforeend', getNotesTemplate(notes[i], i));
    }
    renderLinks();
}
render()


function getNotesTemplate(notes, index){
    return `<li>
    <span class = "${notes.complited ? 'active' : ''}">${notes.title} </span>
        <span><button id = "btn-sub" class="btn-${notes.complited ? 'warning' : 'sub'}" data-index = ${index} data-type = "toggle">&#10003;</button></span>
        <span><button id = "btn-res" class="btn-res" data-index = ${index} data-type = "remove">&#10006;</button></span>
        <span class="subText"><sub>${notes.date}</sub></span>
    </li>`
}







