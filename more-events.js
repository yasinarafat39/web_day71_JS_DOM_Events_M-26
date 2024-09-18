

document.getElementById("btnMore").addEventListener("keypress", function(){
    console.log('Event triggered inside the input field')
})



document.getElementById("textField").addEventListener("keyup", function(event){
    console.log(event.target.value)



    const container = document.getElementById("container");
    const p = document.createElement('p');
    p.innerText = event.target.value;
    container.appendChild(p);
})


