
// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var fs = require('fs');

const filePath = './downloadedData/me.jpg';

// Create an S3 client
var s3 = new AWS.S3();

var deleteParams = {
    Bucket: 'nuitrucsakurayosakoi.com', // your bucket name,
    Key: 'me.jpg' // path to the object you're looking for
}

s3.deleteObject(deleteParams, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});