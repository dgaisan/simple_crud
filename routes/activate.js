var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
    var ret = validateLicense(req.body.domain, req.body.license);

    res.send({activated: ret});
});

// Validate license
function validateLicense(domain, license) {
    console.log('validateLicense');
    if (license === '12345') {
        return true;
    } else {
        return false;
    }
}

module.exports = router;
