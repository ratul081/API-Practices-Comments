const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(dataComments => displayComments(dataComments.slice(0, 10)))
}


const displayComments = comments => {
    const commentContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment', 'col-6');
        console.log(comment)
        commentDiv.innerHTML = `
                    <div class="card border border-primary border-2 ">
                        <div class="card-body">
                            <h4 class="card-title fs-5 mb-1">Name: ${comment.name.slice(0, 5)}</h4>
                            <div class="card-text">
                                <p>Email: ${comment.email}</p>
                                <p>${comment.body.slice(0, 150)}</p>
                            </div>
                        </div>
                    </div>
        `;
        commentContainer.appendChild(commentDiv);
    })
}

loadComments();