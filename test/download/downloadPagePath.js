const axios = require('axios');
const fs = require('fs');

axios.get('https://iyk3p.csb.app/pagePath.json')
  .then(function (response) {
    // handle success
    console.log('success', response);
    fs.writeFile("test/data/pagePath.json", JSON.stringify(response.data), function(err){
      if(err){console.log(err);} else {console.log("file save success");}
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });