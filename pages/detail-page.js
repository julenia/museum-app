function doesNotPassAllValidations (name, msg){
    if(!name){
        alert('You forgot to fill in your name!');
        return true;
    }
    if(!msg){
        alert('You forgot to fill in your message!');
        return true;    
    }
    if(msg.length > 280){
        alert('Your comment is too long!');
        return true;
    }
    if(msg.toLowerCase().includes('fuck')){
        alert('Warning: this comment has been flagged as offensive');
        return true;
    }

    return false;
}
function firstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function submitComment() {
    const inputField = document.getElementById('name');
    let name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;   
    if(doesNotPassAllValidations(name, msg)) return null;
    if(name.charAt(0) === name.charAt(0).toLowerCase()) {
        name = firstLetter(name);
        }
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);
    inputField.value = null;
    textArea.value = null;
 
}
// const content = document.getElementById('content');
// const h1 = document.createElement('h1');
// const img = document.createElement('img');
// content.classList.add('content');
// content.appendChild(h1);
// content.appendChild(img);


