var queryParams = new URLSearchParams(window.location.search);
console.log('on post page.');

const nameElement = document.getElementById('name');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');

console.log('name element = ', nameElement);
console.log('title element = ', titleElement);
console.log('description element = ', descriptionElement);

var postId = queryParams.get('id');
var postName = queryParams.get('name');
var postTitle = queryParams.get('title');
var postDescription = queryParams.get('description');

console.log('post name  = ', postName);
console.log('post title  = ', postTitle);
console.log('post description  = ', postDescription);
if (postName) {
	nameElement.textContent = postName.trim();
}

if (postTitle) {
	titleElement.innerText = postTitle.trim();
}

if (postDescription) {
	descriptionElement.innerText = postDescription.trim();
}
