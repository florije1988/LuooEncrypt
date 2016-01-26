/**
 * Created by florije on 1/25/2016.
 */
var express = require('express');
var CryptoJS = require("crypto-js");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var pass = req.query.pass;
    var word = req.query.word;
    var decryptedStr = CryptoJS.AES.decrypt(word, pass);
    //var cryptedStr = CryptoJS.AES.encrypt(word, pass).toString();
    res.send(decryptedStr.toString(CryptoJS.enc.Utf8));
});

//router.get('/:pass/:word', function(req, res, next) {
//    var pass = req.params.pass;
//    var word = req.params.word;
//    var decryptedStr = CryptoJS.AES.decrypt('U2FsdGVkX1+sQXIL46FIkFV72HxH3HBKFkbSlR4UZ60=', pass);
//    console.log(decryptedStr);
//    // CryptoJS.AES.encrypt("florije", key).toString();
//    res.json({data: decryptedStr.toString(CryptoJS.enc.Utf8)});
//});

module.exports = router;