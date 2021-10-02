const {searchAmazon, AmazonSearchResult} = require('unofficial-amazon-search');

searchAmazon('anything you would put in the search bar').then(data => {
  console.log(data);
  console.log(data.pageNumber)    // 1
  console.log(data.searchResults[0].title, data.searchResults[0].imageUrl);
});

// load other pages by specifying a page number
// or calling getNextPage()
searchAmazon('mad max', {page: 2, includeSponsoredResults: true}).then(data => {
  console.log(data.pageNumber)    // 2
  console.log(data.searchResults) // (page 2 results)
  return data.getNextPage();
}).then(data => {
  console.log(data.searchResults) // (page 3 results)
});