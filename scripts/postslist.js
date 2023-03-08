// Select all post cards and confirmation modal buttons
const postCards = document.querySelectorAll('.post');
const confirmYesBtn = document.getElementById('confirm-yes-btn');
const confirmNoBtn = document.getElementById('confirm-no-btn');
const confirmModal = document.getElementById('confirm-modal');

// Loop through each post card and attach click event listeners to delete and edit buttons
postCards.forEach((postCard) => {
	const deleteButton = postCard.querySelector('.fa-trash');
	const editButton = postCard.querySelector('.fa-ellipsis');

	// Attach click event listener to delete button
	deleteButton.addEventListener('click', () => {
		// Attach click event listener to confirmation modal's "yes" button
		confirmYesBtn.addEventListener('click', function () {
			// Remove the post card if user clicks "yes"
			postCard.remove();
		});
	});

	// Attach click event listener to edit button
	editButton.addEventListener('click', () => {
		// Get the post's name, title, description, and ID
		const name = postCard.querySelector('.post-name p').textContent;
		const title = postCard.querySelector('.post-heading-div p').textContent;
		const description =
			postCard.querySelector('.post-description').textContent;
		const postID = postCard.dataset.postid;

		// Encode the post details for passing as URL query parameters
		var encodedName = encodeURIComponent(name);
		var encodedTitle = encodeURIComponent(title);
		var encodedDescription = encodeURIComponent(description);

		// Redirect to the post details page with the post ID, title, and content as query parameters
		window.location.href =
			'post.html?id=' +
			postID +
			'&name=' +
			encodedName +
			'&title=' +
			encodedTitle +
			'&description=' +
			encodedDescription;
	});
});
