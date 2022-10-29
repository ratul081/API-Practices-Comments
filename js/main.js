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
        commentDiv.innerHTML = `
                    <div onclick="loadFullPost(${comment.id})" class="card border border-primary border-2 ">
                        <div class="card-body">
                            <h4 class="card-title fs-5 mb-1">Name: ${comment.name.slice(0, 24)}</h4>
                            <div class="card-text">
                                <p>Email: ${comment.email}</p>
                                <p>${comment.body.slice(0, 150)}</p>
                            </div>
                            <button type="button" class="full-post btn btn-primary">
                    See Full Post
                </button>
                        </div>
                    </div>
        `;
        commentContainer.appendChild(commentDiv);
    })
}

const loadFullPost = (postId) => {
    const fullPostUrl = `https://jsonplaceholder.typicode.com/comments/${postId}`
    fetch(fullPostUrl)
        .then(res => res.json())
        .then(dataComments => fullPost(dataComments));
}

const fullPost = posts => {
    const postBox = document.getElementById('full-comments');
    postBox.innerHTML = '';
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
    <div class="card border border-warning border-2">
                        <div class="card-body">
                            <h4 class="card-title fs-5 mb-1">Name: ${posts.name}</h4>
                            <div class="card-text">
                                <p>Email: ${posts.email}</p>
                                <p>${posts.body}</p>
                            </div>
                        </div>
                    </div>

    `
    postBox.appendChild(postDiv)

}


loadComments();
