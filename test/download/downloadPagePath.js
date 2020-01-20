const axios = require('axios');
const fs = require('fs');

axios({
    url: 'https://api-euwest.graphcms.com/v1/ck5mae4cy41a201fg7fre4a89/master',
    method: 'post',
    data: {
        query: `
        query pagePaths {
            pagePaths {
                pathName
                pathValue
              }
            }
        `
    }
  })
  .then(function (response) {
    // handle success
    console.log('success', response);
    fs.writeFile("test/data/pagePath.json", JSON.stringify(response.data.data), function(err){
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