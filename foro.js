const URL = "http://localhost:3000/"
const URLComments = "http://localhost:3000/comments"

const form = document.querySelector("#comment_form");
const textarea = document.querySelector("#textarea");
const button = document.querySelector("#button_submit");
const idUser = document.querySelector("#idUser");
const comments = document.querySelector("#comments");
const commentsRight = document.querySelector("#commentsRight");


// Event Listeners
document.addEventListener("DOMContentLoaded", (event) =>{
    getComment()
})

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    event.stopPropagation()
    addComment()

    
})



// Functions
async function addComment(){
    
    const newComment = {
        comment: textarea.value
    }

    await fetch(URLComments,{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(newComment)
    });
}

async function getComment(){
    const response = await fetch(URLComments);
    const data = await response.json();
    console.log(data);
    data.forEach(comment => {
        comments.innerHTML += `
        <div class="cardComment">
            <div class="headerCard">
                <div class="happyFace"><i class="fa-regular fa-face-smile fa-4x"></i></div>
                <span>Traveller#${comment.id}</span>
                <button class="replyButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg></button>
            </div>
            <div class="sectionContent">
                <div class="commentContent">${comment.comment}</div>
            </div>
        </div>`;
        
    });
}
