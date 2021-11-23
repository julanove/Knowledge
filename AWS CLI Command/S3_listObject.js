
// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var fs = require('fs');

// Create an S3 client
var s3 = new AWS.S3();

var Params = {
    Bucket: 'nuitrucsakurayosakoi.com', // your bucket name,
}

s3.listObjects(Params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
 });

// ko dc đặt là var xxx = s3.listObjects (vì nó trả về cái mẹ j đó)
