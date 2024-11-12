const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('searchBox');
const searchResults = document.getElementById('searchResults');
const showMoreBtn = document.getElementById('showMoreBtn');

let keyword = '';
let page = 1;

const accessKey = 'Qmr88KzHKBa6Djzc0FrNSePKXLVJIxbsALlmAuXi3gY';

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (page === 1){
        searchResults.innerHTML = '';
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        
        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
    })
    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener('click', (e) => {
    page++;
    searchImage();
})


