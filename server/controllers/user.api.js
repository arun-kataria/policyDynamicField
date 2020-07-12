var express = require("express"),
    router = express.Router(),
    user = require("../models/user");

router.get("/data", function(req, res) {
    user.find({}, function(err, data) {
        if (err) {
            res.send(response(false, err, null));
            return;
        }
        res.send(response(true, 'success!', data[0]));
    });
      
    //res.send(response(true, 'success!', Data));

}).get("/country", function(req, res) {
  res.send(response(true, 'success!', ['India', 'USA', 'Australia', 'New Zealand', 'Japan']));
})

//this will create resoinse object.
function response(success, message, data) {
    return { success: success, message: message, data: data }
}

module.exports = router;