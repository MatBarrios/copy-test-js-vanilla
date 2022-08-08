const commentArea = document.getElementById('input'); 
const submitBtn = document.getElementById('comment_btn');
const newComment = document.getElementById('new_comment');

submitBtn.addEventListener("click", submitComment);

function submitComment(e){
    e.preventDefault()

    if (commentArea.value.length > 0) {  /* only post if there's any text */ 
        newComment.innerHTML = `<b>Comment</b> `
        newComment.append(commentArea.value)
        commentArea.value = ""
        } else {
            console.log('write a comment')
    };
}
