var express = require('express'),
    router = express.Router();

router.use("/api", require("../controllers/user.api"));

module.exports = router;
