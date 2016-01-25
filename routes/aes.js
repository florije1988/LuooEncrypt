/**
 * Created by florije on 1/25/2016.
 */
var express = require('express');
var CryptoJS = require("crypto-js");
var router = express.Router();

///* GET users listing. */
//router.get('/', function(req, res, next) {
//    var pass = req.query.pass;
//    var word = req.query.word;
//    var cryptedStr = CryptoJS.AES.decrypt('b6ce159334e155d8', 'U2FsdGVkX19c5m+90/fvNRsbZ9z9tZIZ+Y7tFi4UhCo=').toString(CryptoJS.enc.Utf8);
//    //var cryptedStr = CryptoJS.AES.encrypt(word, pass).toString();
//    res.json({data: cryptedStr});
//});

router.get('/:pass/:word', function(req, res, next) {
    var pass = req.params.pass;
    var word = req.params.word;
    var decryptedStr = CryptoJS.AES.decrypt(word, pass);
    console.log(decryptedStr);
    // CryptoJS.AES.encrypt("florije", key).toString();
    res.json({data: decryptedStr.toString(CryptoJS.enc.Utf8)});
});

module.exports = router;