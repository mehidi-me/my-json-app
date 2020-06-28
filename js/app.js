const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
const imageTitle = document.getElementById('image-title')
const title = document.querySelector('#image-title h1')
const pra = document.querySelector('.pra p')


fetch(`http://localhost/MyApi/api/single_read.php/?id=${id}`).then(res => res.json())
.then(json => {
imageTitle.style.backgroundImage = `url(${json.image_link})`;
title.innerText = json.title
pra.innerText = json.description
}
)



