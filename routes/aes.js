/**
 * Created by florije on 1/25/2016.
 */
var express = require('express');
var CryptoJS = require("crypto-js");
var router = express.Router();

/* GET users listing. */
router.get('/:pass/:word', function(req, res, next) {
    var pass = req.params.pass;
    var word = req.params.word;
    var decryptedStr = CryptoJS.AES.decrypt(word, pass);
    // CryptoJS.AES.encrypt("florije", key).toString();
    res.json({data: decryptedStr.toString(CryptoJS.enc.Utf8)});
});

module.exports = router;