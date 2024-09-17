

// Step-1: add event listener to post button
document.getElementById("postBtn").addEventListener("click", function(){
    // Step-2: get the commet inside the text area
    const commentBox = document.getElementById("commentBox");
    const commentBoxValue = commentBox.value;

    // Step-3: set the comment inside the comment container
    const commentContainer = document.getElementById("commentContainer");
    const p = document.createElement("p");
    p.innerText = commentBoxValue;
    commentContainer.appendChild(p);

    // Step-4: clear the comment Box
    commentBox.value = '';
})
