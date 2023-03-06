const postCards = document.querySelectorAll('.post');
const confirmYesBtn = document.getElementById('confirm-yes-btn');
const confirmNoBtn = document.getElementById('confirm-no-btn');
const confirmModal = document.getElementById('confirm-modal');

postCards.forEach((postCard) => {
	const deleteButton = postCard.querySelector('.fa-trash');
	const editButton = postCard.querySelector('.fa-ellipsis');

	deleteButton.addEventListener('click', () => {
		confirmYesBtn.addEventListener('click', function () {
			postCard.remove();
		});
	});
	editButton.addEventListener('click', () => {
		console.log('post card = ', postCard);
		const name = postCard.querySelector('.post-name p').textContent;
		console.log('name = ', name);
		const title = postCard.querySelector('.post-heading-div p').textContent;
		console.log('title = ', title);
		const description =
			postCard.querySelector('.post-description').textContent;
		console.log('description = ', description);

		const postID = postCard.dataset.postid;
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
