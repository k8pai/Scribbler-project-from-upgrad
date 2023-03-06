const postCards = document.querySelectorAll('.post');
const confirmYesBtn = document.getElementById('confirm-yes-btn');
const confirmNoBtn = document.getElementById('confirm-no-btn');
const confirmModal = document.getElementById('confirm-modal');

postCards.forEach((postCard) => {
	const deleteButton = postCard.querySelector('.fa-trash');

	deleteButton.addEventListener('click', () => {
		confirmYesBtn.addEventListener('click', function () {
			postCard.remove();
		});
	});
});
