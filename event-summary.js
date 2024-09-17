const handlerStatus = document.getElementById("handler-status");

function changeText() {
  const handlerStatus = document.getElementById("handler-status");
  handlerStatus.innerText = "Handled by function attached on onclick attribute";
}



// option 2
document.getElementById("event-listener").addEventListener("click", function(){
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Handled by Event Listener"
})



document.getElementById("updateBtn").addEventListener('click', function() {
    const inputField = document.getElementById("input-field");
    const display = document.getElementById("display");

    const textValue = inputField.value;
    display.innerText = textValue;
    inputField.value = '';
})