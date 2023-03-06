var queryParams = new URLSearchParams(window.location.search);
var likeCount = 0;
var comments = [];

const nameElement = document.getElementById('author-name');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

var postId = queryParams.get('id');
var postName = queryParams.get('name');
var postTitle = queryParams.get('title');
var postDescription = queryParams.get('description');

// console.log('postname = ', postName);
// console.log('postTitle = ', postTitle);
// console.log('postDescription = ', postDescription);

if (postName) {
	nameElement.innerText = postName.trim();
}
if (postTitle) {
	titleElement.innerText = postTitle.trim();
}
if (postDescription) {
	descriptionElement.innerText = postDescription.trim();
}

// like logic with Event Listener
const likeButton = document.getElementById('like-button');
const likeContent = document.getElementById('like-counter');

likeButton.addEventListener('click', () => {
	likeCount++;

	if (likeCount === 1) {
		likeContent.innerText = `${likeCount} person likes this!`;
		return;
	}

	likeContent.innerText = `${likeCount} people like this!`;
});

// comment logic with Event Listener and Arrays.
const commentButton = document.getElementById('comment-button');
const commentArea = document.getElementById('comment-area');
const commentSection = document.getElementById('all-comments');

commentButton.addEventListener('click', () => {
	if (!commentArea.value) {
		return;
	}
	const data = commentArea.value;
	commentArea.value = '';
	comments.unshift(data);
	renderComments();
});

const renderComments = () => {
	commentSection.innerHTML = comments
		.map(
			(data, ind) =>
				`<li class="list-group-item" key=${ind}>${data}</li>`,
		)
		.join('');
};

// save/edit button toggle logic

const editButton = document.getElementById('edit-button');
const headingElement = document.querySelector('.title-div');
editButton.addEventListener('click', () => {
	const editingMode = editButton.classList.contains('editing');
	if (editingMode) {
		editButton.classList.remove('editing');
		editButton.innerHTML = 'Edit <i class="fa-solid fa-pen-to-square"></i>';
		titleElement.removeAttribute('contenteditable', true);
		headingElement.style.border = 'none';
		descriptionElement.removeAttribute('contenteditable', true);
		descriptionElement.style.border = 'none';
	} else {
		editButton.classList.add('editing');
		editButton.innerHTML = 'Save <i class="fa-solid fa-floppy-disk"></i>';
		titleElement.setAttribute('contenteditable', true);
		headingElement.style.border = '2px solid pink';
		descriptionElement.setAttribute('contenteditable', true);
		descriptionElement.style.border = '2px solid pink';
	}
});
