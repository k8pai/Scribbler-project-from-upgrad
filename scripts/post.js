// Get the query parameters from the URL using the URLSearchParams API
var queryParams = new URLSearchParams(window.location.search);

// Initialize the like count and comments array
var likeCount = 0;
var comments = [];

// Get references to the DOM elements we need to update
const nameElement = document.getElementById('author-name');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

// Get the post ID from the query parameters
var postId = queryParams.get('id');

// Get the post name, title, and description from the query parameters or local storage
var postName =
	queryParams.get('name') || JSON.parse(localStorage.getItem('author-name'));
var postTitle =
	queryParams.get('title') || JSON.parse(localStorage.getItem('post-title'));
var postDescription =
	queryParams.get('description') ||
	JSON.parse(localStorage.getItem('post-content'));

// If the post name, title, or description is available, update the corresponding DOM element and save it to local storage
if (postName) {
	localStorage.setItem('author-name', JSON.stringify(postName));
	nameElement.innerText = postName.trim();
}
if (postTitle) {
	localStorage.setItem('post-title', JSON.stringify(postTitle));
	titleElement.innerText = postTitle.trim();
}
if (postDescription) {
	localStorage.setItem('post-content', JSON.stringify(postDescription));
	descriptionElement.innerText = postDescription.trim();
}

// Initialize the event listeners for the like and comment buttons

// Get references to the like button and like counter
const likeButton = document.getElementById('like-button');
const likeContent = document.getElementById('like-counter');

// Add an event listener to the like button
likeButton.addEventListener('click', () => {
	// Increment the like count
	likeCount++;

	// Update the like counter text based on the number of likes
	if (likeCount === 1) {
		likeContent.innerText = `${likeCount} person likes this!`;
		return;
	}
	likeContent.innerText = `${likeCount} people like this!`;
});

// Get references to the comment button, comment area, and comment section
const commentButton = document.getElementById('comment-button');
const commentArea = document.getElementById('comment-area');
const commentSection = document.getElementById('all-comments');

// Add an event listener to the comment button
commentButton.addEventListener('click', () => {
	// Check if the comment area is empty
	if (!commentArea.value) {
		return;
	}
	// Add the comment to the beginning of the comments array and render the comments
	const data = commentArea.value;
	commentArea.value = '';
	comments.unshift(data);
	renderComments();
});

// Render the comments to the comment section
const renderComments = () => {
	commentSection.innerHTML = comments
		.map(
			(data, ind) =>
				`<li class="list-group-item" key=${ind}>${data}</li>`,
		)
		.join('');
};

// Get references to the edit button and title and description elements
const editButton = document.getElementById('edit-button');
const headingElement = document.querySelector('.title-div');

// Add an event listener to the edit button
editButton.addEventListener('click', () => {
	// Check if the edit button is in editing mode
	const editingMode = editButton.classList.contains('editing');
	// If in editing mode, switch back to view mode
	if (editingMode) {
		// Remove editing class from the button and change its text content
		editButton.classList.remove('editing');
		editButton.innerHTML = 'Edit <i class="fa-solid fa-pen-to-square"></i>';

		// Remove contenteditable attribute from the title and description elements
		titleElement.removeAttribute('contenteditable', true);
		descriptionElement.removeAttribute('contenteditable', true);

		// Reset the border style of the title and description elements
		headingElement.style.border = 'none';
		descriptionElement.style.border = 'none';
	}
	// If not in editing mode, switch to editing mode
	else {
		// Add editing class to the button and change its text content
		editButton.classList.add('editing');
		editButton.innerHTML = 'Save <i class="fa-solid fa-floppy-disk"></i>';

		// Add contenteditable attribute to the title and description elements
		titleElement.setAttribute('contenteditable', true);
		descriptionElement.setAttribute('contenteditable', true);

		// Change the border style of the title and description elements
		headingElement.style.border = '2px solid pink';
		descriptionElement.style.border = '2px solid pink';
	}
});
