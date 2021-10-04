const {searchAmazon, AmazonSearchResult} = require('unofficial-amazon-search');

async function searchHandler(event) {
  // Extract data from search bar
  const searchInput = document.querySelector('#searchInfo').value.trim();

  searchAmazon(searchInput, {includeSponsoredResults: true}).then(data => {
    console.log(data.searchResults[0].title)
    console.log(data.searchResults[0].imageUr)
    console.log(data.searchResults[0].prices);
    var productTitle = data.searchResults[0].title;
    var productImage = data.searchResults[0].imageUrl;
    let productPrice = data.searchResults[0].prices;
  })
};

document.querySelector('#searchForm').addEventListener('submit', searchHandler);


