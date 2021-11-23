
// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var fs = require('fs');

const filePath = './downloadedData/8.gif';

// Create an S3 client
var s3 = new AWS.S3();

var getParams = {
    Bucket: 'nuitrucsakurayosakoi.com', // your bucket name,
    Key: '8.gif' // path to the object you're looking for
}

s3.getObject(getParams, function(err, data) {
    // Handle any error and exit
    if (err)
        return err;

  // No error happened
  // Convert Body from a Buffer to a String

  let objectData = data.Body.toString('utf-8'); // Use the encoding necessary
  
  //console.log(data.Body.toString());
});

  
var file = require('fs').createWriteStream('./downloadedData/me.gif');
s3.getObject(getParams).createReadStream().pipe(file);