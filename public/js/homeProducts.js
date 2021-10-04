const {searchAmazon, AmazonSearchResult} = require('unofficial-amazon-search');

searchAmazon('popular deals', {includeSponsoredResults: true}).then(data => {
    let productTitle = data.searchResults[0].title, ;
    let productImage = data.searchResults[0].imageUrl;
    let productPrice = data.searchResults[0].prices;
    let productUrl = data.searchResults[0].productUrl;
  }
);