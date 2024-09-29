let totalRating = 0;
let numberOfRatings = 0;

function addRating(rating) {
    totalRating += rating;
    numberOfRatings++;
    const average = (totalRating / numberOfRatings).toFixed(2);
    document.getElementById('ratingMessage').innerText = `Avaliação média: ${average} ⭐`;
}

function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const commentsSection = document.getElementById('commentsSection');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerText = commentText;
        commentsSection.appendChild(newComment);
        
        commentInput.value = '';
    } else {
        alert('Por favor, escreva um comentário.');
    }
}
