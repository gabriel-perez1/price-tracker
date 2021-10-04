const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');
const {searchAmazon, AmazonSearchResult} = require('unofficial-amazon-search');

async function getItem() {

  const searchInput = document.querySelector('#searchInfo').value.trim();
  
  searchAmazon(searchInput, {includeSponsoredResults: true}).then(data => {
    let productPrice = data.searchResults[0].prices;
    return productPrice;
  });
}

async function checkPrice(productPrice){
  await getItem();
  let price = productPrice;
  if (desiredPrice >= price) {
    console.log('Item is now at desiredPrice');
  } else {
    console.log('Item is still above desiredPrice');
  }
}

async function trackPrice (){
 await getItem();

  let job = new CronJob('* */60 * * * *', function(){
    checkPrice(productPrice);
  }, null, true, null, null, true);
  job.start();
}

async function sendEmail (productPrice) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '*****@gmail.com',
      pass: '*****'
    }
  });
  let emailText = 'Item has dropped below desired price' + productPrice;

  let emailInfo = await transporter.sendMail( {
    from: '"Price Tracker" <*****@gmail.com',
    to: '*****@gmail.com',
    subject: 'Product Price Update',
    text: emailText
  });
  console.log('email sent', emailInfo.messageId)
}

trackPrice();