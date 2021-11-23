
// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var fs = require('fs');

const filePath = 'testPic.jpg';

// Create an S3 client
var s3 = new AWS.S3();

var deleteParams = {
    Bucket: 'test.for.example', // your bucket name,
    Key: 'test2.jpg' // path to the object you're looking for
	//VersionId: 'NpgJR9j_JlG_agHHJ9BV6VraYcODUbYl'
}

s3.deleteObject(deleteParams, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});